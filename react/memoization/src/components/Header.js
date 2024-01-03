import React from 'react'

function Header({number, data, incremant}) {
    console.log("Header rendered");
    return (
        <div>
            Header
            <br />
            <button onClick={incremant}>Click</button>
            <br/>  
        </div>
    )
}

export default React.memo(Header);