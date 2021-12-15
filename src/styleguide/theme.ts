import { DefaultTheme } from "styled-components";

//Breakpoints
const breakpoints: DefaultTheme["breakpoints"] = ["0px", "576px", "768px", "992px", "1200px", "1440px", "1600px"];

breakpoints.mobS = breakpoints[0]; // 319px
breakpoints.mobL = breakpoints[1]; // 424px
breakpoints.tabS = breakpoints[2]; // 767px
breakpoints.tabL = breakpoints[3]; // 1025px
breakpoints.deskS = breakpoints[4]; //1199px
breakpoints.deskM = breakpoints[5]; //1440px
breakpoints.deskL = breakpoints[6]; //1600px

//Spacing
const space: DefaultTheme["space"] = [
  "0",
  "0.4rem",
  "0.8rem",
  "1.2rem",
  "1.6rem",
  "2rem",
  "2.4rem",
  "2.8rem",
  "3.2rem",
  "4rem",
  "4.8rem",
  "5.6rem",
  "6.4rem",
  "8rem",
  "10rem",
  "12rem",
];

space.mxxs = space[1]; //4px
space.mxs = space[2]; //8px
space.ms = space[3]; //12px
space.mm = space[4]; //16px
space.ml = space[5]; //20px
space.mxl = space[6]; //24px
space.mxxl = space[7]; //28px
space.mxxxl = space[8]; //32px

space.wxxs = space[9]; //40px
space.wxs = space[10]; //48px
space.ws = space[11]; //56px
space.wm = space[12]; //64px
space.wl = space[13]; //80px
space.wxl = space[14]; //100px
space.wxxl = space[15]; //120px

const colors: DefaultTheme["colors"] = {
  "ck-gold": "#E2C675",
  "dark-purple": "#190034",
  "purple-10": "#F4E3FC",
  "purple-20": "#DECFE5",
  "purple-30": "#D1B2E0",
  "purple-50": "#D492F4",
  "purple-60": "#B75EE2",
  "purple-70": "#933DBE",
  "purple-80": "#711E99",
  "purple-90": "#4F0175",
  "purple-100": "#3D005B",
};

const theme: DefaultTheme = {
  space,
  breakpoints,
  colors,
};

export default theme;
