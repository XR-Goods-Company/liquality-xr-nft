import * as React from "react";

import { Button, Box, Avatar, Typography, Divider } from '@mui/material';

const FooterIcon = (props) => {
    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Avatar alt="XR-Goods-Company" variant="square" src="./assets/images/e9d7a4a26ecf4c0ece0b199dee0dc934.png"
                    sx={{
                        width: 50, height: 50,
                        padding: "10px",
                        "& img": {
                            padding: "10px",
                        }
                    }}
                />

                <Avatar alt="XR-Goods-Company" variant="square" src="./assets/images/556331eca2a101a5ae624860561347c3.png"
                    sx={{
                        width: 50, height: 50,
                        padding: "10px",
                        "& img": {
                            padding: "10px",
                        }
                    }}
                />
                <Avatar alt="XR-Goods-Company" variant="square" src="./assets/images/0aa54f3a1e1f2d9bd9da88dd123ce1b7.png"
                    sx={{
                        width: 50, height: 50,
                        padding: "10px",
                        "& img": {
                            padding: "10px",
                        }
                    }}
                />

            </Box>
        </React.Fragment >
    );
};
export default FooterIcon;