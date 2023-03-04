import { Link } from 'react-router-dom'
import { Navbar } from '../style/Navbar'

export const Navigation = () => {
  return (
    <>
    <Navbar>

            <Link className="link" to="/">
                Home
            </Link>
            <Link className="link" to="Categories">
                Categoies
            </Link>
            <Link className="link" to="Product">
                Product
            </Link>
            <Link className="link" to="Contact">
                Contact
            </Link>
    </Navbar>
        
        </>
  )
}
