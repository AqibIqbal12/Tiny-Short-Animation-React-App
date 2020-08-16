import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { TestimonialCard } from "./TestimonialCard";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        backgroundImage: 'linear-gradient(to right, #570091, #7522b6)'
    },

    heading: {
        color: theme.palette.common.white,
        backgroundColor: 'rgba(0,0,0,0.1)',
        boxShadow: '1px 16px 20px rgba(0, 0, 0, 0.17)',
        //display: 'inline-block',
        marginBottom: theme.spacing(10),
        maxWidth:'50%',
        textAlign:'center',
        margin:'auto'
        //width:'15%'
        //padding:'5px 0px'
    },
}));

export const Reviews = () => {
    const classes = useStyles();

    return (
        <section className={classes.container}>
            {/* <div style={{textAlign:'center', maxWidth:'50%', margin:'auto'}}> */}
            <Typography variant="h3" className={classes.heading}>
                Reviews
             </Typography>
             {/* </div> */}
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <TestimonialCard
                            avatar="Images/persona-2.svg"
                            title="Karl Van Lieshout"
                            subtitle="Owner & Operator – Ausbeds"
                            comments={["innovative", "seamless UX", "more online sales"]}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TestimonialCard
                            avatar="Images/persona-1.svg"
                            title="Rosawin Siri"
                            subtitle="Digital Marketing Manager – 4mation Technologies"
                            comments={["flexible", "nailed voice & tone", "keep on retainer"]}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TestimonialCard
                            avatar="Images/persona-3.svg"
                            title="Craig Erskine-Smith"
                            subtitle="CEO – Erskine Oral Care"
                            comments={["wonderful ideas", "perfect tagline", "excellent wireframes"]}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TestimonialCard
                            avatar="Images/persona-4.svg"
                            title="Eoin Mullins"
                            subtitle="Director – Corbel Technologies"
                            comments={["beautiful copy", "psychology edge", "emotional currents",]}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TestimonialCard
                            avatar="Images/persona-5.svg"
                            title="Liam Key"
                            subtitle="Creative Director – Imagination Pioneers Studios"
                            comments={["love his passion", "heaps of depth", "speaks to my brand"]}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TestimonialCard
                            avatar="Images/persona-6.svg"
                            title="Adrian Rodriguez Soto"
                            subtitle="eCommerce Manager – EUX Agency"
                            comments={["superior intellect", "deep psychology", "doubled conversions"]}
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}
