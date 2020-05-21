import getFirebase from "../firebase";

const axios = require("axios");
const unified = require("unified");
const markdown = require("remark-parse");
const html = require("remark-html");
var frontmatter = require("remark-frontmatter");

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

  let texts = [];
  for (let url of urls) {
    const res = await axios({
      url,
      responseType: "blob",
    });

    const text = await res.data.text();

    unified()
      .use(markdown)
      .use(frontmatter, ["yaml", "toml"])
      .use(html)
      .process(text, function (err, file) {
        if (err) throw err;
        console.log(String(file));
        texts.push(String(file));
      });
  }
  return texts;
}
