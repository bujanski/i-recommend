import './App.css';
import TopBar from './components/TopBar';
import PreviewPane from './components/PreviewPane';
import {AppContext, appData} from './store/AppContext';
import {useReducer} from 'react';
import {appReducer} from './reducers/appReducer'
import SelectionWidget from './components/SelectionWidget';
import DragList from './components/DragList'
function App() {
    const [state,
        dispatch] = useReducer(appReducer, appData);
    const {userLoggedIn} = appData;
    return (

        <div className="App">
            <AppContext.Provider
                value={{
                state,
                dispatch
            }}>
                <TopBar/> 
                {!userLoggedIn
                    ? <PreviewPane/>
                    : <SelectionWidget />}
            </AppContext.Provider>
        </div>
    )
}

export default App;