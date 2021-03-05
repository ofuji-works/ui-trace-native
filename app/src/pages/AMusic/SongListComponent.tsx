import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface ISong {
    title: string
}

interface IProps {
    songs: ISong[]
}

const SongListComponent: React.FC<IProps> = (props) => {

    const Songs = props.songs.map((song) => {
        return (
            <View style={styles.songBlock}>
                <View style={styles.songImage}></View>
                <View style={styles.songTitleBlock}>
                    <Text style={styles.songTitle}>{song.title}</Text>
                    <Text style={styles.songCategory}>オルゴールサウンド JPOP</Text>
                </View>
                <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.songIconPlus}>+</Text>
                        <Text style={styles.songIcon}>•••</Text>
                    </View>
                </View>
            </View>
        )
    })
    return (<View style={styles.songListBlock}>{Songs}</View>)
}

const styles = StyleSheet.create({
    songListBlock: {
        flexWrap: 'wrap',
        height: 240
    },
    songBlock: {
        marginLeft: 15,
        marginBottom: 15,
        flexDirection: 'row'
    },
    songImage: {
        width: 60,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 5
    },
    songTitleBlock: {
        justifyContent: 'center',
        marginHorizontal: 10
    },
    songTitle: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    songCategory: {
        color: '#DDDDDD',
    },
    songIconPlus: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    songIcon: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginLeft: 15
    },
})

export default SongListComponent
