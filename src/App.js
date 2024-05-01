import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyle.css'
import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Edit } from './pages/Edit';
import { ChildrenProps } from './components/ChildrenProps';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit/:url' element={<Edit/>}/>
        <Route path="/children-props" element={<ChildrenProps/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
