import React from 'react';
import './App.css';
import Utama from './Component/utama'
import { Link } from 'react-router-dom'
import Karya from './Component/karya';

class App extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="card-header">
          <ul className="nav nav -tabs">
            <li className="nav-item">
              <a className="nav-link"><Link to="/">Beranda</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" ><Link to="/tentangsaya">Tentang Saya</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="/karya">Karya</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="/kontak">Kontak</Link></a> 
            </li>
            <Link to="/list" className="nav-link">List</Link> 
            <Link to="/daftarbelanja" className="nav-link">Daftarbelanja</Link> 
            {/* <p><Utama /></p> */}
          </ul>
        </div>
      </nav>
      <p><Utama /></p>
      </div>
    );
  }
}

export default App;

