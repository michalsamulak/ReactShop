import { Link } from 'react-router-dom'
import { Navbar } from './Navbar.style'

export const Navigation = () => {
  return (
    <Navbar>

            <Link className="link" to="/">
                Home
            </Link>
            <Link className="link" to="Categories">
                Categories
            </Link>
            <Link className="link" to="Cart">
                Cart
            </Link>
            <Link className="link" to="Contact">
                Contact
            </Link>
    </Navbar>
  )
}
