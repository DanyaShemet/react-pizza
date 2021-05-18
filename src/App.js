import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from 'react-router-dom';
import {useState, useEffect} from "react";
import React from "react";

import axios from 'axios';
import {useDispatch} from 'react-redux'

import {setPizzas} from "./redux/actions/pizzas";


function App() {
    const dispatch = useDispatch(); // mapDispatchToProps

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas))
        })
    }, [])

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

//
// const mapDispatchToProps = {
//     setPizzas
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
