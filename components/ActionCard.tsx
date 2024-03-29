import React from 'react'
import { StyleSheet, Text, View, Linking, Image ,TouchableOpacity} from 'react-native'

export default function ActionCard() {
  function openWebsite(websiteLink: String){
    Linking.openURL(websiteLink)
  }
  return (
    
    <View>
      <Text style ={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText}>Jai Shree Ram </Text>
      </View>
      <Image source={{
        uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge1J8AbklC0DSTapK4fH4w-yX9HA0moNVo57VY3u78hRIzE_AzGbAgduYf1wuZqfBqxpzzUtE8QNWHT2A3fGplZaaSTzuakzFDZ61lgaogxBpW121_FF09kjZHSXfg4SE8WckiF3l4CCrWkrtPUtqerhAsDyBZmHSyMvmClfoP3LAaYh8-LIsYtBai5xU/s4800/1706406518910.jpg'
      }}
      style={styles.cardImage}
      />
      <View style={styles.cardBody}>
      <Text numberOfLines={5}>
        म मन्दिर भारत के उत्तर प्रदेश के अयोध्या में निर्माणाधीन एक हिन्दू मन्दिर परिसर है जिसकी रक्षणावेक्षण श्री राम जन्मभूमि तीर्थ क्षेत्र ट्रस्ट द्वारा की जा रही है। ऐसा हिन्दू मान्यता है कि यह मन्दिर राम जन्मभूमि स्थल पर स्थित है, जो हिन्दू धर्म के मुख्याराध्य श्रीराम का पौराणिक जन्मस्थान है।
        </Text>
      </View>
      <View style={styles.footerContainer}>
     <TouchableOpacity
     onPress={()=> openWebsite('https://hi.wikipedia.org/wiki/राम_मंदिर,_अयोध्या')}>
     <Text style={styles.socialLink}>
      Read More
     </Text>
     </TouchableOpacity>
     <TouchableOpacity
     onPress={()=> openWebsite('https://online.srjbtkshetra.org/donation-receipt/#/mobileVerification')}>
     <Text style={styles.socialLink}>
      Donate 
     </Text>
     </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{},
  card:{},
  elevatedCard:{},
  headingContainer:{},
  headerText:{},
  cardImage:{
    height: 200,
    width:400
  },
  cardBody:{},
  footerContainer:{},
  socialLink:{}
 

})