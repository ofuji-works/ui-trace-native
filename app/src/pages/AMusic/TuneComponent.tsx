import React, { useState, useRef } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    Animated
} from 'react-native'
import { Actions } from 'react-native-router-flux'

interface IProps {
    artist: string
}

export const TuneComponent: React.FC<IProps> = (props) => {

    const clickHandler = () => {
    }

    return (
        <View style={styles.item}>
            <TouchableHighlight
                onPress={() => {
                    clickHandler()
                }}
            >
                <View
                    style={styles.itemImage}
                >
                </View>
            </TouchableHighlight>
            <View style={{ width: 170 }}>
                <Text numberOfLines={1} style={styles.itemText}>{props.artist}を聴いているお客様におすすめ</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginLeft: 15
    },
    itemImage: {
        height: 170,
        width: 170,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden'
    },
    itemText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: 10,
        overflow: 'hidden',
    },
    circle: {
        height: 170,
        width: 170,
        borderRadius: 85,
        backgroundColor: '#DDDDDD'
    }
})
