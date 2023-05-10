import React from 'react';
import { CSSObject } from '@emotion/styled';
export interface MenuItemProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> {
    icon?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    component?: string | React.ReactElement;
    rootStyles?: CSSObject;
    /**
     * @ignore
     */
    level?: number;
}
export declare const MenuItemFR: React.ForwardRefRenderFunction<HTMLLIElement, MenuItemProps>;
export declare const MenuItem: React.ForwardRefExoticComponent<MenuItemProps & React.RefAttributes<HTMLLIElement>>;
