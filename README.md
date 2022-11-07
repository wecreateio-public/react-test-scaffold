# WeCreate Scaffold UI

## Introduction

Welcome to this scaffold project for the challenge! The folder and file structure is rather similar to our
main
project and therefore a bit verbose.

- You can find the app's entry point in `pages/_app.tsx`.
- There are two queries prepared: `useTopicQuery()` and `useArticleQuery()`, and the first one can be seen in
  action. In case you need other queries, feel free to contact use! If you're confident with GraphQL, you
  can also try to set up new queries by your own: develop them at
  our [playground](https://graph.dev.we-create.io/graphql), add them to `lib/graphql/query` and
  run `npm run generate:graphql`. But doing that on your own isn't first priority at all.
- This project something like work in progress. It's totally possible that something essential (like queries)
  is missing at
  this point, so don't hesitate to ask us if you got that impression!
- If it makes sense, try
  to utilize [(dynamic) routing]([API routes](https://nextjs.org/docs/api-routes/introduction))
- Our core interest is not to see that you are an expert on a specific library as NextJS, GraphQL etc., but
  that you are comfortable with React and CSS and maybe MaterialUI, and that you find your way around. It's
  also nice to see if you're used to common design patterns, so feel free to "overengineer" your code a bit.
  The example page isn't really a shining example of well-structured code, so if you do better than that, it
  would be very welcome! ;)

## Figma Design

Here you can find the Figma Design
https://www.figma.com/file/zGRUByoo1mN1h9uPAnjmmf/WeCreate-Screen

A working UI/UX prototype will be shown here
https://www.figma.com/proto/zGRUByoo1mN1h9uPAnjmmf/WeCreate-Screen?page-id=0%3A1&node-id=7%3A242&viewport=395%2C472%2C0.17&scaling=scale-down&starting-point-node-id=7%3A242

** You dont have to use this design, feel free!**

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/_app.tsx`. The page auto-updates as you edit the file.

## Tasks that should be done
* Based on the data you will get from the graphql query, you have to create a slider that can run without user interaction
* Please use for each big step of your work a git commit
* Implement a QR Code, any react lib could be used. The QR Code should link to the following page: https://dev.we-create.io/article/{articleID}
* There should be a time based progress bar, that the user see when the next item will be shown
<img width="1285" alt="image" src="https://user-images.githubusercontent.com/2462953/200390328-f46e5d36-b7f0-44f3-8807-dcf3344d4742.png">


## Optional Tasks, does not have to be done
* Write a test
* Build a Docker container
* GitHub Action that will run some steps (Tests, Build Container)

