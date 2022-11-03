import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import PageRender from './PageRender';
import Home from './pages/home';
import Login from './pages/login';
import Alert from './components/alert/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';

function App() {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])
  
  return (

    <Router>
      <Alert />
      <input type="checkbox" id='theme' />
      <div className="App">
        <div className="main">
            <Header/>
          <Routes>
            <Route exact path='/' component={auth.token ? Home : Login} element={auth.token ? <Home /> : <Login/>} />
            <Route exact path='/:page' component={PageRender} element={<PageRender/>} />
            <Route exact path='/:page/:id' component={PageRender} element={<PageRender/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
