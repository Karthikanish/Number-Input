import { useState } from "react"

function FormCamp() {
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [result, setResult] = useState("Total")

    function handleFname(evt) {
        setfname(evt.target.value)
    }

    function handleLname(evt) {
        setlname(evt.target.value)
    }

    function handleResult(evt) {

        evt.preventDefault()
        const total = Number(fname)+Number(lname);
        setResult(total);
    }
    
    return (
        <>
           
                <input value={fname} onChange={handleFname}></input>
                <br/>
                <br/>
                <input value={lname} onChange={handleLname}></input>
                <br/>
                <br/>
                <input type="submit" onClick={handleResult}></input>
          
            <h1>{result}</h1>
        </>
    )
}
export default FormCamp




