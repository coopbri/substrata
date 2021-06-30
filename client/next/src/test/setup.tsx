import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "lib/theme";

/**
 * Global app providers.
 */
const Providers = () => {
  return <ThemeProvider theme={theme}></ThemeProvider>;
};

/**
 * Inject providers into render method.
 */
const customRender = (ui: any, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
