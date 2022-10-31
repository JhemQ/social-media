import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import PageRender from './PageRender';

function App() {
  return (
    <Router>
      <input type="checkbox" id='theme' />
      <div className="App">
        <div className="main">
          <Routes>
            <Route exact path='/:page' component={PageRender} element={<PageRender/>} />
            <Route exact path='/:page/:id' component={PageRender} element={<PageRender/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
