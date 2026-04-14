import { useEffect, useState } from "react"

const Counter=()=>{

    const [qte, setQte] = useState(0)
    const [textP, setTextP] = useState("")

    const increment=()=> setQte(qte + 1)

    const decrement=()=>qte > 0 && setQte(qte - 1)

    // useEffect(()=>{
    //     console.log("Naissance")
    // },[])

    // useEffect(()=>{
    //     console.log("Agrandir")
    // })

    // useEffect(()=>{
    //     return ()=> console.log("Mourir")
    // },[])


    return(
        <div>
            <h2>Counter component</h2>
            <button onClick={decrement}>-</button>
            <span>{qte}</span>
            <button onClick={increment}>+</button>
            <br/>
            <br/>
            <input type="text" onChange={(e)=> setTextP(e.target.value)}/>
            <h2>{textP}</h2>
        </div>
    )
}

export default Counter