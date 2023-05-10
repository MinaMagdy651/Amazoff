import React from 'react';
interface SidebarState {
    collapsed?: boolean;
    toggled?: boolean;
    broken?: boolean;
    rtl?: boolean;
    width?: string;
    collapsedWidth?: string;
    transitionDuration?: number;
}
export interface SidebarContextProps extends SidebarState {
    updateSidebarState: (values: SidebarState) => void;
    updateCollapseState: () => void;
    updateToggleState: () => void;
}
interface SidebarProviderProps {
    children?: React.ReactNode;
}
export declare const SidebarContext: React.Context<SidebarContextProps | undefined>;
export declare const SidebarProvider: React.FC<SidebarProviderProps>;
export {};
