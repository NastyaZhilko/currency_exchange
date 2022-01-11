import React from 'react';
import './App.css';
import Draggable from "react-draggable";
import Main from "./components/Main/Main";
import Account from "./components/Account/Account";
import Card from "./components/Card/Card";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <Main/>
            </div>
        </DndProvider>
    );
}

export default App;
