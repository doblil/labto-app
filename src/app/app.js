import React from 'react';
import { Header } from '../blocs/header/header';
import { ContentRouter } from '../blocs/contentRouter/contentRouter';
import { Footer } from '../blocs/footer/footer';

import { ServerMessage } from '../blocs/serverMessage/serverMessage';

import './app.scss'
import '../sass/base/variables.scss'
import { Screen } from '../blocs/screens/screen';



function App() {
  return (
    <div className="App">
            <Header/>
            <Screen/>
            <ContentRouter/>
            <ServerMessage/>
            <Footer/> 
    </div>
  );
}

export default App;
