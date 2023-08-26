import { ReactNode } from "react";
import { Logo } from "../global/logo";
import { Box } from "@mui/material";

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Box>
            <Box
                sx={{
                    px: { xs: "16px", sm: "24px" },
                    py: {
                        sm: "34px",
                        xs: "20px",
                    },
                }}
            >
                <Logo />
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
