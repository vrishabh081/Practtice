import React from 'react'

const Input = ({type="text", placeholder="Type...", handleChange, value=""}) => {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            onChange={handleChange} 
            style={{width:"90%", display:"block", margin:"0.5rem auto", borderRadius:"0.5rem", border:"1px solid black", padding:"0.6rem"}}
            value={value}
        />
    )
}

export default Input
