
function Api(){
    return (
        fetch('http://127.0.0.1:5000/realms')
        .then((res)=>res.json())
        .then((data)=>console.log(data))
        )
    }

export default Api