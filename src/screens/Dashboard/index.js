import React from 'react'
import { useSelector } from 'react-redux'
import { Text, StyleSheet, SafeAreaView } from 'react-native'

const DashBoard = ({route}) => {

    const userEmail = route.params.paramKey
    console.log("Response DashBoard Reducer " + JSON.stringify(userEmail));

    const email = JSON.parse(userEmail)




    return (
        <SafeAreaView style={styles.screen}>

            <Text style={styles.hiText}>Hii, there</Text>

            <Text style={styles.name}>{email['UserEmail']}</Text>

        </SafeAreaView>
    )
}


export default DashBoard

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    hiText: {
        color: 'black',
        marginTop: 10,
        marginLeft: 15,
        fontSize: 22
    },
    name: {
        marginTop: 10,
        marginLeft: 15,
        color: 'black',
        fontSize: 18
    },
    logoutIcon: {
        marginRight: 10
    }
})