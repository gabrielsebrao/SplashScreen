import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const SplashScreen = function () {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#F9CC35', '#EF3E72', '#6728D3']}
                style={styles.background}
            />
            <Image
                style={styles.logo}
                source={{ uri: 'https://troyredfern.com/wp-content/uploads/2021/04/new-instagram-logo-white-border-icon-png-large.png' }} />
        </View>
    )
};

const styles = StyleSheet.create({
    
    logo: {
        width: 100,
        height: 100,
    },

    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
});


export default SplashScreen;