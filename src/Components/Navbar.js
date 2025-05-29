import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          {/* <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
          </a> */}
          <Link className="nav-link" to='/' >Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">About</a> */}
          <Link className="nav-link" to='/About' >About</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Contact</a> */}
          <Link className="nav-link" to='/Contact' >Contact</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Feedback</a> */}
          <Link className="nav-link" to='/Feedback' >Feedback</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </li> */}
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
