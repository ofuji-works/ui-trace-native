import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const BannerComponent: React.FC = () => {
    return (
        <View style={{ paddingHorizontal: 15, marginVertical: 15 }}>
            <LinearGradient
                style={{ height: 200, borderRadius: 5 }}
                colors={['#009517', '#00DDCC', '#0034C3']}
                start={{x: 0.0, y: 1}} 
                end={{x: 1, y: 0}}
            >
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default BannerComponent
