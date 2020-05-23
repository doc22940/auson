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

const storageRef = getFirebase().storage().ref();

export async function getDownloadUrls() {
  const res = await storageRef.listAll();

  let urls = [];
  for (let file of res.items) {
    const url = await file.getDownloadURL();
    urls.push(url);
  }

  return urls;
}

export async function getContents() {
  const urls = await getDownloadUrls();

  let nodes = [];
  for (let url of urls) {
    const res = await axios({
      url,
      responseType: "blob",
    });

    const text = await res.data.text();

    unified()
      .use(markdown)
      .use(html)
      .use(frontmatter)
      .use(extract, { yaml: yaml })
      .process(text, function (err, file) {
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
        const excerpt = String(file)
          .replace(/<[^>]*>?/gm, "")
          .split(" ")
          .slice(0, 30)
          .join(" ");

        nodes.push({ node: { frontmatter, excerpt, html } });
      });
  }
  return nodes;
}
