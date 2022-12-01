import React, { Component, useState } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button, CardContent, Paper, Card, CardMedia, CardActions, TextField } from '@mui/material';
import homebg from '../../Images/home-bg.jpg';
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ContactUs = () => {

    const MySwal = withReactContent(Swal)

    const [formValue, setformValue] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formValue.name.trim() === "") {
            MySwal.fire({
                title: <strong>Name is empty!</strong>,
                html: <i></i>,
                icon: 'error'
            })
        }
        else if (formValue.email.trim() === "") {
            MySwal.fire({
                title: <strong>Email is empty!</strong>,
                html: <i></i>,
                icon: 'error'
            })
        }
        else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formValue.email.trim())){
            MySwal.fire({
                title: <strong>Email is invalid!</strong>,
                html: <i></i>,
                icon: 'error'
            })
        }
        else if (formValue.subject.trim() === "") {
            MySwal.fire({
                title: <strong>Subject is empty!</strong>,
                html: <i></i>,
                icon: 'error'
            })
        }
        else if (formValue.message.trim() === "") {
            MySwal.fire({
                title: <strong>Message is empty!</strong>,
                html: <i></i>,
                icon: 'error'
            })
        }
        else {
            axios.post('https://dreamestatebackendapi.azurewebsites.net/api/ContactUs/AddContact', formValue)
                .then(function (response) {
                    console.log(response);
                    setformValue({name:'',message:'',subject:'',email:''});
                })
            MySwal.fire({
                title: <strong>Successfully Submitted!</strong>,
                html: <i></i>,
                icon: 'success'
            })
        }


    }

    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });
    }

    return (


        <>
            <div style={{ padding: "50px", backgroundColor: "#f3f3f3" }}>

                <div style={{ textAlign: "center", padding: "20px" }}>
                    <h1>CONTACT US</h1>
                </div>
                <Grid container>
                    <Grid xs={12} md={3} sx={{ padding: "20px" }}>

                    </Grid>
                    <Grid xs={12} md={6} sx={{ padding: "20px", backgroundColor: 'white', padding: '20px', height: '500px' }}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                name="name"
                                value={formValue.name}
                                onChange={handleChange}
                                sx={{ borderRadius: '0', width: '98%', margin: '10px' }} />
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                name="email"
                                variant="outlined"
                                value={formValue.email}
                                onChange={handleChange}
                                sx={{ borderRadius: '0', width: '98%', margin: '10px' }} />
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Subject"
                                variant="outlined"
                                name="subject"
                                value={formValue.subject}
                                onChange={handleChange}
                                sx={{ borderRadius: '0', width: '98%', margin: '10px' }} />
                            <br />
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                name="message"
                                value={formValue.message}
                                onChange={handleChange}
                                sx={{ borderRadius: '0', width: '98%', margin: '10px' }}
                                multiline
                                rows={4}

                            /><br />
                            <Button sx={{ fontSize: 13, margin: '10px', borderRadius: 0, backgroundColor: "grey" }} variant="contained" size="large" type="submit">Submit</Button>
                        </form>
                    </Grid>
                </Grid>


            </div>

        </>


    )

}
export default ContactUs;
