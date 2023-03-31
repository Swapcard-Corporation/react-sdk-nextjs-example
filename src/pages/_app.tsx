import App, { AppProps } from "next/app";
import {
  initClient,
  ClientProvider,
  getClientState,
  ClientCache,
} from "@swapcard/react-sdk/lib/client";
import {
  ApplicationProvider,
  getApplication,
  getScreenWidthFromUserAgent,
} from "@swapcard/react-sdk/lib/application";
import { EventProvider, getEvent } from "@swapcard/react-sdk/lib/event";

import Layout from "../layout";
import { colors } from "@/ui/colors";
import { playFairDisplay } from "@/ui/fonts";
import Head from "next/head";

function MyEventWebsiteApp({
  Component,
  pageProps,
  initialState,
  initialScreenWidth,
}: AppProps & { initialState: ClientCache; initialScreenWidth: number }) {
  const client = initClient({ initialState });

  return (
    <main className={playFairDisplay.className}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={colors.main[100]}
        />
        <meta name="msapplication-TileColor" content={colors.text} />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ClientProvider client={client}>
        <ApplicationProvider
          initialScreenWidth={initialScreenWidth}
          disableResetCSS
          theme={{
            radius: {
              md: "16px",
            },
            colors: {
              textSecondary: colors.text,
              borders: colors.main[30],
              dividers: "transparent",
              title: colors.main[100],
              actionsSecondary: colors.main[70],
            },
          }}
        >
          <EventProvider eventId={process.env.NEXT_PUBLIC_EVENT_ID}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </EventProvider>
        </ApplicationProvider>
      </ClientProvider>
    </main>
  );
}

MyEventWebsiteApp.getInitialProps = async (appContext: any) => {
  let initialState = {};
  let initialScreenWidth;

  if (typeof window === "undefined") {
    const client = initClient();

    await Promise.all([
      getApplication(client),
      getEvent(client, { eventId: process.env.NEXT_PUBLIC_EVENT_ID }),
    ]);

    initialState = getClientState(client);

    initialScreenWidth = getScreenWidthFromUserAgent(
      appContext.ctx.req.headers["user-agent"]
    );

    appContext.ctx.client = client;
  }

  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    initialState,
    initialScreenWidth,
  };
};

export default MyEventWebsiteApp;
