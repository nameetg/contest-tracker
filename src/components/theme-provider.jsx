// import { createContext, useContext, useEffect, useState } from "react";
// import PropTypes from "prop-types";

// const ThemeProviderContext = createContext({
//   theme: "system",
//   setTheme: () => null,
// });

// export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme", ...props }) {
//   const [themeState, setThemeState] = useState(() => localStorage.getItem(storageKey) || defaultTheme);

//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.classList.remove("light", "dark");
  
//     if (themeState === "system") {
//       const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//       root.classList.add(systemTheme);
//     } else {
//       root.classList.add(themeState);
//     }
//   }, [themeState]);
  

//   const value = {
//     theme: themeState,
//     setTheme: (newTheme) => {
//       localStorage.setItem(storageKey, newTheme);
//       setThemeState(newTheme);
//     },
//   };
  

//   return (
//     <ThemeProviderContext.Provider {...props} value={value}>
//       {children}
//     </ThemeProviderContext.Provider>
//   );
// }

// ThemeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
//   defaultTheme: PropTypes.oneOf(["dark", "light", "system"]),
//   storageKey: PropTypes.string,
// };

// export const useTheme = () => {
//   const context = useContext(ThemeProviderContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };
