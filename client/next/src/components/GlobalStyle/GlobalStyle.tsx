import { createGlobalStyle } from "styled-components";

import type { Theme } from "lib/theme";

/**
 * Global CSS styles.
 */
const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  /* reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;

    /* disable highlight color */
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  input, textarea, button {
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    outline: none;
  }

  ul, li {
    list-style-type: none;
  }
`;

export default GlobalStyle;
