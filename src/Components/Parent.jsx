import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    
    const [cone, setcone] = useState(0)
    const [ctwo, setctwo] = useState(0)

    const updateItem = useCallback(() => {
        console.log(cone+10, ctwo+10)
        return (cone+10, ctwo+10);
    }, [ctwo])
    
    return (
        <>
            <button onClick={() => {setcone(cone+1)}}>{cone}</button>
            <button onClick={() => {setctwo(ctwo+1)}}>{ctwo}</button>
            <Child updateItem={updateItem} />
        </>
    )
}

export default Parent;