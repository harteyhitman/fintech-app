import React from 'react'
import Button from '../../components/button'

const Calltoaction = () => {
  return (
    <div className='call-to-action'>
        <div className="call-right">
            <h3>DO  YOU FEEL YOU NEED PROFESSIONAL ADVICE</h3>
            <p>That is simple to understand and straightforward to implement</p>
        </div>
        <div className="call-left">
            <Button className="call-btn" label="CALL TO ACTION" />
        </div>
    </div>
  )
}

export default Calltoaction