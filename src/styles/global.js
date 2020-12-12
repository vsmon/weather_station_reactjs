import { createGlobalStyle } from "styled-components";

import img from "../assets/images/background.jpg";

export default createGlobalStyle`
    *{   
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;        
        font-family: Roboto, Arial, Helvetica, sans-serif;     
        
    }

    #root{
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20 px 50px;
        /* background-image: url(${img});
        background-size: cover; */
    }
    body{
        background-image: url(${img});
        background-size: cover;
    }
`;
