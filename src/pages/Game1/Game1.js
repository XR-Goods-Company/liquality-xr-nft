
import React, {useState } from "react";
import { Button, Box, Typography } from '@mui/material';
import FooterIcon from "../FooterIcon";
import { NftService } from "@liquality/wallet-sdk";


const Game1 = (props) => {
    const [slide, setSlide] = useState(1);



    const mintNFT = () => {
        props.setPageState("loading")
        console.log("minting NFT Certificate")
        // creat certificate image and upload to IPFS
        fetch('https://us-central1-my-test-project-361004.cloudfunctions.net/function-test/create-certificate', {
            method: 'POST',
            body: JSON.stringify({
                name: 'xr-nft-certificate',
                tokenID: "0x51dF6D1c2534C2Cb9348C4Fbd3227e704BA8cd3C",
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data.url) {
                    try {
                        MintWithLiquality(data.url)
                    } catch (e) {
                        props.setPageMode("check")
                        props.setInitApp(true)
                        props.setPageState(null)
                    } finally {
                        props.setPageMode("check")
                        props.setInitApp(true)
                        props.setPageState(null)
                    }
                }
            });

        const MintWithLiquality = async (url) => {
            const hash = await NftService.mintERC721Token(
                {
                    contractAddress: "0xE84C20D2Ef946f01795ED329cbBE76a6eb879731",
                    owner: "0x51dF6D1c2534C2Cb9348C4Fbd3227e704BA8cd3C",
                    recipient: "0x51dF6D1c2534C2Cb9348C4Fbd3227e704BA8cd3C",
                    uri: url
                },
                5,
                "298135d44ef8d3e1e7184f111b5d89be69e92f695a04d3a1e65fa1654d0da8cc",
                false
            )
            if (hash) {
                console.log(hash)
                props.setPageMode("check")
                props.setInitApp(true)
            }
        }
    }

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
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px"

                }}
            >
                <Typography
                    sx={{
                        fontSize: "2.5rem",
                        color: "white",
                        textAlign: "center",
                        fontWeight: "800",
                        lineHeight: "1",
                    }}
                >
                    Proof of Completion
                </Typography>
                {slide === 1 &&

                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "350px",
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            background: "white",
                            borderRadius: "10px",
                            padding: "20px 10px",
                            zIndex: "100",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.5rem",
                                color: "#459ACB",
                                textAlign: "center",
                                fontWeight: "800"
                            }}
                        >
                            Tutorial
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "0.7rem",
                                color: "black",
                                textAlign: "center",
                                width: "80%",
                            }}
                        >
                            This is a MVP dapp to demonstrate how ‘Certificates of Completion’ (CoC) NFTs are minted as ‘Proof of Completion’ (PoC) tokens and can be used as a core gamification feature alongside micropayments.
                            <br></br>
                            <br></br>
                            Complete this tutorial by minting your CoC. You will need this ERC721 token to access Level 1.
                            <br></br>
                            <br></br>
                            You will also earn 50 $XR (ERC20) tokens that you can spend on in-game items.
                        </Typography>


                        <Button variant="contained"
                            sx={{
                                width: "80%",
                                justifyContent: "space-evenly",
                                fontSize: '0.8rem',
                                fontWeight: "600",
                                color: 'white',
                                borderRadius: "100px",
                                backgroundColor: "#00154A",
                                border: "2px solid #268FD6",
                                "&:hover": {
                                    backgroundColor: "#00154A",
                                }
                            }}
                            onClick={() => { setSlide(2) }}
                        >
                            Start Tutorial
                        </Button>
                        <FooterIcon />
                    </Box>}

                {slide === 2 &&

                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "350px",
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            background: "white",
                            borderRadius: "10px",
                            padding: "20px 10px",
                            zIndex: "100",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.5rem",
                                color: "#459ACB",
                                textAlign: "center",
                                fontWeight: "800"
                            }}
                        >
                            Certificate of Completion
                        </Typography>
                        <Box component='img'
                            alt="XR-Goods-Company" variant="square" src="./assets/images/certificate.png"
                            sx={{
                                width: "200px",
                                padding: "10px",
                            }}
                        />
                        <Button variant="contained"
                            sx={{
                                width: "80%",
                                justifyContent: "space-evenly",
                                fontSize: '0.8rem',
                                fontWeight: "600",
                                color: 'white',
                                borderRadius: "100px",
                                backgroundColor: "#00154A",
                                border: "2px solid #268FD6",
                                "&:hover": {
                                    backgroundColor: "white",
                                }
                            }}
                            onClick={mintNFT}
                        >
                            Grand Certificate and Mint NFT
                        </Button>

                        <FooterIcon />

                    </Box>}


            </Box>
        </React.Fragment >
    );
};
export default Game1;