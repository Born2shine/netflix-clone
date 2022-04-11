import './assets/css/main.css'
import Login from "./components/Login"  
import Registration from "./components/Registration"  
import Home from "./components/Home"  
import { useSelector } from 'react-redux'

function App() {
  const movie = useSelector((state) => state.movies.singleMovie)
  console.log(movie)
  return (
    <div className="App">
      <Home/>
      {/* <Login/> */}
      {/* <Registration/> */}
    </div>
  );
}

export default App;
