
const API_KEY = 'AIzaSyATUMwesuBSiCA2QdvsDsH1immr8BBKen0'  //put you key here

const endpoint = {
    login : `http://192.168.0.181:8000/api/users/login`
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