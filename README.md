# WeCreate Scaffold UI

## Introduction

Welcome to this scaffold project for the challenge! The folder and file structure is rather similar to our
main project and therefore a bit verbose. Don't be discouraged by that, if you create new files, put them
where-ever you feel it's appropriate.

- You can find the app's entry point in `pages/_app.tsx`.
- There are two queries prepared: `useTopicQuery()` and `useArticleQuery()`, and the first one can be seen in
  action. In case you need other queries, feel free to contact use! If you're confident with GraphQL, you
  can also try to set up new queries by your own: develop them at
  our [playground](https://graph.dev.we-create.io/graphql), add them to `lib/graphql/query` and
  run `npm run generate:graphql` for the updated TypeScript file. But doing that on your own isn't first priority at all.
- This project is work in progress. It's totally possible that something essential (like queries) is missing at
  this point, so don't hesitate to ask us if you got that impression!
- If it makes sense, try
  to utilize [(dynamic) routing]([API routes](https://nextjs.org/docs/api-routes/introduction))
- Our core interest is not to see that you are an expert on a specific library as NextJS, GraphQL etc., but
  that you are comfortable with React and CSS and maybe MaterialUI, and that you find your way around. It's
  also nice to see if you're used to common design patterns, so feel free to "overengineer" your code a bit.
  The example page isn't really a shining example of well-structured code, so if you do better than that, it
  would be very welcome! ;)
- In case you want to write tests, `jest` is already set up.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/_app.tsx`. The page auto-updates as you edit the file.

We're looking forward your ideas!