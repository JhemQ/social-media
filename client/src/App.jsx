import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import PageRender from './PageRender';
import Home from './pages/home';
import Login from './pages/login';


function App() {
  return (

    <Router>
      <input type="checkbox" id='theme' />
      <div className="App">
        <div className="main">
            <Header/>
          <Routes>
            <Route exact path='/' component={Login} element={<Login/>} />
            <Route exact path='/:page' component={PageRender} element={<PageRender/>} />
            <Route exact path='/:page/:id' component={PageRender} element={<PageRender/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
