import styled from "styled-components";
import {layout, LayoutProps, space, SpaceProps, color, ColorProps, borderRadius, BorderRadiusProps, borderLeft, BorderLeftProps, flexbox, FlexboxProps } from 'styled-system'



type ColumnProps = LayoutProps & SpaceProps & ColorProps & BorderRadiusProps & BorderLeftProps &FlexboxProps;

export const Column =styled.div<ColumnProps>`

    display: flex;
    flex-direction: column;
    ${layout}
    ${space}
    ${color}
    ${borderRadius}
    ${borderLeft}
    ${flexbox}
    
`