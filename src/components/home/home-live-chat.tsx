import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { HomeLiveStreamComment } from "./home-live-stream-comment";
import { Message } from "../../icons/message";

const HomeLiveChat = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "background.secondary",
                p: "22px 22px 20px 22px",
                borderRadius: "16px",
            }}
        >
            <Typography variant="h5" sx={{ mb: "16px" }}>
                Live chat
            </Typography>
            <Box>
                <Box
                    sx={{
                        minHeight: "284px",
                        maxHeight: "386px",
                        height: "100%",
                        gap: "12px",
                        overflowY: "scroll",
                        py: 1,
                        position: "relative",
                    }}
                >
                    <HomeLiveStreamComment />
                    <HomeLiveStreamComment />
                    <HomeLiveStreamComment />
                    <HomeLiveStreamComment />
                </Box>
                <Box
                    sx={{
                        pt: "4px",
                    }}
                >
                    <TextField
                        placeholder="Type something"
                        sx={{
                            width: "100%",
                            ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                    borderColor: "primary.main",
                                },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Message />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default HomeLiveChat;
