import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from 'react-router-dom';
import {useState, useEffect} from "react";

import axios from 'axios';


function App() {

    const [pizzas, setPizzas] = useState([], )

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setPizzas(data.pizzas)
        })
        // fetch('http://localhost:3000/db.json').then(data => data.json()).then(json => {
        //     setPizzas(json.pizzas)
        // })
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path='/' render={() => <Home items={pizzas}/>}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    );
}

export default App;
