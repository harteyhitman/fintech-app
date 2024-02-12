import React from 'react'
import { navdown } from '../data/data'
import Hamburger from '../assets/images/hamburger.png'

const NavDown = () => {
    return (
        <div className='fin-tec-adv'>
            <h2>FINANCIAL TECHNOLOGY ADVISORS</h2>
            <div className="hamburger">
                <img src={Hamburger} alt="" />
            </div>
            <div className="navdown">
                {navdown.map((down) => (
                    <div key={down.id} className="list_down">
                        <ul>
                            <li>
                                <a>{down.title}</a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NavDown