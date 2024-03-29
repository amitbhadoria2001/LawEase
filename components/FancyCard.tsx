import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Meditating Place</Text>
      <View style={[styles.card, styles.cardElevation]}>
        <Image
          source={{
            uri: 'https://cdn-web.heartfulness.org/en/wp-content/uploads/2019/06/07135655/hfn-blog-the-vibratory-heart.jpg', // Placeholder image URL
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hearfulness Logo </Text>
          <Text style={styles.cardLabel}>Hyderabad </Text>
          <Text style={styles.cardDesription}>It is a heart based meditation practice </Text>
          <Text style={styles.cardFooter}>Few Seconds away</Text>


        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    // Define your heading text styles
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,

  },
  card: {
    // Define your card styles
    width: 350,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:18
  },
  cardElevation: {
    // Define your card elevation styles
    backgroundColor:'lightblue',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height:1
    }
  },
  cardImage: {
    height: 180,
    marginBottom: 19,
    borderTopLeftRadius: 10,
    borderTopRightRadius:10
    // width: 100,
    // Add any additional styles for the image here
  },
  cardBody:{
    flex:1,
    flexGrow: 1,
    paddingHorizontal:12
  },
  cardTitle:{
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 4

  },
  cardLabel:{
    color: 'black',
    fontSize: 20,
    marginBottom: 6
  },
  cardDesription:{
    color: 'black',
    fontSize: 15,
    marginBottom: 12,
    marginTop:6,
    flexShrink:1
  },
  cardFooter:{
    color: 'black'

  }
});
