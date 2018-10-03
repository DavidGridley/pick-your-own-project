//Movie apiKey = 320955-NightIn-V4B8585Q
//Recipie apiKey = 80413428

//https://api.edamam.com/search?q=tofu&app_id=80413428&app_key=00e1dca10b9bc769bff3c70b22b658fa

import React from 'react';
import Recipes from './Recipes';

import '../styles/components/app.scss';

class App extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div className="app">
        <Recipes/>
      </div>
    )
  }
}

export default App;
