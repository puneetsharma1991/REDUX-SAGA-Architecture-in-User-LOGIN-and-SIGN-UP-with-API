import { useEffect, useState } from 'react'
import { signupUser } from './action'
import { StyleSheet, TextInput, Button, View, ToastAndroid , Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message';



const Register = (props) => {

    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const dispatch = useDispatch()

    const createReqResponse = useSelector(state => state.Auth.user)

    console.log("Response Register Reducer " + JSON.stringify(createReqResponse));

    useEffect(() => {
        if (createReqResponse != null) {
            ToastAndroid.show('Registration Successfully. Please Login !', ToastAndroid.SHORT);
            dispatch({ type: 'RESET_STATE' });
            props.navigation.navigate('Login')
        }
    }, [createReqResponse])


    useEffect(() => {
        validateForm();
    }, [username, email, password, phoneNumber]);



    const validateForm = () => {
        let errors = {};

        // Validate name field 
        if (!username) {
            errors.username = 'Name is required.';
        }

        // Validate email field 
        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }

        // Validate password field 
        if (!password) {
            errors.password = 'Password is required.';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters.';
        }

        // Validate phone field 
        if (!phoneNumber) {
            errors.phoneNumber = 'Phone Number is required.';
        } else if (phoneNumber.length < 11) {
            errors.password = 'PhoneNumber must be at least 10 digits.';
        }

        // Set the errors and update form validity 
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };



    const onSubmit = (values) => {
        if (isFormValid) {

            const payload = {
                email: email, password: password,
                username: username, phoneNumber: phoneNumber
            }
            console.log("Response View Register: " + JSON.stringify(payload));
            dispatch(signupUser(payload))
        }
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Username'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => setUserName(val)}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => setPassword(val)}
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => setEmail(val)}
            />
            <TextInput
                style={styles.input}
                placeholder='Phone Number'
                autoCapitalize="none"
                placeholderTextColor='white'
                onChangeText={val => setPhoneNumber(val)}
            />
            <View style={{ height: 200, width: 200, marginTop: 100 }}>
                <Button
                    title='Submit'
                    onPress={onSubmit}
                />
            </View>
            {Object.values(errors).map((error, index) => (
                <Text key={index} style={styles.error}>
                    {error}
                </Text>
            ))}
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
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
    error: { 
        color: 'red', 
        fontSize: 20, 
        marginBottom: 12, 
    },
})