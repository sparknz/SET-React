export interface IThemeColorPair {
    "default": string,
    "invert": string
}

export interface IBaseColorShades {
    [index: string]: string;
}

export interface IBreakpoints {
    [index: string]: number;
}

export interface IZIndex { 
    [index: string] : number;
}

export interface IFontSize {
    [index: string] : string;
}

export interface ISpacing {
    [index: string] : string;
}

export interface IHelperResponse {
    [index: string]: ({theme}: {theme: string}) => string
}

export interface IRawTheme {
    "color": {
        "background": {
            [index: string]: IThemeColorPair
        },
        "border": {
            [index: string]: IThemeColorPair
        },
        "base": {
            [index: string]: IBaseColorShades
        },
        "shadow": {
            [index: string]: IThemeColorPair
        },
        "text": {
            interaction2: IThemeColorPair;
            [index: string]: IThemeColorPair;
        }
    }
    "layout": {
      "breakpoint": IBreakpoints;
      "zIndex": IZIndex;
    },
    "size": {
      "font": IFontSize;
      "spacing": ISpacing;
    }
}