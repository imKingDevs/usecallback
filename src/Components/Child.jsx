import React, { useEffect, useState } from 'react'

function Child({updateItem}) {

    const [update, setupdate] = useState([])
    useEffect(() => {
      setupdate(updateItem);
    }, [updateItem])
    
    return (
        <>
            <div>
                {/* {update && update.map((val, i) => {
                    <div key={i}>{val}</div>
                })} */}
            </div>
        </>
    )
}

export default Child