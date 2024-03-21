import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link  from "@mui/material/Link";
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RLink} from "react-router-dom";

export default class HomePage extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return <Grid container align="center" spacing={2}>
                <Grid container item xs={12} sx={{height: "max-content", boxShadow: "1px 0px 3px rgba(0, 0, 0, 0.6)"}}>
                    <Grid item xs={6}  align="left" padding={2}>
                        <Button margin={0} variant="outlined" startIcon={<MenuIcon/>}/>
                    </Grid>
                    <Grid item  xs={6} align="right" padding={2}>
                        <Link href="/admin" underline="none" color="#0d1b3c" fontFamily="Roboto">
                            Acceso
                        </Link>
                    </Grid>
                </Grid>
<Grid item xs={12} align="center">
                <Box
                    component="img"
                    sx={{
                        height: 500,
                        width: 500,
                        maxHeight: { xs: 130, md: 250 },
                        maxWidth: { xs: 130, md: 250 },
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
                        borderRadius: "50%"
                    }}
                    alt="Logo de VotaDominicana"
                    src="/static/images/favicon.png"
                />
                <Typography  color="#0d1b3c"
                    variant="h2" component="h1" 
                    sx={
                            {
                                fontFamily: "Montserrat Alternates", fontSize: {xs: "2.4rem", md:"4rem"}, fontWeight: 600,
                                textShadow: "0px 1px 2px rgba(13, 27, 60, 0.5)"
                            }
                        }
                >
                    VotaDominicana
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" color="#0d1b3c">¡Tu voz, Tu Patria!</Typography>
                <Button component={RLink} to="/Vote" variant="contained" startIcon={<HowToVoteIcon/>} size="large" color="primary" sx={{marginTop:2, fontSize:"1.6rem"}}>
                    ¡Vota Ahora!
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Typography paddingX={2} variant="subtitle1" textAlign='center' color="#0d1b3c">
                    Ciudadanos dominicanos, es tiempo de hacer resonar nuestras voces
                    y fortalecer los cimientos de nuesta amada nacion.
                </Typography>
            </Grid>
            <Grid item xs={12} bgcolor="#0d1b3c">
                <Typography variant="body2" color="#FFFFFF">
                    Esto es parte de un proyecto de monografico para la universidad O&M
                </Typography>
            </Grid>
        </Grid>;
    }
}
/* <Grid container  align="center" spacing={1}>
            <Grid container item xs={12} sx={{height: "max-content", boxShadow: "1px 0px 3px rgba(0, 0, 0, 0.6)"}}>
                <Grid item xs={6}  align="left" padding={2}>
                    <Button  variant="outlined" startIcon={<MenuIcon/>}/>
                </Grid>
                <Grid item  xs={6} align="right" padding={2}>
                    <Link href="/admin" underline="none" color="#0d1b3c" fontFamily="Roboto">
                        Acceso
                    </Link>
                </Grid>
            </Grid>
            <Grid item xs={12} align="center">
                <Box
                    component="img"
                    sx={{
                        height: 500,
                        width: 500,
                        maxHeight: { xs: 130, md: 250 },
                        maxWidth: { xs: 130, md: 250 },
                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
                        borderRadius: "50%"
                    }}
                    alt="Logo de VotaDominicana"
                    src="/static/images/favicon.png"
                />
                <Typography  color="#0d1b3c"
                    variant="h2" component="h1" 
                    sx={
                            {
                                fontFamily: "Montserrat Alternates", fontSize: {xs: "2.4rem", md:"4rem"}, fontWeight: 600,
                                textShadow: "0px 1px 2px rgba(13, 27, 60, 0.5)"
                            }
                        }
                >
                    VotaDominicana
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" color="#0d1b3c">¡Tu voz, Tu Patria!</Typography>
                <Button component={RLink} to="/" variant="contained" startIcon={<HowToVoteIcon/>} size="large" color="primary" sx={{marginTop:2, fontSize:"1.6rem"}}>
                    ¡Vota Ahora!
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Typography paddingX={2} variant="subtitle1" textAlign='center' color="#0d1b3c">
                    Ciudadanos dominicanos, es tiempo de hacer resonar nuestras voces
                    y fortalecer los cimientos de nuesta amada nacion.
                </Typography>
            </Grid>
            <Grid item xs={12} bgcolor="#0d1b3c">
                <Typography variant="body2" color="#FFFFFF">
                    Esto es parte de un proyecto de monografico para la universidad O&M
                </Typography>
            </Grid>
        </Grid>; */