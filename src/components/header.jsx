import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to='/'>Home</Link><br></br>
      <Link to='/about'>About</Link><br></br>
      <Link to='/contact'>Contact</Link><br></br>
    </header>
  )
}