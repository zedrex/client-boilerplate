import React from "react";

// Styling and theming
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import "focus-visible/dist/focus-visible";

// Router
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage/AboutPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import HomePage from "../pages/HomePage/HomePage";

// Redux
import { Provider } from "react-redux";
import { store } from "../state";

const App = () => {
    return (
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <Router>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/about">
                        <AboutPage />
                    </Route>
                    <Route exact path="/settings">
                        <SettingsPage />
                    </Route>
                </Router>
            </ChakraProvider>
        </Provider>
    );
};

export default App;
