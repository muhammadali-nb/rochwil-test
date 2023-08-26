import { Box, Grid } from "@mui/material";
import Player from "../components/global/player/player";
import HomeLayout from "../components/home/home-layout";
import HomeLiveChat from "../components/home/home-live-chat";
import HomeStreamTitle from "../components/home/home-stream-title";
import HomeOnlineUsers from "../components/home/home-online-users";

const Home = () => {
    return (
        <HomeLayout>
            <Box
                sx={{
                    mb: "16px",
                }}
            >
                <HomeStreamTitle />
            </Box>

            <Grid rowSpacing={3} columnSpacing={2} container>
                <Grid item xs={12} md={8}>
                    <Player />
                </Grid>
                <Grid item xs={12} md={4}>
                    <HomeLiveChat />
                </Grid>
            </Grid>

            <HomeOnlineUsers />
        </HomeLayout>
    );
};

export default Home;
