import React, { ReactChildren } from 'react';
export interface ButtonProps {
    color: string;
    children: ReactChildren;
}
declare const _default: React.ComponentType<Pick<ButtonProps, "color" | "children"> & import("@material-ui/styles").StyledComponentProps<string>>;
export default _default;
