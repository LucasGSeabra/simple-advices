import React from "react";
import Main from "./pages/MainPage";
import Header from "./components/Header";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Main />
    </div>
  );
}

export default App;
