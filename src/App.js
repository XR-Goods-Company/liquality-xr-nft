
import './App.css';
import React, { useState, useEffect } from "react";
import { tryRegisterSW } from "@liquality/wallet-sdk";
import { setupSDK } from "./setupSDK";
import Login from './pages/Login/Login';
import Loading from './pages/Login/Loading';
import { Box } from '@mui/material';

import Game1 from './pages/Game1/Game1';
import Game2 from './pages/Game2/Game2';

import CheckCertificate from './pages/Login/CheckCertificate';


function App() {
  const [loginResponse, setLoginResponse] = useState();
  const [nft, setNft] = useState(false);
  const [pageMode, setPageMode] = useState("login");
  const [pageState, setPageState] = useState();
  const [initApp, setInitApp] = useState(false)

  useEffect(() => {
    const init = async () => {
      setupSDK()
      tryRegisterSW("./serviceworker/sw.js");
    };
    init();
  }, []);

  return (
    <React.Fragment>
      {pageMode === "login" &&
        <Login setPageMode={setPageMode} setPageState={setPageState} setLoginResponse={setLoginResponse} />
      }
      {pageMode === "check" &&
        <CheckCertificate initApp={initApp} loginResponse={setLoginResponse} setPageMode={setPageMode} />
      }
      {pageMode === "game1" &&
        <Game1 loginResponse={loginResponse} setInitApp={setInitApp} setPageState={setPageState}  setPageMode={setPageMode} />
      }
      {pageMode === "game2" &&
        <Game2  setNft={setNft} loginResponse={loginResponse}></Game2>
      }
      {pageState && <Loading />}
      <Box component='img'
        alt="XR-Goods-Company" variant="square" src="./assets/images/fullLogo.png"
        sx={{
          width: "200px",
          padding: "10px",
          position: "absolute",
          bottom: "0",
          left: "calc(50% - 100px)",
        }}
      />
    </React.Fragment >
  );
}

export default App;
