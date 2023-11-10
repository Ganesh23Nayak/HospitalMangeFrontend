import Administrator from './pages/Administrator';
import Home from './pages/Home';
import Patient from './pages/Patient';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Patient' element={<Patient />} />
					<Route path='/Administrator' element={<Administrator />} />
					{/* This is a test comment */}
				</Routes>
			</Router>
		</>
	);
}

export default App;
