//  Import dependencies :
import React, { Component } from 'react';
import Header from "./components/sections/Header";
import {Route} from "react-router-dom";
//  Import Styles :
import './styles/css/bootstrap.min.css';
import "./styles/css/app.css";
//  Import Pages :
import Home from "./components/pages/Home";
import Registration from "./components/pages/Registration";
import About from "./components/pages/About";
import Quiz from "./components/pages/Quiz";


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/registration" component={Registration} />
                <Route path="/quiz" component={Quiz} />
                <Route path="/about" component={About} />
            </div>
        );
    }
}

export default App;
