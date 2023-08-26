import { Box } from "@mui/material";
import { ReactElement } from "react";

interface IControlesButtons {
    onClick: () => void;
    icon: ReactElement;
}

const ControlesButtons = (props: IControlesButtons) => {
    const { onClick, icon } = props;

    return (
        <Box
            onClick={onClick}
            sx={{
                width: "32px",
                height: "32px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(242, 242, 242,0.8)",
                borderRadius: "100%",
            }}
        >
            {icon}
        </Box>
    );
};

export default ControlesButtons;
