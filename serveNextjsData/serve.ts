import http from 'http';

/** Provides Next.js with static files and data */
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  try {
    switch (req.url) {
      case '/env': {
        // Next.js won't accept injected public env entries after it was built (https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#runtime-environment-variables),
        // so we need to serve them from here.
        // Additionally to variables starting with NEXT_PUBLIC_, we serve env variables prefixed with DYNAMIC_NEXT_PUBLIC_:
        // the latter allow server-side methods without any need for hook or async calls to access them, and afterward we leverage them to public variables for the client-side.
        const envData: { [envKey: string]: string | undefined } = {};
        for (const k of Object.keys(process.env)) {
          if (k.startsWith('NEXT_PUBLIC_') || k.startsWith('DYNAMIC_NEXT_PUBLIC_'))
            envData[k] = process.env[k];
        }
        res.end(JSON.stringify(envData));
        return;
      }
      case '/shutdown':
        res.end();
        return process.exit(0);
      default:
        res.writeHead(404);
        res.end();
    }
  } catch (err) {
    console.error(err);
    if (typeof err === 'object' && err != null && 'message' in err && typeof err.message === 'string') {
      res.write(err.message);
    }
    res.writeHead(500);
    res.end();
  }
});

server.listen(3001, () => console.log('Serving descriptions on port', 3001));
