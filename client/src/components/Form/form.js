import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { Typography, Paper, Button, DialogContent, TextField, TextareaAutosize } from '@material-ui/core';

import { createData, updateData } from "../../actions/actions.js";
import { useSelector } from 'react-redux';

const Form = ({ currentId, setCurrentId }) => {

    const [formData, setFormData] = useState({
        fname: "", lname: "", email: "", estimatedBudget: "", phoneNumber: "", projectDetails: "", image: "", projectType: "", timeFrame: ""
    })
    const QData = useSelector((state) => currentId ? state.data.find((p) => p.id === currentId) : null);

    const dispatch = useDispatch();

    useEffect(() => { if (QData) setFormData(QData) }, [QData])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.warn(formData);
        if (currentId) {
            dispatch(updateData(currentId, formData))
        } else {
            dispatch(createData(formData))
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null)
        setFormData({
            fname: "", lname: "", email: "", estimatedBudget: "", phoneNumber: "", projectDetails: "", image: "", projectType: "", timeFrame: ""
        })
    }
    return (
        <div>
            <DialogContent dividers>
                <Paper >
                    <form autoComplete="off" onSubmit={handleSubmit}
                        style={{ "padding": "3%" }}>
                        <div>
                            <Typography variant="h5" style={{ "textAlign": "center" }}>Creating a Quote</Typography>
                        </div>
                        <TextField name="firstName" variant="standard" label="FirstName" value={formData.fname} onChange={(e) => setFormData({ ...formData, fname: e.target.value })} style={{
                            "marginRight": "10%"
                        }} required />

                        < TextField name="lastName" variant="standard" label="LastName" value={formData.lname} onChange={(e) => setFormData({ ...formData, lname: e.target.value })} required style={{
                            "marginRight": "10%"
                        }} />

                        <TextField name="email" variant="standard" label="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required style={{
                            "marginRight": "10%"
                        }} />

                        <TextField name="phoneNumber" variant="standard" label="PhoneNumber" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} style={{
                            "marginRight": "10%"
                        }} />

                        <TextField name="projectType" variant="standard" label="ProjectType" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} required style={{
                            "marginRight": "10%"
                        }} />

                        <TextField name="estimatedBudget" variant="standard" label="EstimatedBudget" value={formData.estimatedBudget} onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })} style={{
                            "marginRight": "10%"
                        }} required />

                        <TextField name="timeFrame" variant="standard" label="TimeFrame" value={formData.timeFrame} onChange={(e) => setFormData({ ...formData, timeFrame: e.target.value })} required style={{
                            "marginRight": "10%"
                        }} />

                        <br />
                        <TextareaAutosize
                            aria-label="maximum height" minRows={4} maxRows={4}
                            name="projectDetails" variant="outlined" placeholder="ProjectDetails" value={formData.projectDetails} onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })} style={{
                                "marginRight": "10%",
                                "marginTop": "1.5%",
                                "minWidth": "12rem"
                            }} />
                        <br />
                        <div style={{ "width": "97%", "margin": "10px 0" }}>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, image: base64 })} />

                        </div>

                        <Button autoFocus color="primary" type="submit" variant="contained">
                            Save changes
                        </Button>

                        {/* <Button variant="contained" color="secondary" size="small" onClick={clear}>Clear</Button> */}

                    </form>
                </Paper>

            </DialogContent>

        </div>
    )
}
export default Form