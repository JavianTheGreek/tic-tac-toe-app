import React from 'react'

function Button({ value, onClick, style }) {

    return (
        <button className='border-[1px] border-[#29ABA4] h-[150px] text-7xl font-extrabold text-cyan-700' value={value} onClick={onClick}>
            {value}
        </button>

    )
}

export default Button