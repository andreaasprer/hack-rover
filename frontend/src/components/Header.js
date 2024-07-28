import ClearLogo from '../images/bruinNetLogo-removebg-preview.png'

// header section for website
const Header = () => {
  return (
    <div className='header'>
      <a href="home" className="logo"><img src={ClearLogo} alt='bruinNetLogo' width='20%'></img></a>
      <ul className="nav__links">
              <li><a href="about" target="_blank">About Us</a></li>
              <li><a href="progress" target="_blank">Progress</a></li>
          </ul>
    </div>
  )
}

export default Header