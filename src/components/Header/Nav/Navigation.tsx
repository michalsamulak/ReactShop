import { Link } from 'react-router-dom'
import { useCart } from '../../../context/ShopContext'
import { Navbar } from './Navbar.style'

export const Navigation = () => {

  const {getTotalItems} = useCart()




  return (
    <Navbar>

            <Link className="link" to="/">
                Home
            </Link>
            <Link className="link" to="Categories">
                Categories
            </Link>
            <Link className="link" to="Cart">
                Cart ({getTotalItems()})
            </Link>
            <Link className="link" to="Contact">
                Contact
            </Link>
    </Navbar>
  )
}
