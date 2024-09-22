import React from 'react'

// Generic text label component for the application
export default function TextLabel({label, value = 'N/A'}) {
    return (
        <div className='flex'>
            {label && <div className='font-bold mr-2'> {label}: </div>}
            <div className='line-clamp-2'> {value} </div>
        </div>
    )
}
