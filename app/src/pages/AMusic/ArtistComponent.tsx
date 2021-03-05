import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface IProps {
    name: string
}

const ArtistComponent: React.FC<IProps> = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.artistImage}></View>
            <Text style={styles.artistName}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginLeft: 15,
        alignItems: 'center'
    },
    artistImage: {
        backgroundColor: '#FFFFFF',
        borderRadius: 85,
        height: 170,
        width: 170
    },
    artistName: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: 10
    }
})

export default ArtistComponent