import { Box, Typography } from "@mui/material";
import user from "../../assets/images/user.png";
import { useState } from "react";

const user_comment: string =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe asperiores magni cum distinctio officiis incidunt fuga harum iste voluptatibus, nam in repellat officia est obcaecati ea aliquam eveniet? Distinctio, vitae.";

export const HomeLiveStreamComment = () => {
    const [unwrapText, setUnwrapText] = useState(false);

    return (
        <Box sx={{ pb: 1.6 }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: "4px",
                    transition: "all 1s easy-in-out ",
                }}
            >
                <Box
                    sx={{
                        width: "34px ",
                        height: "34px ",
                        mr: 1,
                    }}
                >
                    <img src={user} width="100%" height="100%" />
                </Box>
                <Box>
                    <Typography>Muhammadaminmirzo Shifler</Typography>
                    <Typography
                        sx={{
                            fontSize: "10px",
                            color: "#7F92A0",
                        }}
                    >
                        Manager
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    width: "100%",
                    pl: "40px",
                }}
            >
                <Typography
                    sx={{
                        width: "100%",
                        maxHeight: unwrapText ? "auto" : "72px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",

                        // whiteSpace: "nowrap",
                    }}
                >
                    {user_comment}
                </Typography>
                {user_comment.length > 186 && (
                    <Box
                        onClick={() => setUnwrapText(!unwrapText)}
                        component="span"
                        sx={{ color: "background.drawer", fontWeight: "500" }}
                    >
                        {unwrapText ? "свернуть" : "еще"}
                    </Box>
                )}
            </Box>
        </Box>
    );
};
