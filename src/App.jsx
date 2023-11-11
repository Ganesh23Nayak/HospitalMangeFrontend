import Administrator from './pages/Administrator';
import Home from './pages/Home';
import Patient from './pages/Patient';
import Doctor from './pages/Doctor';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Patient' element={<Patient />} />
					<Route path='/Administrator' element={<Administrator />} />
					<Route path='/Doctor' element={<Doctor />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
