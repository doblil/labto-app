import React from 'react';
import { useSelector } from 'react-redux';

import { ContentRouter } from '../blocs/contentRouter/contentRouter';

import './app.scss'
import '../sass/base/variables.scss'
import '../sass/sassTemplates/btn.scss'
import '../sass/sassTemplates/overflow.scss'
import '../sass/sassTemplates/close.scss'
import '../sass/sassTemplates/print.scss'
import '../sass/sassTemplates/overlay.scss'
import '../sass/sassTemplates/page.scss'
import '../sass/sassTemplates/filter.scss'
import '../sass/sassTemplates/spinner.scss'
import '../sass/sassTemplates/animate.scss'
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
