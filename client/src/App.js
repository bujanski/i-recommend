import "./App.css";
import TopBar from "./components/TopBar";
import WorldListsPane from "./components/WorldListsPane";
import { AppContext, appData } from "./store/AppContext";
import { useReducer } from "react";
import { appReducer } from "./reducers/appReducer";
import SelectionWidget from "./components/SelectionWidget";
import CreateAccount from "./components/CreateAccount";

function App() {
    const [state, dispatch] = useReducer(appReducer, appData);
    const { userLoggedIn, modalOpen } = state; // Use updated state here, not appData

    return (
        <div className="App">
            <AppContext.Provider
                value={{
                    state,
                    dispatch,
                }}
            >
                <TopBar />
                {!userLoggedIn && modalOpen ? <CreateAccount /> : null}
                {!userLoggedIn ? <WorldListsPane /> : <SelectionWidget />}
            </AppContext.Provider>
        </div>
    );
}

export default App;
