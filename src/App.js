import Header from './components/Header';
import logo from './logo.svg';
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className='app-header'>
        <Header />
      </div>
      <div className='app-content'>
        <Outlet />
        {/* app content */}
      </div>
    </div>
  );
}

export default App;
