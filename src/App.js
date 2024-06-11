import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUsers from './components/users/CreateUsers';
import EditUser from './components/users/EditUser';
import Parent from './props/Parent';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/parent" element={<Parent />}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-user" element={<CreateUsers />}></Route>
          <Route path="/edit-user/:id" element={<EditUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
