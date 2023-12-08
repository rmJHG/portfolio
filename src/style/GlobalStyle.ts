import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset};

*{
    box-sizing:border-box;

}
body{
    height:100vh;
}

ul, ol {
    list-style:none;
}
a{
    text-decoration:none;
    color:black;
}


`;

export default GlobalStyles;
