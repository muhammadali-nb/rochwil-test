import { Box, Typography } from "@mui/material";
import { Eye } from "../../icons/eye";

const HomeOnlineUsers = () => {
    return (
        <Box sx={{ display: "flex", pt: 1 }}>
            <Eye />
            <Typography sx={{ fontWeight: 600, ml: 1 }}>
                13 455 Watching
            </Typography>
        </Box>
    );
};

export default HomeOnlineUsers;
