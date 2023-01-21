import React from 'react';
import { Header } from '../blocs/header/header';
import { ContentRouter } from '../blocs/contentRouter/contentRouter';
import { Footer } from '../blocs/footer/footer';

import { ServerMessage } from '../blocs/serverMessage/serverMessage';

import './app.scss'
import '../sass/base/variables.scss'
import '../sass/sassTemplates/btn.scss'
import '../sass/sassTemplates/overflow.scss'
import '../sass/sassTemplates/close.scss'
import '../sass/sassTemplates/print.scss'



function App() {
  return (
    <div className="App">
            <ContentRouter/>
            <ServerMessage/>
            <Footer/> 
    </div>
  );
}

export default App;
