import {ThemeType} from './theme'

import {createGlobalStyle} from 'styled-components'
   
export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@400;500;700&family=Shizuru&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
    *{

        margin: 0;
        padding: 0;
        font-family: 'Shizuru', cursive;
        color: #fff;
        border: 0;
        box-sizing: border-box;
    
    }

    body{
        background-color: ${({theme}) => theme.colors.primary}
    }


`