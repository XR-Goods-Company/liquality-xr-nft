import React, { useEffect, useState } from "react";
import { NftService } from "@liquality/wallet-sdk";
import { Box, Typography } from '@mui/material';
import NFTCards from "./NFTCards";
import SendNFT from "./SendNFT";



const NFTCollection = (props) => {

    const { address } = props
    const [nftCollection, setNftCollection] = useState([])

    useEffect(() => {


                // console.log(props.loginResponse)
                const getNFT = async () => {
                    const address = "0x6051420AA1830eb7fdAf643Ac808A7C9A421543B"
                    const certificateAddress = "0xe84c20d2ef946f01795ed329cbbe76a6eb879731"
                    const nfts = await NftService.getNfts(address, 5);
                    console.log(nfts)
        
                    if (nfts) {
                        const nftList =[]
                        for (const nft of nfts) {
                            if (nft.contract.address != certificateAddress) {
                                console.log({ nft })
                                nftList.push(nft)
                            }
                        }

                        setNftCollection(nftList)
                    }
        
                }
        
                getNFT()


    }, []);

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginTop: "30px",
                    gap: "10px"
                }}
            >
                <Typography
                    sx={{
                        fontSize: '1.2rem',
                        fontWeight: "600"
                    }}
                >NFT Collections</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "30px",
                        marginBottom: "50px",
                        gap: "20px"
                    }}
                >

                    {nftCollection && nftCollection.length > 0 ?
                        nftCollection.map((nft, index) => (
                            <NFTCards key={index} setNft={props.setNft} nft={nft} />
                        ))
                        :
                        <SendNFT address={props.address}></SendNFT>
                    }
                </Box>
            </Box>
        </React.Fragment >
    );
};

export default NFTCollection;