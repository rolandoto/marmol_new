const ENDPOINT ="http://localhost:4000/api/auth/login"

const LoginService=({email,password}) =>{

    return fetch(`${ENDPOINT}`,{
        method:"post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({email,password})
    }).then(resp => {
        if(!resp.ok) throw new Error("Response is not ok")
        return resp.json()
    }).then(resp =>{
        return resp 
    })

}

export default LoginService