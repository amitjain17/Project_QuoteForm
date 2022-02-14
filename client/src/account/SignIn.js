import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Grid, CssBaseline, Avatar, Typography, TextField, Checkbox, Button, Link, FormControlLabel } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

import useStyles from './styles.js';
import { checkValidation } from '../actions/actions.js';


const SignIn = (event) => {
    let [data, setData] = useState({
        "username": '',
        "password": '',
        "remember": false
    })
    function DataStored(event) {
        setData((prevData) => { return { ...prevData, [event.target.name]: `${event.target.type === "checkbox" ? event.target.checked : event.target.value}` } });
    }
    async function send() {
        console.log(data);
        const status = await checkValidation(data);
        console.warn(localStorage.setItem("name", data));
    }

    const classes = useStyles();
    return (
        <div>
            <Container component="main" maxWidth="xs" style={{ "backgroundColor": "white", "height": "27rem", "width": "fit-content" }}>

                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} onSubmit={send} noValidate>
                        {/* <form className={classes.form} action="login" method="POST" noValidate> */}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="username"
                            autoComplete="email"
                            value={data.username}
                            onChange={DataStored}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            // value={data.password}
                            onChange={DataStored}
                        />
                        <FormControlLabel
                            control={<Checkbox name="remember" value="remember" color="primary" onChange={DataStored} />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            value="submit"
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container >
        </div >
    )
}

export default SignIn;


