/// <reference types="react" />
declare enum groupVariants {
    row = "row",
    column = "column"
}
interface IGroupProps {
    variant?: groupVariants;
    desktopSpacing?: string;
    tabletSpacing?: string;
    nowrap?: boolean;
}
/** @component */
export default function ({ variant, ...props }: IGroupProps): JSX.Element;
export {};
