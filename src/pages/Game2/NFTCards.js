import * as React from "react";

import {Typography } from '@mui/material';
import { Box } from "@mui/system";

const NFTCards = (props) => {
 
 const prpsUrl = props.nft.metadata.image

const url = prpsUrl.slice(0, 4) === "ipfs" ?  `https://ipfs.io/ipfs/${prpsUrl.slice(5)}`:props.nft.metadata.image

  return (
    <React.Fragment>
      <Box
        onClick={() => { props.setNft(props.nft) }}
        sx={{
          width:"130px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          boxShadow: "0px 0px 3px 2px rgb(34 34 34 / 20%)",
        }}
      >
        <Box
          component="img"
          src={url}
          alt="XR-Googds-Company ar nft image"
          sx={{
            width: "100%",
          }}
        >
        </Box>
        <Typography>{`${props.nft.contract.name}: #${props.nft.id.length >4 ? props.nft.id.substring(0,4) + "..." :  props.nft.id  }`}</Typography>
      </Box>
    </React.Fragment >
  );
};
export default NFTCards;