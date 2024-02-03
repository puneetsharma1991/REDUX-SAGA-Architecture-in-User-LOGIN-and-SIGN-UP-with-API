

const endpoint = {
    login : `Enter your local IP address:8000/api/users/login`
}

export const userLogin = async (user) => {
    
    const response = await fetch(endpoint.login,{
        method : 'POST',
        headers : { 
            'Content-Type' : 'application/json' 
        },
        body : JSON.stringify({
            email : user.email,
            password : user.password,
        })
    })
    console.log("Response before Login api: "+JSON.stringify(response));


    if(!response.ok) throw new Error('Something Went Wrong!!');
    
    const responseData = await response.json()
    console.log("Response Login api: "+JSON.stringify(responseData));


    return responseData
}
