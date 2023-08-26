import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./theme/main.css";
import MuiThemeProvider from "./theme/mui-theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </React.StrictMode>
);
