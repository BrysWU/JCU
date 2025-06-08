import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import SiteNotification from "./components/SiteNotification";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#1976d2" },
          secondary: { main: "#ff9800" },
          background: {
            default: mode === "dark" ? "#181a1b" : "#f5f7fa",
            paper: mode === "dark" ? "#232527" : "#fff",
          },
        },
        typography: {
          fontFamily: "Roboto, Arial, sans-serif",
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <SiteNotification />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <DarkModeToggle mode={mode} setMode={setMode} />
      </Router>
    </ThemeProvider>
  );
}

export default App;