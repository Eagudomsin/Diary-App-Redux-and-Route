import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddDairyForm from './components/AddDairyForm'
import AllDiary from './components/AllDiary'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/add-diary">
        <AddDairyForm />
      </Route>
      <Route path="/all-diary">
        <AllDiary />
      </Route>
    </div>
  );
}

export default App;
