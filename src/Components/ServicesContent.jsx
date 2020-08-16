import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
    },
  },
  heading: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  body: {
    marginBottom: theme.spacing(2),
  },
  listContainer: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(4),
    },
  },
}));


export const ServicesContent = ({heading, text, list}) => {
    const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.heading} variant="h3">
        {heading}
      </Typography>
      <Typography className={classes.body} variant="body2">
        {text}
      </Typography>

      <Grid className={classes.listContainer} container>
        {list &&
          list.map((item) => (
            <Grid item key={item} xs={6} style={{ display: "list-item" }}>
              <Typography variant="subtitle2">{item}</Typography>
            </Grid>
          ))}
      </Grid>
    </div>
  );

}
