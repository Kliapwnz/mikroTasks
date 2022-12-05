import React from 'react';

import './App.css';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {Body} from "./site/Body";

function App() {
    return (
        <div className="App">
            <Header title="FirstHeader"/>
            <Header title="SecondHeader"/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
