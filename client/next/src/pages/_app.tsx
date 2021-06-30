import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, Layout } from "components";
import theme from "lib/theme";

/**
 * Custom app entrypoint.
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
