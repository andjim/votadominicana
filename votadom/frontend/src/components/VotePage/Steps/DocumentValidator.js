import React,{ useState } from "react";
import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import TextField from "@mui/material/TextField";
import FormHelperText from '@mui/material/FormHelperText';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function DocumentValidator (props) {
    
    return (<Grid container item xs={12} wrap="wrap">
            <Grid item xs={12} textAlign={"center"} marginBottom={1}>
                <Typography  variant="h4" color="#0d1b3c">Confirmemos tu identidad</Typography>
            </Grid>
            <Grid item xs={12} >
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                display="flex" justifyContent={"center"}

                >
                <TextField id="standard-basic" label="Cedula" variant="standard" fontSize={"1rem"}/>
            </Box>
                {/* <FormControl>
                    <InputLabel htmlFor="input-cedula">Cedula</InputLabel>
                    <Input id="input-cedula" aria-describedby="input-cedula-text" />
                    <FormHelperText id="input-cedula-text">Ingrese su documento de identidad</FormHelperText>
                </FormControl> */}
            </Grid>
            <Grid container item xs={12} marginTop={"3rem"}>
            <Typography variant="subtitle2" textAlign={"justify"} padding={"2px 1rem"}>
                Podra encontar el numero de cedula en parte frontal de su cedula como indica la imagen debajo.
            </Typography>
            <Grid item xs={12} paddingX={"0.6rem"} align={"center"}>
                <Box
                        component="img"
                        sx={{
                            height: 250,
                            width: 350,
                            maxHeight: { xs: 180, md: 220 },
                            maxWidth: { xs: "90%", md: 290 },
                            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
                            borderRadius: "10%"
                        }}
                        alt="Ejemplo Cedula Dominicana Frontal"
                        src="/static/images/CedulaExampleFront.png"
                    />
                </Grid>
            </Grid>
    </Grid>);
};
