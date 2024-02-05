import './App.css';
import TopBar from './components/TopBar';
import PreviewPane from './components/PreviewPane';
import ScrapeImdb from './components/ScrapeImdb';

function App() {
    return (
        <div className="App">
            <TopBar />
            <PreviewPane />
        </div>
    );
}

export default App;
