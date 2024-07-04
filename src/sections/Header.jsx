
import Nav from '../components/Nav'
import NavBottom from '../components/NavBottom'

function Header() {
  return (
    <div className='w-full bg-black sticky top-0 z-50'>
      <Nav/>
      <NavBottom/>
    </div>
  )
}

export default Header