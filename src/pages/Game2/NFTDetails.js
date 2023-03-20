import React, { useEffect, useState } from "react";
import { Network, Alchemy } from "alchemy-sdk";
import { Box, Button } from '@mui/material';

import ARButton from "./ARButton";
import DetailCard from "./DetailCard";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const settings = {
    apiKey: "wkpzpi-qA95xJVeqdZCOHfLDIyUjs-Ae",
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

const NFTDetails = (props) => {
    const address = props.loginResponse.address
    const nftId = props.nft.id
    const [nft, setnft] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        const getNFT = async () => {
            const nfts = await alchemy.nft.getNftsForOwner(address);
            for (const nft of nfts.ownedNfts) {
                if (nft.tokenId === nftId) {
                    setnft(nft)
                    console.log({ nft })

                    const baseUrl = nft.rawMetadata.image

                    const url = baseUrl.slice(0, 4) === "ipfs" ? `https://ipfs.io/ipfs/${baseUrl.slice(5)}` : baseUrl

                    setImageUrl(url)
                    return
                }
            }
        }
        getNFT()

    }, []);


    return (
        <React.Fragment>
            <Button variant="contained"
            sx={{
                left:"10px",
                backgroundColor:"#1976d2"
            }}
            onClick={()=>{
                props.setNft(null)
            }}
            startIcon={<ArrowBackIcon />}>
                Back
            </Button>
            {nft &&
                <Box
                    sx={{
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        padding: "50px 20px"
                    }}
                >
                    <Box
                        component="img"
                        src={imageUrl}
                        alt="XR-Googds-Company ar nft image"
                        sx={{
                            width: { xs: "70px", md: "150px" },
                            padding: "10px",
                            boxShadow: "0px 0px 3px 2px rgb(34 34 34 / 20%)",
                        }}
                    >
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            paddingLeft: "30px",
                            maxWidth: "300px",
                            gap: "5px",

                        }}
                    >

                        <DetailCard
                            name={nft.rawMetadata.name || "none"}
                            contract={nft.contract.name || "none"}
                            address={nft.contract.address || "none"}
                            tokenId={nft.tokenId || "none"}
                            tokenType={nft.tokenType || "none"}
                            timeLastUpdated={nft.timeLastUpdated || "none"}
                        ></DetailCard>

                    </Box>

                </Box>
            }
            {nft && imageUrl && <ARButton image={imageUrl}></ARButton>}
        </React.Fragment >
    );
};

export default NFTDetails;