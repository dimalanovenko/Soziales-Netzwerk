import {createRoot} from 'react-dom/client'
import './index.css'

import {Provider} from "react-redux";
import {store} from "./store/store.js";

import {BrowserRouter} from "react-router";

import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
