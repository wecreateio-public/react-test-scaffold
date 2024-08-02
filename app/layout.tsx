import { initConstantsIfAbsent, inProductionEnv } from '../lib/constants.public';
import Providers from '../components/common/misc/Providers';

let fetchedData:
  | {
      rawEnvData: string;
    }
  | undefined = undefined;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  if (fetchedData == null) {
    const envRes = await fetch('http://localhost:3001/env', { cache: 'no-store' });
    if (!envRes.ok) {
      throw new Error(`Fetching the env data failed: ${envRes.status} (${envRes.statusText})`);
    }
    fetchedData = { rawEnvData: await envRes.text() };
    // For server side, we set those variables "once and for all" to avoid unnecessary recalculations
    initConstantsIfAbsent(fetchedData.rawEnvData);
    if (inProductionEnv) {
      if (fetchedData.rawEnvData.includes('NEXT_PUBLIC_USE_JWT')) {
        console.warn(
          'NEXT_PUBLIC_USE_JWT was found in a production environment - this is not allowed and should be fixed immediately!'
        );
        const parsed = JSON.parse(fetchedData.rawEnvData);
        delete parsed.NEXT_PUBLIC_USE_JWT;
        fetchedData.rawEnvData = JSON.stringify(parsed);
      }
      // on dev, recompiles will fail otherwise
      void (await fetch('http://localhost:3001/shutdown', { cache: 'no-store' }));
    }
  }
  return (
    <html>
      <body>
        <Providers envData={fetchedData.rawEnvData}> {children}</Providers>
      </body>
    </html>
  );
}
