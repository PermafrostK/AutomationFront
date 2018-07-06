//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';

//Routes

import AppRoutes from './routes';


//Assets
import './index.css';

//RegisterWorker
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
