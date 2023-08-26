import { Box, Typography } from "@mui/material";
import { Stream } from "../../icons/stream";

const HomeStreamTitle = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    height: {
                        xs: " 52px",
                        sm: "64px",
                    },
                    width: {
                        xs: " 52px",
                        sm: "64px",
                    },
                    borderRadius: "100%",
                    border: "3px solid ",
                    borderColor: "background.drawer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: "10px",
                }}
            >
                <Stream
                    sx={{
                        width: { xs: "30px", sm: "40px" },
                        height: { xs: "32px", sm: "42px" },
                    }}
                />
            </Box>
            <Box>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "600",
                    }}
                >
                    Stream name
                </Typography>
                <Typography
                    sx={{
                        color: "#7F92A0",
                    }}
                >
                    Stream owner name
                </Typography>
            </Box>
        </Box>
    );
};

export default HomeStreamTitle;
