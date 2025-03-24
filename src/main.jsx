import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import contestTrackerStore from "./store/index";
// import { ThemeProvider } from "./components/theme-provider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={contestTrackerStore}>
      {/* <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme"> */}
        <App />
      {/* </ThemeProvider> */}
    </Provider>
  </StrictMode>
);
