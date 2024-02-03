const endpoint = {
    signup: `http://192.168.0.181:8000/api/users`
}



export const userSignup = async (user) => {

    const response = await fetch(endpoint.signup, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_name: user.username,
            email: user.email,
            phone_number: user.phoneNumber,
            password: user.password,
        })
    })
    console.log("Response before Register api: "+JSON.stringify(response));

    if (!response.ok) throw new Error('Something Went Wrong!!');

    const responseData = await response.json();
    console.log("Response Register api: "+JSON.stringify(responseData));

    return responseData;
}