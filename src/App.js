import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from 'react-router-dom';
import React from "react";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' component={Home}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    );
}

export default App


