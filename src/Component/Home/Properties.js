import React, { Component, useEffect, useState } from "react";
import { AppBar, Grid, Toolbar, Typography, Box, Button, CardContent, Paper, Card, CardMedia, CardActions } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { fetchProperties } from './../Slicers/PropertiesSlice'


const Properties = () => {
    const MySwal = withReactContent(Swal)
    const [properties, setProperties] = useState([]);
    const dispatch = useDispatch();
    const property = useSelector((state) => state.properties);
    useEffect(() => {
        dispatch(fetchProperties());
    }, []);
    console.log(property);


    return (

        <>
            <div style={{ padding: "50px", backgroundColor: "#f3f3f3" }}>

                <div style={{ textAlign: "center", padding: "20px" }}>
                    <h1>PROPERTIES FOR SALE</h1>
                </div>
                <Grid container>
                    <Grid xs={12} md={3} sx={{ padding: "20px" }}>

                    </Grid>
                    <Grid xs={12} md={6} sx={{ padding: "20px" }}>
                        <Grid container>
                            {property.properties.slice(0, 2).map(property => (
                                <>
                                    <Grid xs={12} md={6} sx={{ padding: "20px" }} Key={property.id}>
                                        <Box
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"

                                        >

                                            <Card sx={{ width: "500px", height: "430px", border: "none", boxShadow: "none", borderRadius: 0, backgroundColor: "#f3f3f3" }}>

                                                <Carousel>
                                                    <Carousel.Item>
                                                        <img
                                                            className="d-block w-100"
                                                            src={property.picture_one}
                                                            alt="First slide"
                                                            style={{ width: "500px", height: "200px" }}
                                                        />

                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                            className="d-block w-100"
                                                            src={property.picture_two}
                                                            alt="Second slide"
                                                            style={{ width: "500px", height: "200px" }}
                                                        />


                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                            className="d-block w-100"
                                                            src={property.picture_three}
                                                            alt="Third slide"
                                                            style={{ width: "500px", height: "200px" }}
                                                        />


                                                    </Carousel.Item>
                                                </Carousel>
                                                <CardContent>
                                                    <div style={{ fontWeight: "bold" }}>
                                                        <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                                            {property.rooms}
                                                        </Typography>
                                                        <Button sx={{ fontWeight: 'bold', fontSize: 20, color: "black", fontFamily: 'OpenSansHebrewCondensed-Regular' }} component={Button}
                                                            onClick={() => {
                                                                MySwal.fire({
                                                                    title: <strong>{property.title}</strong>,
                                                                    html:
                                                                        <div>
                                                                            <Carousel>
                                                                                <Carousel.Item>
                                                                                    <img
                                                                                        className="d-block w-100"
                                                                                        src={property.picture_one}
                                                                                        alt="First slide"
                                                                                        style={{ width: "500px", height: "200px" }}
                                                                                    />

                                                                                </Carousel.Item>
                                                                                <Carousel.Item>
                                                                                    <img
                                                                                        className="d-block w-100"
                                                                                        src={property.picture_two}
                                                                                        alt="Second slide"
                                                                                        style={{ width: "500px", height: "200px" }}
                                                                                    />


                                                                                </Carousel.Item>
                                                                                <Carousel.Item>
                                                                                    <img
                                                                                        className="d-block w-100"
                                                                                        src={property.picture_three}
                                                                                        alt="Third slide"
                                                                                        style={{ width: "500px", height: "200px" }}
                                                                                    />


                                                                                </Carousel.Item>
                                                                            </Carousel><br/>
                                                                            <Typography variant="body2" color="text.secondary">
                                                                                ₱{property.price}
                                                                            </Typography>
                                                                            <Typography variant="body2" color="text.secondary">
                                                                                {property.rooms}
                                                                            </Typography>
                                                                            <Typography variant="body2" color="text.secondary">
                                                                                {property.location}
                                                                            </Typography>
                                                                        </div>
                                                                    ,
                                                                })
                                                            }}>
                                                            <Typography gutterBottom variant="h6" component="div" style={{ fontWeight: "bold", fontFamily: 'OpenSansHebrewCondensed-Regular' }}>
                                                                {property.title}
                                                            </Typography>
                                                        </Button>
                                                    </div>
                                                    <Typography variant="body2" color="text.secondary">
                                                        ₱{property.price}
                                                    </Typography>
                                                </CardContent>

                                            </Card>
                                        </Box>
                                    </Grid>
                                </>
                            ))
                            }



                        </Grid>

                    </Grid>
                </Grid>


            </div>

        </>


    )

}
export default Properties;
