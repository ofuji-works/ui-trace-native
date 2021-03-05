import React from 'react'
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { TuneComponent } from './TuneComponent'
import ArtistComponent from './ArtistComponent'
import SongListComponent from './SongListComponent'

interface IProps {
    title: string
    subTitle?: string
    componentType: 'tune' | 'artist' | 'songList'
}

const MusicList: React.FC<IProps> = (props) => {

    const tunes: {artist: string, name: string}[] = [
        {
            artist: '東京事変',
            name: '東京事変',
        },
        {
            artist: 'Mrs.GREEN APPLE',
            name: 'Mrs.GREEN APPLE',
        },
    ];

    const songs: { title: string }[] = [
        {
            title: '群青日和'
        },
        {
            title: '青と夏'
        },
        {
            title: 'future nova'
        },
        {
            title: 'light player'
        }
    ]

    const TuneComponents = tunes.map((tune, i) => {
        switch (props.componentType) {
            case 'tune':
                return (
                    <TuneComponent key={i} {...tune} />
                )
            case 'artist':
                return (
                    <ArtistComponent key={i} {...tune} />
                )
            case 'songList':
                return (
                    <SongListComponent key={i} songs={songs} />
                )
            default:
                return (
                    <TuneComponent key={i} {...tune} />
                )
        }
    })
    

    return (<>
        <View style={styles.titleBlock}>
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.subTitle}>{props.subTitle}</Text>
            </View>
            <View style={{ justifyContent: 'center', marginLeft: 'auto' }}>
                <TouchableOpacity onPress={()=>{}} style={styles.moreBlock}>
                    <Text style={styles.more}>もっと見る</Text>
                </TouchableOpacity>
            </View>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginBottom: 15 }}>
            { (props.componentType == 'songList') ? <SongListComponent songs={songs} /> : TuneComponents }
        </ScrollView>
    </>)
}

const styles = StyleSheet.create({
    titleBlock: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    title: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    subTitle: {
        marginTop: 5,
        color: '#DDDDDD'
    },
    moreBlock: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: '#D5D5D5',
        // opacity: 0.5
        borderRadius: 50,
    },
    more: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        backgroundColor: '#D5D5D5',
    }
})

export default MusicList
