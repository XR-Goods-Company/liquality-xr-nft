import React, { useEffect, useState } from "react";
import { Network, Alchemy } from "alchemy-sdk";




import { Card, CardMedia, CardActions, Typography, CardContent } from '@mui/material';
import { Box, display } from "@mui/system";

import ARButton from "./ARButton";
import DetailCard from "./DetailCard";


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


    // const nftImageUrl = prpsUrl.slice(0, 4) === "ipfs" ? `https://ipfs.io/ipfs/${prpsUrl.slice(5)}` : prpsUrl

    // console.log({ nftImageUrl })]


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


// https://i.seadn.io/gae/CaonTJqa_Jc2LpSpqDRfLJUkj_v55wdhVppxP4txnF9aTbmd5BY42sHXP2zen-CYD7-x9Q165f-e-LjJ5yiiHh8J36EtYMT_WU_w8Q?auto=format&w=1000
// https://ipfs.io/ipfs/QmRvSoppQ5MKfsT4p5Snheae1DG3Af2NhYXWpKNZBvz2Eo/00001.png



{/* <Typography
sx={{
    fontSize: { xs: "0.6rem", md: "1rem" }
}}
>{`NFT Name: ${nft.rawMetadata.attributes[1].value || "none"}`}</Typography>
<Typography
sx={{
    fontSize: { xs: "0.6rem", md: "1rem" }
}}>{`NFT contract name: ${nft.contract.name || "none"}`}</Typography>
<Typography
sx={{
    fontSize: { xs: "0.6rem", md: "1rem" }
}}
>{`token ID: ${nft.tokenId || "none"}`}</Typography>
<Typography
sx={{
    fontSize: { xs: "0.6rem", md: "1rem" }
}}
>{`token Type: ${props.nft.tokenType || "none"}`}</Typography>
<Typography
sx={{
    fontSize: { xs: "0.6rem", md: "1rem" }
}}
>{`NFT contract address: ${nft.contract.address || "none"}`}</Typography>
<Typography
sx={{
    fontSize: { xs: "0.6rem", md: "1rem" }
}}
>{`Latest Update: ${nft.timeLastUpdated || "none"}`}</Typography> */}