import { useState ,useEffect} from 'react'
import { loginUser } from '../login/actions'
import { StyleSheet, TextInput, Button,Text, View, Alert ,ToastAndroid} from 'react-native';
import { Platform, ScrollView, TouchableOpacity ,KeyboardAvoidingView, SafeAreaView, ActivityIndicator } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch , useSelector } from 'react-redux';



const LoginUser = (props) => {
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    const dispatch = useDispatch()


    const createReqLoginResponse = useSelector(state => state.Auth.user)

    console.log("Response Login Reducer " + JSON.stringify(createReqLoginResponse));

    useEffect(() => {
        if (createReqLoginResponse != null) {
            ToastAndroid.show('Login Successfully.', ToastAndroid.SHORT);
            props.navigation.navigate('Dashboard',{paramKey: JSON.stringify(createReqLoginResponse)})
            dispatch({ type: 'RESET_STATE' });
        }
    }, [createReqLoginResponse])

    const login = (values) => {
        console.log("Response Login ");

        if(email!= null && email!= 0){
            
            const payload = {
                email: email, password: password,
            }
            console.log("Response Login all okay " + JSON.stringify(payload));
            dispatch(loginUser(payload))
        } else {
            Alert.alert("Please Enter your Email and password!!")
        }
    }

    const navigateToRegister = () => props.navigation.navigate('Register')




    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Enter your Email'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => setEmail(val)}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => setPassword(val)}
            />
            <View style={{ height: 200, width: 200 ,marginTop: 100 }}>
            <Button
                title='Login'
                onPress={login}
            />
            </View>

            <View style={styles.signupLinkContainer}>
                <Text style={styles.signuptext}>Dont have account?</Text>
                <TouchableOpacity onPress={navigateToRegister}>
                    <Text style={[styles.signuptext, styles.signupLink]}> Sign Up Here!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginUser

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 18,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupLinkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    signuptext: {
        fontSize: 18,
        color: 'black'

    },
    signupLink: {
        color: '#FF3D00'
    },
    errorText: {
        marginTop: 30,
        color: Colors.red,
        textAlign: 'center',
        fontSize: 16,
    }

})