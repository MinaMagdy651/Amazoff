import React from 'react';
import { CSSObject } from '@emotion/styled';
export interface MenuItemStylesParams {
    level: number;
    disabled: boolean;
    active: boolean;
    isSubmenu: boolean;
    open?: boolean;
}
export declare type ElementStyles = CSSObject | ((params: MenuItemStylesParams) => CSSObject | undefined);
export interface MenuItemStyles {
    root?: ElementStyles;
    button?: ElementStyles;
    label?: ElementStyles;
    prefix?: ElementStyles;
    suffix?: ElementStyles;
    icon?: ElementStyles;
    subMenuContent?: ElementStyles;
    SubMenuExpandIcon?: ElementStyles;
}
export interface RenderExpandIconParams {
    level: number;
    disabled: boolean;
    active: boolean;
    open: boolean;
}
export interface MenuContextProps {
    /**
     * Transition duration in milliseconds
     * @default ```300```
     */
    transitionDuration?: number;
    closeOnClick?: boolean;
    menuItemStyles?: MenuItemStyles;
    renderExpandIcon?: (params: RenderExpandIconParams) => React.ReactNode;
}
export interface MenuProps extends MenuContextProps, React.MenuHTMLAttributes<HTMLMenuElement> {
    rootStyles?: CSSObject;
    children?: React.ReactNode;
}
export declare const MenuContext: React.Context<MenuContextProps | undefined>;
export declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLMenuElement>>;
