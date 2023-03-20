import * as React from "react";
import { useState, useEffect } from "react";
import { Button, Box, Typography, Avatar } from '@mui/material';
import { NftService } from "@liquality/wallet-sdk";


const CheckCertificate = (props) => {

    const [hasCertificate, setHasCert] = useState(false)

    useEffect(() => {
        // console.log(props.loginResponse)
        const getNFT = async () => {
            const address = "0x6051420AA1830eb7fdAf643Ac808A7C9A421543B"
            const certificateAddress = "0xe84c20d2ef946f01795ed329cbbe76a6eb879731"
            const nfts = await NftService.getNfts(address, 5);
            console.log(nfts)

            if (nfts) {
                for (const nft of nfts) {
                    if (nft.contract.address === certificateAddress) {
                        console.log({ nft })
                        setHasCert(true)
                        return
                    }
                }
            }

        }

        getNFT()


    }, [])

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

{/* {props.initApp && hasCertificate && */}

                {props.initApp &&   // hardcode becasue we not able to mint the nft
                    <Box
                    sx={{
                        height:"100%",
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap:"20px",
                    }}
                    >

                        <Typography
                            sx={{
                                fontSize: "1rem",
                                color: "white",
                                textAlign: "center",
                                fontWeight: "800"
                            }}
                        >
                            you have Certificate
                        </Typography>
                        <Box 
                        component="img"
                        alt="XR-Goods-Company" variant="square" src="./assets/images/certificate.png"
                            sx={{
                                width: 150,
                                padding: "10px",
                            }}
                        />
                        < Button variant="contained"
                            onClick={() => { props.setPageMode("game2") }}
                            sx={{
                                width: "70%",
                                justifyContent: "space-evenly",
                                fontSize: '1rem',
                                fontWeight: "600",
                            }}>
                            Start Game
                        </Button>
                    </Box>
                }
                {!props.initApp && 
                    <Box
                    sx={{
                        height:"100%",
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap:"20px",
                    }}
                    >
                        <Typography
                            sx={{
                                fontSize: "1rem",
                                color: "white",
                                textAlign: "center",
                                fontWeight: "800"
                            }}
                        >
                            you dont have Certificate
                        </Typography>

                        < Button variant="contained"
                            onClick={() => { props.setPageMode("game1") }}
                            sx={{
                                width: "70%",
                                justifyContent: "space-evenly",
                                fontSize: '1rem',
                                fontWeight: "600",
                            }}>
                            Start Tutorial
                        </Button>
                    </Box>
                }



            </Box>
        </React.Fragment >
    );
};

export default CheckCertificate;