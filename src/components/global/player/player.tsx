import { useRef, useState } from "react";
import { Box } from "@mui/material";
import { MiniPlayer } from "../../../icons/mini-player";
import { FullScreenPayer } from "../../../icons/full-screen-player";
import ControlesButtons from "./controles-buttons";
import video from "../../../assets/video/timer.mp4";
import { Play } from "../../../icons/play";

const Player = () => {
    const playerRef = useRef<HTMLVideoElement>(null);
    const playerContainerRef = useRef<HTMLDivElement>(null);
    const [isPlayed, setIsPlayed] = useState(false);
    // const [miniPlayer, setMiniPlayer] = useState(true);

    const togglePlay = () => {
        if (isPlayed) playerRef.current?.pause();
        else playerRef.current?.play();
        setIsPlayed(!isPlayed);
    };

    const toggleMiniPlayer = () => {
        playerRef.current?.requestPictureInPicture();
    };

    const toggleFullScreen = () => {
        if (document.fullscreenElement == null)
            playerContainerRef.current?.requestFullscreen();
        else document.exitFullscreen();
    };

    return (
        <Box
            sx={{
                borderRadius: "16px",
                overflow: "hidden",
                width: "100%",
                height: "100%",
            }}
        >
            <Box
                ref={playerContainerRef}
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    "&:hover .play-btn ": {
                        opacity: isPlayed ? 0 : 1,
                    },
                    "&:hover .player-controllers ": {
                        opacity: 1,
                    },
                    transition: "all 0.8s easy-in-out",
                }}
            >
                <video
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "relative",
                    }}
                    ref={playerRef}
                    onClick={togglePlay}
                    controls={false}
                >
                    <source src={video} type="video/mp4" />
                </video>

                <Box
                    className="play-btn"
                    onClick={togglePlay}
                    sx={{
                        height: "80px",
                        width: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        borderRadius: "100%",
                        backgroundColor: "rgba(242, 242, 242,0.8)",
                        transform: "translate(-50%, -50%)",
                        opacity: 0,
                    }}
                >
                    <Play sx={{ width: "40px", height: "40px" }} />
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        display: "flex",
                        gap: "18px",
                        right: 18,
                        bottom: 18,
                        opacity: 0,
                    }}
                    className="player-controllers"
                >
                    <ControlesButtons
                        onClick={toggleMiniPlayer}
                        icon={
                            <MiniPlayer
                                sx={{ width: "16px", height: "16px" }}
                            />
                        }
                    />
                    <ControlesButtons
                        onClick={toggleFullScreen}
                        icon={
                            <FullScreenPayer
                                sx={{ width: "16px", height: "16px" }}
                            />
                        }
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Player;
