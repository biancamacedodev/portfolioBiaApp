import React, { useEffect, useState } from 'react';
import { Button, Image, Linking, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import FotoPerfil from '../../assets/pictures/perfilBia.png'
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { ScrollView } from 'react-native-gesture-handler';


const fetchFonts = () => {
  return Font.loadAsync({
    'ZenMaruGothic-Regular': require('./../../assets/fonts/Zen_Maru_Gothic/ZenMaruGothic-Regular.ttf'),
    'ZenMaruGothic-Bold': require('./../../assets/fonts/Zen_Maru_Gothic/ZenMaruGothic-Bold.ttf'),
    'ZenMaruGothic-Medium': require('./../../assets/fonts/Zen_Maru_Gothic/ZenMaruGothic-Medium.ttf'),

    'Kodchasan-Bold': require('./../../assets/fonts/Kodchasan/Kodchasan-Bold.ttf')
  });
};


export function MainScreen( { navigation }: any) {
  
  function SkillScreen(){
    navigation.navigate('SkillScreen')
}

const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadResources() {
      try {
        await fetchFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    }

    loadResources();
  }, []);

  if (!fontsLoaded) {
    return null;
  }


return (

  <ScrollView>
    <View style={styles.container}>
    <Image source={FotoPerfil} style={styles.image} />
    <Text style={styles.link} onPress={() => Linking.openURL('https://mail.google.com/mail/u/0/#all?compose=new')}>Email</Text>
    <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/biancamacedodev')}>GitHub</Text>
    <Text style={styles.link} onPress={() => Linking.openURL('https://www.linkedin.com/in/bianca-macedo-973341179/')}>LinkedIn</Text>

    
    <Pressable style={styles.button} onPress={() => navigation.navigate('SkillScreen')}>
            <Text  style={styles.button}>View Skills!</Text>    
    </Pressable>
      
  </View>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F6EB',
  },
  image: {
    width: '90%'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    color: 'white',
    marginBottom: 5,
    backgroundColor:'#EB5874',
    padding: 10,
    borderRadius: 10,
    fontFamily: 'ZenMaruGothic-Medium',
    fontSize: 20
  },
  button: {
    fontFamily: 'ZenMaruGothic-Medium',
    color: 'white',
    backgroundColor:'#407B50',
    padding: 10,
    borderRadius: 10,
    fontSize: 20
  }
});

export default MainScreen;