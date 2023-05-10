import React from 'react';
import { CSSObject } from '@emotion/styled';
export interface SubMenuProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> {
    label?: string | React.ReactNode;
    icon?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    active?: boolean;
    disabled?: boolean;
    rootStyles?: CSSObject;
    component?: string | React.ReactElement;
    children?: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
    /**
     * @ignore
     */
    level?: number;
}
export declare const SubMenuFR: React.ForwardRefRenderFunction<HTMLLIElement, SubMenuProps>;
export declare const SubMenu: React.ForwardRefExoticComponent<SubMenuProps & React.RefAttributes<HTMLLIElement>>;
