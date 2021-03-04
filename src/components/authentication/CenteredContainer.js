import React from 'react'

export default function CenteredContainer({children}) {
    return (
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            minHeight:"100vh"
        }}>
            <div style={{
                width:"100vw",
                maxWidth:"400px"
            }}>
                {children}
            </div>
        </div>
    )
}
