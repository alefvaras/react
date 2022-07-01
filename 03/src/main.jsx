import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorld } from './HelloWorld';
 import  { Name } from './FirstApp';
 import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Name/>
        <HelloWorld/>
    </React.StrictMode>
)
