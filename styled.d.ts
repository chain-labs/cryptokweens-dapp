import "styled-components";

interface ISpace {
  mxxs: string;
  mxs: string;
  ms: string;
  mm: string;
  ml: string;
  mxl: string;
  mxxl: string;
  mxxxl: string;

  wxxs: string;
  wxs: string;
  ws: string;
  wm: string;
  wl: string;
  wxl: string;
  wxxl: string;
}

interface IBreakpoints {
  mobS: string;
  mobL: string;
  tabS: string;
  tabL: string;
  deskS: string;
  deskM: string;
  deskL: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      "ck-gold": string;
      "dark-purple": string;
      "purple-10": string;
      "purple-20": string;
      "purple-30": string;
      "purple-50": string;
      "purple-60": string;
      "purple-70": string;
      "purple-80": string;
      "purple-90": string;
      "purple-100": string;
    };
    space: string[] & Partial<ISpace>;
    breakpoints: string[] & Partial<IBreakpoints>;
  }
}
