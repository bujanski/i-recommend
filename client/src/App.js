import './App.css';
import TopBar from './components/TopBar';
import PreviewPane from './components/PreviewPane';
import {AppContext, appData} from './store/AppContext';
import {useReducer} from 'react';
import {appReducer} from './reducers/appReducer'
import SelectionWidget from './components/SelectionWidget';
import CreateAccount from './components/CreateAccount';

function App() {
    const [state,
        dispatch] = useReducer(appReducer, appData);
    const {userLoggedIn, modalOpen} = state; // Use updated state here, not appData
    console.log(modalOpen);

    return (
        <div className="App">
            <AppContext.Provider
                value={{
                state,
                dispatch
            }}>
                <TopBar/>
                {!userLoggedIn && modalOpen ?  <CreateAccount /> : null}
                {!userLoggedIn ? <PreviewPane/> : <SelectionWidget/>}

            </AppContext.Provider>
        </div>
    );
}

export default App;
