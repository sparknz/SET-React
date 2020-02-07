import * as enums from "@sparknz/set-tokens/dist/interface/default";

type helperFunc = ({ theme }: { theme: string }) => string;

export type IBackgrounColor = { [index in enums.background]: helperFunc };

export type ITextColor = { [index in enums.text]: helperFunc };

export type IBorderColor = { [index in enums.border]: helperFunc };

export type IShadowColor = { [index in enums.shadow]: helperFunc };

export type IBreakpoint = { [index in enums.breakpoint]: number };

export type IZIndex = { [index in enums.zIndex]: string };

export type IFontSize = { [index in enums.font]: string };

export type ISpacing = { [index in enums.spacing]: string };

export type IDuration = { [index in enums.duration]: string };

export type ILineHeight = { [index in enums.line_height]: string };

export type IRadius = { [index in enums.radius]: string };
