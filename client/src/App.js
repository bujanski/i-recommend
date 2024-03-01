import "./App.css";
import TopBar from "./components/TopBar";
import WorldListsPane from "./components/WorldListsPane";
import { AppContext, appData } from "./store/AppContext";
import { useReducer, useEffect } from "react";
import { appReducer } from "./reducers/appReducer";
import SelectionWidget from "./components/SelectionWidget";
import CreateAccount from "./components/CreateAccount";
import axios from "axios";

function App() {
    const [state, dispatch] = useReducer(appReducer, appData);
    const { userLoggedIn, modalOpen } = state; // Use updated state here, not appData

    const loginUser = (userData) => {
        dispatch({ type: "loginUser", payload: userData });
    };

    const autoLogin = async () => {
        const token = localStorage.getItem('authToken');
        console.log(token);
        if (token) {
          // Validate token on the server and log in the user
          try {
            const response = await axios.post('http://localhost:8000/users/autologin', {
              token,
            });
    
            if (response.data.success) {
              const userData = { username: response.data.user.username, userId: response.data.user.userId };
              loginUser(userData);
            }
          } catch (error) {
            console.error('Auto-login failed:', error.message);
          }
        }
      };

      useEffect(() => {
        autoLogin();
      }, []);

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
                {!userLoggedIn ? <WorldListsPane /> : null}
                {userLoggedIn ? <SelectionWidget category="books" /> : null}
                {userLoggedIn ? <SelectionWidget category="movies" /> : null}
                {userLoggedIn ? <SelectionWidget category="videoGames" /> : null}
            </AppContext.Provider>
        </div>
    );
}

export default App;
