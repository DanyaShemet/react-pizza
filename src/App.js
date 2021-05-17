import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from 'react-router-dom';
import {useState, useEffect} from "react";
import React from "react";

import axios from 'axios';
import {connect} from 'react-redux'

import {setPizzas} from "./redux/actions/pizzas";


// function App() {
//     useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             setPizzas(data.pizzas)
//         })
//         // fetch('http://localhost:3000/db.json').then(data => data.json()).then(json => {
//         //     setPizzas(json.pizzas)
//         // })
//     }, [])
//
//     return (
//         <div className="wrapper">
//             <Header />
//             <div className="content">
//                 <Route exact path='/' render={() => <Home items={pizzas}/>}/>
//                 <Route exact path='/cart' component={Cart}/>
//             </div>
//         </div>
//     );
// }


class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path='/' render={() => <Home items={this.props.items}/>}/>
                    <Route exact path='/cart' component={Cart}/>
                </div>
            </div>
        )
    }

    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
           this.props.setPizzas(data.pizzas)
        })
    }
}

const mapStateToProps = state => {
    return {
        items: state.pizzas.items,
        filters: state.pizzas.filters
    }
}

const mapDispatchToProps = {
    setPizzas
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
