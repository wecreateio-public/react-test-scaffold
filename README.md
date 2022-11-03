# WeCreate Scaffold UI

## Introduction

Welcome to this scaffold project for the challenge! The folder and file structure is rather similar to our
main project and therefore a bit verbose. Don't be discouraged by that, if you create new files, put them
where-ever you feel it's appropriate.

- You can find the app's entry point in `pages/_app.tsx`.
- There are two queries prepared: `useTopicQuery()` and `useArticleQuery()`, and the first one can be seen in
  action. In case you need other queries, feel free to contact us! If you're confident with GraphQL, you
  can also try to set up new queries by your own: develop them at
  our [playground](https://graph.dev.we-create.io/graphql), add them to `lib/graphql/query` and
  run `npm run generate:graphql` for the updated TypeScript file. But doing that on your own isn't first
  priority at all.
- IDs have a pattern of `[U|A]:[som3-g3neric-stuff]:[EntityType]`,
  e.g. `U:dd1db6ff-f513-4759-9f22-2b6da30e716c:Topic`. Use that full id to query entities.
- This project is work in progress. It's totally possible that something essential (like queries) is missing
  at this point, so don't hesitate to ask us if you got that impression!
- The project is set up in Next.js 12 style. If you want, you can migrate it to Next.js 13 style and utilize
  the new approaches.
- If it makes sense, try to
  utilize [(dynamic) routing]([API routes](https://nextjs.org/docs/api-routes/introduction))
- Our core interest is not to see that you are an expert on a specific library as Next.js, GraphQL etc., but
  that you are comfortable with React and CSS and maybe MaterialUI, and that you find your way around. It's
  also nice to see if you're used to common design patterns, so feel free to "overengineer" your code a bit.
  The example page isn't really a shining example of well-structured code, so if you do better than that, it
  would be very welcome! ;)
- While in our tech-stack TypeScript is mandatory and some experiences in that regard would be great,
  it's also not the main focus of this challenge. If possible, use `.ts` and `.tsx`, but if that's a
  showstopper, plain JavasScript is also okay.
- The dependency versions resemble our productive ones and are a bit outdated for that matter.
- This project is work in progress. It's totally possible that something essential (like queries) is missing
  at this point, so don't hesitate to ask us if you got that impression!

## Figma Design

You can find the Figma design [here](https://www.figma.com/file/zGRUByoo1mN1h9uPAnjmmf/WeCreate-Screen).

A working UI/UX prototype can be
found [here](https://www.figma.com/proto/zGRUByoo1mN1h9uPAnjmmf/WeCreate-Screen?page-id=0%3A1&node-id=7%3A242&viewport=395%2C472%2C0.17&scaling=scale-down&starting-point-node-id=7%3A242)

You don't have to use this design, feel free to implement improvements and changes!

## Getting Started

First, run the development server:

```bash
npm run dev
```

In case you see the error `Cannot find module graphql`, run `npm i graphql`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/_app.tsx`. The page auto-updates as you edit the file.

We're looking forward your ideas!

## Tasks that should be done

- Create a slider which runs without user interaction and displays the `Topic` and `Aticle` data received
  from the according GraphQL queries.
- Please use for each big step of your work a git commit
- Implement QR codes support with library of your choice. The QR codes should link to a page with the
  following pattern: `https://dev.we-create.io/article/[articleId]`,
  e.g. `https://www.dev.we-create.io/en/article/ff016437-5711-42fe-9419-fec0156be61e`
- Add a time-based progress bar displaying when the next item will be
  shown: ![](https://user-images.githubusercontent.com/2462953/200390328-f46e5d36-b7f0-44f3-8807-dcf3344d4742.png)

## Optional Tasks in case you want to prove some experience in other (but related) fields

- Utilize the Next.js 13 `api` or Next.js 14 server actions, where feasible 
- Write a test (`jest` is set up)
- Build a Docker container
- Create a GitHub Action that will run some steps (e.g. runs tests or builds a container)