import React from "react";
import useStyles from "./style.js";
import { Toolbar, Typography, InputBase, AppBar } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import MenuI from "./menu.js"

const Appbar = () => {
    const classes = useStyles();


    return (
        <div>
            <AppBar style={{
                "backgroundColor": "#0058ca"
            }}>
                <Toolbar >
                    <MenuI />
                    <Typography className={classes.title} variant="h6" noWrap>
                        Quote Requester
                    </Typography>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            style={{ "padding": "0 25px" }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Appbar;