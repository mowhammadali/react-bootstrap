import React, { useEffect, useState } from 'react';

// styled
import GlobalStyles from './styles/Global/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { BasicTheme , DarkTheme } from './styles/Theme/Theme';

// data
import { introduction } from './Data/data';
import { cards } from './Data/data';

// components
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import Cards from './components/Cards';
import Slider from './components/Slider';
import Form from './components/Form';
import Media from './components/Media';
import Footer from './components/Footer';

// export context
export const ToggleContext = React.createContext();
export const IntroContext = React.createContext();
export const CardContext = React.createContext();

const App = () => {
    const [isDark , setIsDark] = useState(false);
    const [localState , setLocalState] = useState(false);
    const themeHandler = () => {
        setIsDark(!isDark);
    }
    return (
        <>
            <ToggleContext.Provider value={{isDark , themeHandler}}>
                <IntroContext.Provider value={introduction}>
                    <CardContext.Provider value={cards}>
                        <ThemeProvider theme={isDark ? DarkTheme : BasicTheme}>
                            <GlobalStyles isDark={isDark}/>  
                            <NavBar />
                            <Banner />
                            <Introduction />
                            <Cards />
                            <Slider />
                            <Form />
                            <Media />
                            <Footer />
                        </ThemeProvider>
                    </CardContext.Provider>
                </IntroContext.Provider>
            </ToggleContext.Provider>
        </>
    );
};

export default App;