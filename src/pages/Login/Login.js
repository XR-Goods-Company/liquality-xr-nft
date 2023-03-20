import * as React from "react";
import {Box, Avatar, Typography } from '@mui/material';
import LoginWithGoogle from "./LoginWithGoogle";

const Login = (props) => {  
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
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            display: 'flex',
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            backgroundColor:"white",
          }}
        >

        </Box>

        <LoginWithGoogle setPageMode={props.setPageMode} setPageState={props.setPageState} setLoginResponse={props.setLoginResponse} />

      </Box>
    </React.Fragment >
  );
};

export default Login;