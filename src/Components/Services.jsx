import React from 'react';
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import {ServicesContent} from "./ServicesContent";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: 'linear-gradient(to right, #9803be, #660798)',
        color: theme.palette.common.white,
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),

        [theme.breakpoints.only("sm")]: {
            paddingRight: theme.spacing(5),
            paddingLeft: theme.spacing(5),
        },
    },

    service1desc: {
        order: 2,
    },
    service1Image: {
        order: 1,
    },
    service2desc: {
        order: 4,
        [theme.breakpoints.down("sm")]: {
            order: 5,
        },
    },
    service2Image: {
        order: 5,
        [theme.breakpoints.down("sm")]: {
            order: 4,
        },
    },
    service3desc: {
        order: 8,
    },
    service3Image: {
        order: 7,
    },

    space1: {
        height: 80,
        order: 3,
    },
    space2: {
        height: 80,
        order: 6,
    },
}));

export const Services = () => {
    const classes = useStyles();

    return (
        <section className={classes.container}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={6} className={classes.service1Image}>
                        <Fade left>
                            <img src="Images/services-1.svg" alt="service 1" />
                        </Fade>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.service1desc}>   
                        <Fade right>
                            <ServicesContent
                                heading="UX Writing"
                                text="I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips."
                                list={[
                                    "Microcopy",
                                    "Taxonomy & Labeling",
                                    "Chatbots",
                                    "User Research",
                                    "Content Style Guide",
                                    "User Testing",
                                    "Design Principles",
                                ]}
                            />
                        </Fade>
                    </Grid>
                    <Grid xs={12} item className={classes.space1} />

                    <Grid item xs={12} md={6} className={classes.service2desc}>
                        <Fade left>
                            <ServicesContent
                                heading="Website Copywriting"
                                text="Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion."
                                list={[
                                    "Information Architecture",
                                    "Wireframes",
                                    "Competitor Analysis",
                                    "On-page SEO",
                                    "Off-page SEO",
                                    "USP/UVP",
                                    "Landing Page",
                                ]}
                            />
                        </Fade>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.service2Image}>
                        <Fade right>
                            <img src="Images/services-2.svg" alt="service 1" />
                        </Fade>
                    </Grid>

                    <Grid xs={12} item className={classes.space2} />

                    <Grid item xs={12} md={6} className={classes.service3Image}>
                        <Fade left>
                            <img src="Images/services-3.svg" alt="service 1" />
                        </Fade>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.service3desc}>
                        <Fade right>
                            <ServicesContent
                                heading="Content Writing"
                                text="Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure."
                                list={[
                                    "Headlines & Taglines",
                                    "Content Strategy",
                                    "Blogs & Articles",
                                    "Social Media Content",
                                    "Video Scripts",
                                    "eDMs & Newsletters",
                                    "Case Studies",
                                    "Whitepapers",
                                ]}
                            />
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}
