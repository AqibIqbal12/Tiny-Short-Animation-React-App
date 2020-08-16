import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './style';
import { TopBar } from './Components/TopBar';
import { Header } from './Components/Header';
import { Services } from './Components/Services';
import { Reviews } from './Components/Reviews';
import { Contact } from './Components/Contact';

export const App = () => {
    return (
        <div>
            
            <ThemeProvider theme={theme}>
                <TopBar />
                <main style={{ overflow: "auto" }}>
                    <Header />
                    <Services />
                    <Reviews />
                    <Contact />
                </main>
            </ThemeProvider>
        </div>
    )
}
