import React from 'react';
import { CSSObject } from '@emotion/styled';
declare type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'always';
export interface SidebarProps extends React.HTMLAttributes<HTMLHtmlElement> {
    /**
     * width of the sidebar
     * @default ```250px```
     */
    width?: string;
    /**
     * width of the sidebar when collapsed
     * @default ```80px```
     */
    collapsedWidth?: string;
    /**
     * initial collapsed status
     * @default ```false```
     */
    defaultCollapsed?: boolean;
    /**
     * set when the sidebar should trigger responsiveness behavior
     *
     */
    breakPoint?: BreakPoint;
    /**
     * alternative breakpoint value that will be used to trigger responsiveness
     *
     */
    customBreakPoint?: string;
    /**
     * sidebar background color
     */
    backgroundColor?: string;
    /**
     * duration for the transition in milliseconds to be used in collapse and toggle behavior
     * @default ```300```
     */
    transitionDuration?: number;
    /**
     * sidebar background image
     */
    image?: string;
    rtl?: boolean;
    rootStyles?: CSSObject;
    children?: React.ReactNode;
}
export declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLHtmlElement>>;
export {};
