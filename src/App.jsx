import React from "react";
import Home from "./components/Pcompos/Home";
import FetchContests from "./components/Pcompos/FetchContests";
// import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  return (
    <>
      {/* {children} */}
      <Home />
      <FetchContests />
    </>
  );
};

export default App;
