import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';
import Post from './Post/post.js'
import { useSelector } from 'react-redux';

import { makeStyles, useTheme } from '@material-ui/core';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%'
    },
}));



const Posts = ({ setCurrentId, front }) => {

    const classes = useStyles();
    const theme = useTheme();

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const posts = useSelector((state) => state.data)


    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = posts.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        !posts.length ? <CircularProgress color="secondary" style={{ "width": "3rem", "height": "3rem", "marginLeft": "auto", "marginRight": "auto", "display": "block" }} /> : (
            <>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >

                    {posts.map((post) => (

                        <Grid key={post.id} item >
                            <Post data={post} setCurrentId={setCurrentId} front={front} />

                        </Grid>

                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
            </>
        )

    )
}

export default Posts