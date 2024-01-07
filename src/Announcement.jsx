import React from 'react'

const Announcement = () => {
    return (
        <>
            <div className='d-flex justify-content-center p-1'>
                <span className="border border-1 rounded px-1 me-3" style={{backgroundColor: "#F1F1F2", borderColor: "#E6E7E9"}}>Announcement</span>
                <div className='fs-6' style={{fontWeight: "600"}}>
                    We are happy to announce that we raise $2 Million in Seed Funding
                </div>
            </div>
        </>
    )
}

export default Announcement
