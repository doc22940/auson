import getFirebase from "../firebase";

const axios = require("axios");
const extract = require("remark-extract-frontmatter");
const frontmatter = require("remark-frontmatter");
const html = require("remark-html");
const markdown = require("remark-parse");
const unified = require("unified");
const yaml = require("yaml").parse;

const dateOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

async function getPosts() {
  const storageRef = getFirebase().storage().ref();
  const res = await storageRef.listAll();

  let posts = [];
  for (let file of res.items) {
    const url = await file.getDownloadURL();
    const metadata = await file.getMetadata();
    const name = metadata.name.replace(".md", "");

    posts.push({ url, name });
  }

  return posts;
}

function parseMarkdown(text, name) {
  return new Promise((resolve, reject) => {
    unified()
      .use(markdown)
      .use(html)
      .use(frontmatter)
      .use(extract, { yaml: yaml })
      .process(text, (err, file) => {
        if (err) {
          reject(err);
        }

        const html = String(file);

        const dateParts = file.data.date.split("-");
        const date = new Date(
          dateParts[0],
          dateParts[1] - 1,
          dateParts[2]
        ).toLocaleString("en-GB", dateOptions);

        const frontmatter = {
          ...file.data,
          date,
        };

        const excerpt =
          String(file)
            .replace(/<[^>]*>?/gm, "") // remove html tags
            .split(" ")
            .slice(0, 30)
            .join(" ") + "...";

        resolve({
          node: {
            frontmatter,
            excerpt,
            html,
            fields: { slug: `private/${name}` },
          },
        });
      });
  });
}

export async function getAllPrivate() {
  const posts = await getPosts();

  let edges = [];
  for (let { url, name } of posts) {
    const res = await axios({
      url,
      responseType: "blob",
    });

    const text = await res.data.text();
    const edge = await parseMarkdown(text, name);
    edges.push(edge);
  }

  return edges;
}

export async function getPrivateArticle(fileName) {
  const storageRef = getFirebase().storage().ref();
  const fileRef = storageRef.child(fileName + ".md");
  const url = await fileRef.getDownloadURL();
  const metadata = await fileRef.getMetadata();
  const name = metadata.name.replace(".md", "");

  const res = await axios({
    url,
    responseType: "blob",
  });

  const text = await res.data.text();

  const edge = await parseMarkdown(text, name);

  return { markdownRemark: edge.node };
}
