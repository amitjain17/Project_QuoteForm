import React from "react";
import { Grid, CircularProgress, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";


import { getData } from "../actions/actions.js";
import Appbar from "../page_first/appbar.js";
import Post from '../components/Posts/Post/post.js'
import useStyles from "./styles.js";


const Quotes = () => {
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(getData());
    }, [currentId, dispatch])

    const posts = useSelector((state) => state.data);
    // console.warn(posts);
    const classes = useStyles();

    // const theme = useTheme();
    // const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


    return (!posts.length ? <CircularProgress color="secondary" style={{ "width": "3rem", "height": "3rem", "marginLeft": "auto", "marginRight": "auto", "display": "block" }} /> :
        <div>
            <Appbar />
            <div style={{ "flexGrow": "1" }}>

                (<div><Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        posts.map((post) => (
                            <Grid key={post.id} item xs={9} sm={4}>
                                <Paper className={classes.paper}>
                                    <Post data={post} setCurrentId={setCurrentId} />
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
                </div>)
            </div>
        </div>
    )
}

export default Quotes;