import Administrator from './pages/Administrator';
import Home from './pages/Home';
import Patient from './pages/Patient';
import Doctor from './pages/Doctor';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Error from './pages/error';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Patient' element={<Patient />} />
					<Route path='/Administrator' element={<Administrator />} />
					<Route path='/Doctor' element={<Doctor />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
