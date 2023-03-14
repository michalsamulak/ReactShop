import { Link } from 'react-router-dom'
import { useCart } from '../../../context/ShopContext'
import { Navbar } from './Navbar.style'


export const Navigation = () => {

  const {getTotalItems} = useCart()




  return (
    <Navbar>

            <Link className="link" to="/ReactShop">
                Home
            </Link>
            <Link className="link" to="ReactShop/Categories">
                Categories
            </Link>
            <Link className="link" to="ReactShop/Cart">
                Cart ({getTotalItems()})
            </Link>
            <Link className="link" to="ReactShop/Contact">
                Contact
            </Link>
    </Navbar>
  )
}
