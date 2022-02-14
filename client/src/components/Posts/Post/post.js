import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Avatar, Dialog, DialogTitle, Card, Menu, MenuItem, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import moment from 'moment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import { getData } from "../../../actions/actions.js";
import { deleteData } from '../../../actions/actions.js';
import Form from "../../../components/Form/form.js";

const Post = ({ data, front }) => {
    const dispatch = useDispatch();
    const [mbar, setMbar] = useState(null);
    const open = Boolean(mbar);
    const [formOpen, setFormOpen] = useState(false);

    const [currentId, setCurrentId] = useState(null);
    useEffect(() => {
        dispatch(getData());
    }, [currentId, dispatch])


    const openForm = () => {
        setFormOpen(true);
    }
    const closeForm = () => {
        setFormOpen(false);
    }

    const handleClick = (event) => {
        setMbar(event.currentTarget);
    }
    const handleClose = () => {
        setMbar(null);
    }

    return (<div>
        <Dialog open={formOpen}>
            <span>
                <DialogTitle id="customized-dialog-title" style={{ "backgroundColor": "lightsteelblue" }}>
                    Request a quote
                    <CloseRoundedIcon onClick={closeForm} style={{ "float": "right", "margin": "1%" }} />
                </DialogTitle>
            </span>
            <Form currentId={currentId} setCurrentId={setCurrentId} />

        </Dialog>
        <Card >
            <CardHeader avatar={<Avatar style={{ "backgroundColor": "cadetblue" }}>{data.fname[0]}</Avatar>}
                action={
                    <IconButton aria-label="settings" onClick={handleClick}>
                        {front ? (<></>) : (<MoreVertIcon />)}

                    </IconButton>}
                title={`${data.fname} ${data.lname}`}
                subheader={moment(data.moment).fromNow()} >

            </CardHeader>
            <Menu
                id="simple-menu"
                anchorEl={mbar}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { dispatch(deleteData(data.id)) }}>Delete</MenuItem>
                <MenuItem onClick={() => {
                    handleClose()
                    setCurrentId(data.id)
                    setFormOpen(true);

                }
                }>Edit
                </MenuItem>
                <MenuItem onClick={handleClose}>Close</MenuItem>
            </Menu>

            <CardMedia image={data.image} title={`${data.fname} ${data.lname}`} style={{ "height": 0, "paddingTop": "56.25%", "backgroundColor": "rgba(0,0,0,0.5)", "backgroundBlendMode": "darken" }} />
            <CardContent>
                <Typography variant='h6'>
                    Type: {data.projectType}
                </Typography>

                <Typography variant='h6'>
                    Details: {data.projectDetails}</Typography>
                <Typography variant='h6'>
                    TimeTaken: {data.timeFrame}</Typography>
                <Typography variant='h6'>
                    Contact: {`${data.phoneNumber} `}</Typography>
                <Typography variant='h6'>
                    EmailId: {data.email}
                </Typography>

            </CardContent>

        </Card>
    </div>
    )
}

export default Post