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

function MyEventWebsiteApp({
  Component,
  pageProps,
  initialState,
  initialScreenWidth,
}: AppProps & { initialState: ClientCache; initialScreenWidth: number }) {
  const client = initClient({ initialState });

  return (
    <ClientProvider client={client}>
      <ApplicationProvider initialScreenWidth={initialScreenWidth}>
        <EventProvider eventId={process.env.NEXT_PUBLIC_EVENT_ID}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </EventProvider>
      </ApplicationProvider>
    </ClientProvider>
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
