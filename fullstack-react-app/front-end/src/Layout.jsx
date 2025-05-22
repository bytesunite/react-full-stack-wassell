import { Outlet } from 'react-router-dom';
import NavBar from './Navbar.jsx';

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
