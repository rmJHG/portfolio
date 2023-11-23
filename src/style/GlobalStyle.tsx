import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};


*{
    box-sizing:border-box;
}

ul, ol {
    list-style:none;
}
`;

export default GlobalStyles;
