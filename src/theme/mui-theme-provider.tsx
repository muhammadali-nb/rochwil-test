import { ReactNode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "./index";

function MuiThemeProvider(props: { children: ReactNode }) {
    const { children } = props;

    const theme = createTheme({
        mode: "dark",
        direction: "ltr",
        responsiveFontSizes: true,
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default MuiThemeProvider;
