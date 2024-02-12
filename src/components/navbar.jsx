import { navbarData } from "../data/data"
import Button from "./button"

const Navbar = () => {

  return (
    <div className='navbar-container'>
        <div className="contacts">
            {navbarData.map((navdata) => (
                <div key={navdata.id} className="contacts-data">
                    <img src={navdata.icons} alt="" />
                    <p>{navdata.descriptions}</p>
                </div>
            ))}
        </div>
        <div className="login">
                <Button className="login-btn" label="LOGIN"/>
        </div>
      
    </div>
  )
}

export default Navbar