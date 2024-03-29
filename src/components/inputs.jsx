import React from 'react'

const Inputs = ({ label, value, onChange, type, }) => {
    return (
        <div className='inputs-cont'>
            <label>{label}</label> <br />
            <input type={type} value={value} onChange={onChange} />
        </div>
    )
}

export default Inputs