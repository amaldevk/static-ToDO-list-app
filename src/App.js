import logo from './logo.svg';
import './App.css';
import Navtodo from './components/Navtodo';
import Addtodo from './components/Addtodo';
import Viewtodo from './components/Viewtodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Navtodo/>} />
          <Route path='/add' element = {<Addtodo/>} />
          <Route path='/view' element = {<Viewtodo/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
