import React, { useEffect, useState } from "react";

import { NftService } from "@liquality/wallet-sdk";
import axios from "axios";

import { ERC20Service } from "@liquality/wallet-sdk";

import { Button, Box, Avatar, Typography } from '@mui/material';

import NFTCards from "../NFTPage/NFTCards";

import SendNFT from "./SendNFT";

// import { Buffers, TypedArrays } from '@react-frontend-developer/buffers'


const NFTCollection = (props) => {

    const { address } = props
    const [nftCollection, setNftCollection] = useState([])


    // e224dde6104c476baea1852daaec1540
    // abdd8d4234334e1da04137672c1e63c4

    //     export const Auth =
    //     'Basic ' +
    //     Buffer.from(
    //       process.env.INFURA_API_KEY + ':' + process.env.INFURA_API_KEY_SECRET,
    //     ).toString('base64');

    //   axios.get('https://nft.api.infura.io/networks/1/accounts/transfers?fromBlock=16026179&toBlock=16026190', {
    //       headers: {
    //           Authorization: `Basic ${Auth}`,
    //         }
    //   })
    //   .then(function (response) {
    //       console.log(response);
    //   });
    // https://nft.api.infura.io/

    useEffect(() => {



        const listBalance = async () => {

            const accountTokensList = await ERC20Service.listAccountTokens(
                address,
                5
            );

            console.log(accountTokensList)
        }

        listBalance()

        // fetch('https://us-central1-ethdenver-ar-nft.cloudfunctions.net/demo-cors-python', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({"labels":"tests"})
        //   })
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));

        // const data = {"secret":"$ZFgy32HEd8tKSmC3!SmE*","chain_id":"1","wallet_address":"0x51dF6D1c2534C2Cb9348C4Fbd3227e704BA8cd3C"}

        // fetch("https://us-central1-ethdenver-ar-nft.cloudfunctions.net/get-metadata-nft", {
        //     method: "POST", // *GET, POST, PUT, DELETE, etc.
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));


        // const data = { "secret": "o*6Pd4^5@bd&T@", "image_url": "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" }

        // fetch('https://us-central1-ethdenver-ar-nft.cloudfunctions.net/ar-nft-url-to-image', {
        //     method: 'POST',
        //     headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         secret: 'o*6Pd4^5@bd&T@',
        //         image_url: 'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
        //     })
        //   })
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));

        // fetch('http://localhost:8080/image',)
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));

        // const url = "https://neoxr.s3.dualstack.us-east-2.amazonaws.com/bike/assets/poster.png"

        // https://assets.otherside.xyz/otherdeeds/e0b94e9d8500be2a45e64f32bc9d9d39a909149309d976cf142a041c172e3dd1.jpg

        //https://us-central1-my-test-project-361004.cloudfunctions.net/function-test

        // http://localhost:8080/image

        // const url = "https://neoxr.s3.dualstack.us-east-2.amazonaws.com/bike/assets/poster.png"


        // fetch('https://us-central1-my-test-project-361004.cloudfunctions.net/function-test/image', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         key: 'o*6Pd4^5@bd&T@',
        //         image_url: 'https://assets.otherside.xyz/otherdeeds/e0b94e9d8500be2a45e64f32bc9d9d39a909149309d976cf142a041c172e3dd1.jpg',
        //     })
        // })
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));


        // axios
        // .get(url)
        // .then(res => {
        //   console.log(res);
        // })
        // .catch(err => console.log(err));


        // axios({
        //     url: url, //your url
        //     method: 'GET',
        //     responseType: 'blob', // important
        // }).then((response) => {
        //         console.log(response)
        // });

        // https://us-central1-my-test-project-361004.cloudfunctions.net/function-test/test

        // https://us-central1-ethdenver-ar-nft.cloudfunctions.net/ar-nft-url-to-image

        // const buffer = Buffer.from('e224dde6104c476baea1852daaec1540:abdd8d4234334e1da04137672c1e63c4').toString('base64');

        // const Auth = 'Basic ' + buffer

        // fetch("https://nft.api.infura.io/networks/1/accounts/transfers?fromBlock=16026179&toBlock=16026190", {
        //     headers: {
        //         Authorization: `Basic ${Auth}`,
        //       }
        //   })
        //     .then((response) => response.json())
        //     .then((data) => {
        //       console.log("Success:", data);
        //     })
        //     .catch((error) => {
        //       console.error("Error:", error);
        //     });

        // const sdk = new SDK(auth);

        // const getNFT = async () => {
        //     const nfts = await alchemy.nft.getNftsForOwner(props.address);
        //     console.log(nfts)
        //     setNftCollection(nfts.ownedNfts)
        // }
        // getNFT()



        const getNFT = async () => {
            const nfts = await NftService.getNfts(address, 5);
            console.log(nfts)
            setNftCollection(nfts)
        }
        getNFT()



    }, []);


    const creatCollection = () => {

        console.log("create Collection")
        // publicAddress: "0x6051420AA1830eb7fdAf643Ac808A7C9A421543B"
        // privateKey: "298135d44ef8d3e1e7184f111b5d89be69e92f695a04d3a1e65fa1654d0da8cc"

        const createCollection = async () => {

            console.log({ NftService })

            // const hash = await NftService.createERC721Collection({tokenName:"xr-nft-certificate",tokenSymbol:"XRCERT"}, 
            // 5, "298135d44ef8d3e1e7184f111b5d89be69e92f695a04d3a1e65fa1654d0da8cc",false);

            //     console.log(hash)


            // new 0xE84C20D2Ef946f01795ED329cbBE76a6eb879731
            // old 0x76B6Ec49Ea2b8722f0ffD4731380D49951667f3b
            
            
            // rarible 0xd5567914b4403f7cf2007ead82db3bbc912ef9e2
            // remix 0xE84C20D2Ef946f01795ED329cbBE76a6eb879731

            const hash = await NftService.mintERC721Token(
                {
                    contractAddress: "0xE84C20D2Ef946f01795ED329cbBE76a6eb879731",
                    owner: "0x51dF6D1c2534C2Cb9348C4Fbd3227e704BA8cd3C",
                    recipient: "0x51dF6D1c2534C2Cb9348C4Fbd3227e704BA8cd3C",
                    uri: "https://storage.googleapis.com/image-save-nodejs/e0b94e9d8500be2a45e64f32bc9d9d39a909149309d976cf142a041c172e3dd1.jpg"
                },
                5,
                "298135d44ef8d3e1e7184f111b5d89be69e92f695a04d3a1e65fa1654d0da8cc",
                false
            )

            // liquality 298135d44ef8d3e1e7184f111b5d89be69e92f695a04d3a1e65fa1654d0da8cc
            // metamask 5bbfd9f5aeba4a8420144f2ab4c91cecdf309a7861e3f49614b89b2611dbad08

            // await mintERC1155Token(
            //     { contractAddress, owner, recipient, id, amount }: MintERC1155Request,
            //     chainId: number, pkOrProvider: string | ExternalProvider, isGasless: boolean): Promise < string >


            // const hash = await NftService.mintERC1155Token(
            //     // { contractAddress, owner, recipient, id, amount },
            //     {
            //         contractAddress: "0x76B6Ec49Ea2b8722f0ffD4731380D49951667f3b",
            //         owner: "0x51dF6D1c2534C2Cb9348C4Fbd3227e704BA8cd3C",
            //         id:1,
            //         amount:1,
            //         recipient: "0x51dF6D1c2534C2Cb9348C4Fbd3227e704BA8cd3C",
            //         uri: "https://storage.googleapis.com/image-save-nodejs/e0b94e9d8500be2a45e64f32bc9d9d39a909149309d976cf142a041c172e3dd1.jpg"
            //     },
            //     5,
            //     "298135d44ef8d3e1e7184f111b5d89be69e92f695a04d3a1e65fa1654d0da8cc",
            //     false)


            if (hash) {
                console.log(hash)
                // https://goerli.etherscan.io/tx/0x8818e3e0e33496d7fb7bfc0ddb2f1c72eb41091f942b6dc21850d51d8cb5d138

                const url = `https://goerli.etherscan.io/tx/${hash}`
                window.open(url, "_blank")
            }
            // console.log(hash)


        }


        createCollection()


    }

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
                <Button variant="contained"
                    sx={{
                        width: "70%",
                        justifyContent: "space-evenly",
                        fontSize: '1rem',
                        fontWeight: "600",
                        backgroundColor: "linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)"
                    }}
                    onClick={creatCollection}
                >
                    Create Collection
                </Button>
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
                        justifyContent: "space-between",
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