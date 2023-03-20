import * as React from "react";
import { CircularProgress, Box, Avatar, Typography } from '@mui/material';
const Loading = () => {
    return (
        <React.Fragment>
            <Box
                sx={{
                    position: "absolute",
                    top: '0',
                    background: "linear-gradient(180deg, #84EECE 0%, #4957DA 48.96%, #A35CFD 100%)",
                    width: "100%",
                    height: "100%",
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "10px"
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "60%",
                        maxWidth: "400px",
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "2.5rem",
                            color: "white",
                            textAlign: "center",
                            fontWeight: "800"
                        }}
                    >
                        Proof of Completion
                    </Typography>
                    <Box
                        sx={{
                            height: "60%",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            width: "100vw",
                            zIndex: "1000",
                        }}
                    >
                        <Typography
                        >Loading Data, Please Wait</Typography>
                        <CircularProgress sx={{
                            color:"white"
                        }} />
                    </Box>
                </Box>
            </Box>
        </React.Fragment >
    );
};
export default Loading;