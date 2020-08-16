import React from 'react';
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.common.white,
    backgroundImage: 'linear-gradient(to right, #860091, #662975)',
    textAlign: "center",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },

  bottomContainer: {
    transition: "0.5s",

    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  icon: {
    fontSize: "5rem",
    textShadow: "0px 8px 15px rgba(0,0,0,0.25)",
  },

  title: {
    marginBottom: theme.spacing(6),
  },
}));


export const Contact = () => {
    const classes = useStyles();

  return (
    <section className={classes.container}>
      <Container>
        <Typography variant="h4" className={classes.title}>
          Pick my brain/cortex and let's get <strong>started</strong> on your
          project
        </Typography>
        <div className={classes.bottomContainer}>
          <EmailIcon className={classes.icon} />
          <Typography variant="body1">nathan@cortexcopywriter.com</Typography>
        </div>
      </Container>
    </section>
  );
}
