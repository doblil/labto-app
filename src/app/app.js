import React from 'react';
import { useSelector } from 'react-redux';

import { ContentRouter } from '../blocs/contentRouter/contentRouter';

import { ServerMessage } from '../blocs/serverMessage/serverMessage';

import './app.scss'
import '../sass/base/variables.scss'
import '../sass/sassTemplates/btn.scss'
import '../sass/sassTemplates/overflow.scss'
import '../sass/sassTemplates/close.scss'
import '../sass/sassTemplates/print.scss'
import '../sass/sassTemplates/overlay.scss'
import '../sass/sassTemplates/page.scss'
import '../sass/sassTemplates/filter.scss'
import { ServerM } from '../blocs/serverM/serverM';



function App() {
  return (
    <div className="App">
            <ContentRouter/>
            {/* <ServerMessage/> */}
            <ServerM/>

    </div>
  );
}

export default App;
