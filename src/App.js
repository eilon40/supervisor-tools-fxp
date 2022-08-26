import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { Home, SelectTask } from './pages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tasks' element={<SelectTask />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </Router>
    );
}

export default App;
