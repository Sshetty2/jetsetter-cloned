import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';

import ItemList from '../models/itemList'
import Application from '../src/components/Application';

import './index.css';

const itemList = new ItemList();

ReactDOM.render(
    <Provider itemList ={itemList}>
        <Application />    
    </Provider>

    , document.getElementById('root'));
