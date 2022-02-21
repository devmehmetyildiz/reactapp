/*
import './App.css';
import { Home } from './Home';
import { Case } from './Case';
import { Navigation } from './Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
*/
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';
import messages from './messages';
import './styles/App.scss';
function App() {
  const [locale, setLocale] = useState('en');
  return (
    /* this is also valid 
   <BrowserRouter>
   <div className="container">
    <h3 className="m-3 d-flex justify-content-center">
      Start To Star Note Web UI 
    </h3>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/Case' element={<Case/>}/>       
    </Routes>
   </div>
   </BrowserRouter>
   */
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout setLocale={setLocale} />
    </IntlProvider>
  );
}
export default App;




