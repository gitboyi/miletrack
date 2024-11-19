import logo from '../../assets/logo.png';
import './Header.css'

export default function Header() {
  return (
    <div className='header-container'>
      <img src={logo} alt="logo" />
    </div>
  );
}