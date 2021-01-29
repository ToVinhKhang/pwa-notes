import React, { useState } from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,Khang
    Redirect
} from "react-router-dom";
import LoginAndRegister from "./pages/LoginAndRegister";
import { CircularProgress } from "@material-ui/core";
import ListNotes from "./components/ListNotes";
import SideMenu from "./components/SideMenu";
import WriteNote from "./components/WriteNote";
import { Grid } from "@material-ui/core";

function App() {
    const [isLoading, setIsLoading] = useState(false);

    setTimeout(() => {
        setIsLoading(true);
    }, 3000);

    return (
        <div className="app">
            {isLoading === false ? (
                <>
                    <CircularProgress />
                    {/* <h4 className="app__loadingText">Loading...</h4> */}
                    <img
                        src="/images/notes.png"
                        className="app__loadingLogo"
                        alt=""
                    />
                </>
            ) : (
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <LoginAndRegister />
                        </Route>

                        <Route exact path="/workspace">
                            <div className="app__workspace">
                                <Grid container spacing={0}>
                                    <Grid item md={2}>
                                        <SideMenu />
                                    </Grid>

                                    <Grid item md={3}>
                                        <ListNotes />
                                    </Grid>

                                    <Grid item md={7}>
                                        <WriteNote />
                                    </Grid>
                                </Grid>
                            </div>
                        </Route>

                        <Route exact path="/trash">
                            <div className="app__trash">
                                <Grid container spacing={0}>
                                    <Grid item md={2}>
                                        <SideMenu />
                                    </Grid>

                                    <Grid item md={3}>
                                        <ListNotes />
                                    </Grid>

                                    <Grid item md={7}>
                                        <WriteNote />
                                    </Grid>
                                </Grid>
                            </div>
                        </Route>

                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            )}
        </div>
    );
}

export default App;
