import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    container: {
        boxShadow: "0px 5px 15px rgba(0,0,0,0.4)",
        transition: "0.5s ease-out",

        "&:hover": {
            transform: "scale(1.05)",
            cursor: "pointer",
        },
    },

    imageContainer: {
        backgroundColor: "rgba(255,255,255,0.4)",

        [theme.breakpoints.down("xs")]: {
            maxHeight: 200,           
        },
    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "fill",

        [theme.breakpoints.down("xs")]:{
            objectFit: "fill",
        }
    },
    descContainer: {
        backgroundColor: "rgba(255,255,255,0.9)",
        padding: theme.spacing(2),
        fontStyle: "italic",
    },
}));

export const TestimonialCard = ({ avatar, title, subtitle, comments }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} sm={4} className={classes.imageContainer}>
                <img src={avatar} alt={title} className={classes.image} />
            </Grid>
            <Grid item xs={12} sm={8} className={classes.descContainer}>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="subtitle2">{subtitle}</Typography>
                                
                {comments &&
                    comments.map((c, index) => (
                        <Typography key={index} variant="body1">
                            <q>..{c}</q>
                        </Typography>
                    ))}
                    
            </Grid>
        </Grid>
    );
}
