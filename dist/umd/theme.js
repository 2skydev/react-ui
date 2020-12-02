// import React from 'react'
// import { ThemeProvider } from 'styled-components'
// import merge from 'deepmerge'
// import defaultTheme from './defaultTheme'
// type Props = React.PropsWithChildren<{
//   theme?: object
// }>
// export default function ({ theme = {}, children }: Props) {
//   return (
//     <ThemeProvider theme={merge(defaultTheme, theme)}>
//       {children}
//     </ThemeProvider>
//   )
// }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.undefined = mod.exports;
  }
})(this, function () {
  "use strict";
});
//# sourceMappingURL=theme.js.map