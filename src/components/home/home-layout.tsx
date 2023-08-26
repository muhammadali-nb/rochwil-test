import { ReactNode } from "react";
import { Logo } from "../global/logo";
import { Box } from "@mui/material";

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Box>
            <Box
                sx={{
                    px: "28px",
                    py: "32px",
                }}
            >
                <Logo/>
                <Box
                    sx={{
                        pt: "16px",
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default HomeLayout;
