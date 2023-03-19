import React, { useEffect, useState } from "react";
import { Card, CardMedia, CardActions, Typography, CardContent } from '@mui/material';
import { Box, display } from "@mui/system";



const DetailCard = (props) => {

    return (
        <React.Fragment>



            <Typography
                sx={{
                    fontSize: { xs: "0.6rem", md: "1rem" }
                }}
            >{`NFT Name: ${props.name}`}</Typography>
            <Typography
                sx={{
                    fontSize: { xs: "0.6rem", md: "1rem" }
                }}>{`NFT contract name: ${props.contract}`}</Typography>
            <Typography
                sx={{
                    fontSize: { xs: "0.6rem", md: "1rem" }
                }}
            >{`token ID: ${props.tokenId}`}</Typography>
            <Typography
                sx={{
                    fontSize: { xs: "0.6rem", md: "1rem" }
                }}
            >{`token Type: ${props.tokenType || "none"}`}</Typography>
            <Typography
                sx={{
                    fontSize: { xs: "0.6rem", md: "1rem" }
                }}
            >{`NFT contract address: ${props.address || "none"}`}</Typography>
            <Typography
                sx={{
                    fontSize: { xs: "0.6rem", md: "1rem" }
                }}
            >{`Latest Update: ${props.timeLastUpdated || "none"}`}</Typography>

        </React.Fragment >
    );
};

export default DetailCard;
