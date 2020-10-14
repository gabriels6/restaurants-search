import React from 'react';
import {ThemeProvider } from 'styled-components'

import {Provider} from 'react-redux';

//Resets navigators' default style parameters

import { Reset} from 'styled-reset'

import store from './Redux/store';
import theme from './theme';
import Home from './pages/Home/index.jsx'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <Reset />
          <Home />   
      </ThemeProvider>
    </Provider>
    
  );
}

export default App;
