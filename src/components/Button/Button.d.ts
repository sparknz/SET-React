/// <reference types="react" />
export declare enum VARIANTS {
    PRIMARY_BLUE = "PRIMARY_BLUE",
    PRIMARY_WHITE = "PRIMARY_WHITE",
    SECONDARY_BLUE = "SECONDARY_BLUE",
    SECONDARY_WHITE = "SECONDARY_WHITE",
    TERTIARY_BLUE = "TERTIARY_BLUE",
    TERTIARY_WHITE = "TERTIARY_WHITE"
}
declare const _default: ({ variant, ...props }: {
    variant?: VARIANTS;
}) => JSX.Element;
export default _default;
