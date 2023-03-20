import React, { useState } from "react";

import { Box,Typography, Divider } from '@mui/material';


import NFTCollection from "./NFTCollection";
import NFTDetails from "./NFTDetails";

const Game2 = (props) => {
    const [nft, setNft] = useState(false);

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

                <Typography
                    sx={{
                        fontSize: '1rem',
                        fontWeight: "400"
                    }}
                >Wallet Detials</Typography>
                <Typography
                    sx={{
                        fontSize: '1rem',
                        fontWeight: "200"
                    }}
                >Network: Goerli Testnet</Typography>
                <Divider
                    sx={{
                        width: '100%',
                    }}
                />

                {nft ?
                    <NFTDetails nft={nft} setNft={setNft} loginResponse={props.loginResponse} />
                    :
                    <NFTCollection setNft={setNft} address={props.loginResponse.address} />
                }

            </Box>

        </React.Fragment >


    );
};

export default Game2;