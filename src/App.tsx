import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import store, {ActionsTypes, DialogPageType, PostType, RootStateType} from "./Redux/state";

type PropsType = {
  state: RootStateType
  dispatch: (action: ActionsTypes) => void
}


const App = (props: PropsType) => {

  return (
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>

          <div className='app-wrapper-content'>
            <Route path='/dialogs'
                   render={ () => <Dialogs
                       store={props.store}
                       state={props.state.dialogsPage} />}
            />

            <Route path='/profile'
                   render={ () =>  <Profile
                       profilePage={props.state.profilePage}
                       dispatch={props.dispatch} /> }
            />
          </div>
        </div>
     )
}

export default App;

