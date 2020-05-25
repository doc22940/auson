# Getting Started

- Learn git using [Git It](https://github.com/jlord/git-it-electron/releases).
  - Git is a program used to track changes throughout your code, and Github
    hosts a history of these changes for better collaboration.
- Download and install nodejs from [here](https://nodejs.org/en/).
  - Nodejs is a Javascript runtime that helps in creating web applications with
    Javascript.
  - Nodejs includes a package manager called npm. npm is a platform that allows
    developers to write and share plugins.
- Clone this repo:
  ```
  git clone https://github.com/nelsontky/auson.git
  ```
- On your command line, navigate to the folder of the cloned repo.
  - Learn how to use the command line if you are unsure!
  - I saw you do a guide on the command line a little while back :)
- Once in that folder, run:
  ```
  npm install
  ```
  - This command will install all the packages used for the blog.
- Finally, run:
  ```
  gatsby develop
  ```
- After loading, you can visit `http://localhost:8000` with your web browser to
  see a developmental version of the site!
  - Changes you make to the site will be automatically loaded at
    `http://localhost:8000`.

# Posting Guide

- First, learn markdown from
  [here](https://guides.github.com/features/mastering-markdown/).
- If you enter the `/src` folder in this repo, you can see two folders, `posts/`
  and `letters/`.
- Posts go into the `posts/` folder, while letters go into the `letters/`
  folder.
  - In this example we will create a new post.
- Enter the `posts/` folder and follow the naming conventions (using hyphens to
  separate words and all small letters) and create a new `.md` file. The
  markdown file will become a post.
- Referring to the existing posts, you will see this at the top of the `.md`
  file, there is this segment:

  ```
  ---
  title: "Sample letter"
  date: "2020-05-18"
  ---

  Post content...
  ```

  - This is the frontmatter and is used to generate the content of the site. Do
    note that date is in `YYYY-MM-DD` format.

- Write your post with markdown. The post will appear at `http://localhost:8000`
  as you work on it.
- After you are satisfied with your post, commit and push your additions to
  Github!
- Finally, deploy the site by running:
  ```
  npm run deploy
  ```
  - After completion, your changes will show up on the site!
