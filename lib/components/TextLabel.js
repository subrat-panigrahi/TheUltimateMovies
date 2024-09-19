import React from 'react'

export default function TextLabel({label, value = 'N/A'}) {
    return (
        <div className='flex'>
            {label && <div className='font-bold mr-2'> {label}: </div>}
            <div className='overflow-hidden'> {value} </div>
        </div>
    )
}
