import { Box, Typography } from "@mui/material";
import { useState } from "react";

const HomeComment = () => {
    const [unwrapText, setUnwrapText] = useState(false);

    return (
        <Box
            sx={{
                width: "100%",
                pl: "40px",
            }}
        >
            <Typography
                sx={{
                    // height: unwrapText ? "auto" : "72px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxLines: 3,
                }}
            >
                Дайте доступ к вашему бизнес само-занятым курьерам внутри
                платформы, курьерским компаниям которые подключены к платформе
                DWED, либо настройте свою схем достав , mdmdmdmdm
                dmdmdmdmdmdmmddmdmmdmdm dmdmmdmd mdmdmmdmdm
            </Typography>
            <Box
                onClick={() => setUnwrapText(!unwrapText)}
                component="span"
                sx={{ color: "background.drawer", fontWeight: "500" }}
            >
                еще
            </Box>
        </Box>
    );
};

export default HomeComment;
