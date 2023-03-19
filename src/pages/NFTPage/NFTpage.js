import React, { useEffect } from "react";
import { Box, Avatar, Typography } from '@mui/material';
import NFTDetails from "./NFTDetails";

const NFTpage = (props) => {
    useEffect(() => {
    }, [])
    return (
        <React.Fragment>
            <Box
                sx={{
                    width: "100%",
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
                        maxWidth: "400px",
                        display: 'flex',
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "50px",
                        zIndex: "10"
                    }}
                >
                    <Avatar alt="XR-Goods-Company" variant="square" src="./assets/images/xrgoodsLogo.svg"
                        sx={{
                            width: 50, height: 50,
                            padding: "10px",
                            "& img": {
                                padding: "10px",
                            }
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: '1rem',
                            fontWeight: "600"
                        }}
                    >ETHDenver AR NFT</Typography>
                </Box>
                <Typography
                    sx={{
                        fontSize: '1rem',
                        fontWeight: "200"
                    }}
                >Your NFT Details</Typography>
            </Box>
            <NFTDetails nft={props.nft} loginResponse={props.loginResponse} />
        </React.Fragment >
    );
};

export default NFTpage;