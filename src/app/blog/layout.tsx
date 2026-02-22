import React from 'react'

export default function BlogLayout({children} : {children: React.ReactNode}){
    console.log(children)
    return (
        <div>
            <h1>Hey, it is Blog.</h1>
            {children}
        </div>
    )
}