import React from 'react';
import {Theme, GlobalStyles} from './themes'
import {Routers} from './Routes'




export const App =() => {
  return (
    <Theme>
      <GlobalStyles/>
      
      <Routers/>
    </Theme>
  );
}


