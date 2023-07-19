import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import SaveBracketsTax from "./routes/SaveBracketsTax";
import {Provider} from "react-redux";
import {persistor, store} from "./store/store";
import {PersistGate} from 'redux-persist/integration/react'
import Home from "./routes/Home";


const App: React.FC = () => {
  return (
      <>
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>

              <Routes>
              <Route path={'/'} element={<Home/>}></Route>
              <Route path={'/save'} element={<SaveBracketsTax />}></Route>
          </Routes>
              </PersistGate>
          </Provider>
      </>

  )
}
export default App;

