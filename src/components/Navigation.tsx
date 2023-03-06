import { Link } from 'react-router-dom'
import { Navbar } from '../style/Navbar.style'

export const Navigation = () => {
  return (
    <Navbar>

            <Link className="link" to="/">
                Home
            </Link>
            <Link className="link" to="Categories">
                Categories
            </Link>
            <Link className="link" to="Product">
                Product
            </Link>
            <Link className="link" to="Contact">
                Contact
            </Link>
    </Navbar>
  )
}
