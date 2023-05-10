interface ProSidebarResult {
    /**
     * a function that enables you to update the sidebar's collapsed status
     */
    collapseSidebar: (collapsed?: boolean) => void;
    /**
     * a function that enables you to update the sidebar's toggled status
     */
    toggleSidebar: (toggled?: boolean) => void;
    broken: boolean;
    collapsed: boolean;
    toggled: boolean;
    rtl: boolean;
}
export declare const useProSidebar: () => ProSidebarResult;
export {};
