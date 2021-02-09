import React from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    SafeAreaView
} from 'react-native'
import topImage from '../images/top-image.jpg'

const Top: React.FC = () => {
  return (
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
            <View>
                <Image style={styles.topMainImage} resizeMethod='resize' source={topImage} />
                <Text style={styles.topMainText}>Trace Gallery</Text>
            </View>
            <View style={styles.cardsBlock}>
                <View style={styles.card}>
                <Text style={styles.cardTitle}>title</Text>
                </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
      height: '100%'
    },
    topMainImage: {
      width: '100%',
      height: 200
    },
    topMainText: {
      fontSize: 50,
      paddingHorizontal: '5%'
    },
    cardsBlock: {
      marginTop: 10,
      alignItems: 'center'
    },
    card: {
      width: '90%',
      height: 100,
      backgroundColor: 'red',
      borderRadius: 5
    },
    cardTitle: {
      fontSize: 30,
      position: 'absolute',
      top: 10,
      left: 20
    }
    
})

export default Top;
