import styled from "styled-components";
import { variant, space, SpaceProps } from "styled-system";


type ButtonProps = SpaceProps & {
    variant?: string
}

export const Button = styled.button<ButtonProps>`
    padding: 10px 20px;
    background-color: transparent;
    cursor: pointer;
    color: #fff;
    border-bottom: 2px solid rgba(255,255,255,0.2)


    ${variant({
        variants: {
            default:{
                backgroundColor: 'transparent' ,
                color:  '#fff',
                borderBottom: `2px solid rgba(255,255,255,0.2)`

            },

            primary:{
                padding: '10px 70px',
                backgroundColor: '#fff',
                borderRadius: '4px',
                boxShadow: '.8px .4px .4px rgba(0,0,0,0.8)'
            }
        }
    })}

    ${space}


`;

Button.defaultProps = {
    variant: 'default'
}