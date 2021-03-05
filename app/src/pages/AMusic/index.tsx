import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
    View,
    ScrollView,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native'
import MusicList from './MusicList'
import BannerComponent from './BannerComponent'


const AMusic: React.FC = () => {
    return (
        <>  
            <SafeAreaView style={{ flex: 1 }} >
                <LinearGradient colors={['#9F8223', '#41350F', '#292109']}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}># music #</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <MusicList componentType="tune" title="お客様へのおすすめ" subTitle="最近の再生履歴に関連" />
                        <MusicList componentType="tune" title="人気のステーション" subTitle="プライムで聴かれているステーション" />
                        <MusicList componentType="tune" title="お客様におすすめのステーション" />
                        <BannerComponent />
                        <MusicList componentType="artist" title="お客様におすすめのステーション" />
                        <MusicList componentType="songList" title="お客様におすすめのソング" />
                    </ScrollView>
                    <View style={styles.footer}></View>
                </LinearGradient>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 64,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        color: '#FFFFFF',
        // fontWeight: 'bold',
        fontSize: 20
    },
    footer: {
        height: 74,
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 0
    }
})

export default AMusic
