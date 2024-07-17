import React from 'react';
import { Linking, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';


export function SkillScreen() {
  const SkillItem = ({ skillName, level }: { skillName: string, level: string }) => {
    return (
      <View style={styles.skillItem}>
        <Text style={styles.skillName}>{skillName}</Text>
        <Text style={styles.skillLevel}>{level}</Text>
      </View>
    );
  };

return (
<ScrollView>
  <View style={styles.container}>
   <View style={styles.skillsContainer}>
        <SkillItem skillName="JavaScript" level="★★★★★" />
        <SkillItem skillName="React Native" level="★★★★☆" />
        <SkillItem skillName="Node.js" level="★★★★☆" />
        <SkillItem skillName="MySQL" level="★★★★★" />
        <SkillItem skillName="Docker" level="★★★☆☆" />
        <SkillItem skillName="Typescript" level="★★★★☆" />
        <SkillItem skillName="PHP" level="★★★★☆" />
    </View>

    <View>
      <Pressable style={styles.button}>
      <Text style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/bianca-macedo-973341179/')}>Contact-me!</Text>   
      </Pressable>
    </View>
      
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
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  skillsContainer: {
    width: '80%',
    alignItems: 'flex-start',
  },
  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },

  skillName: {
    fontSize: 20,
    fontFamily: 'ZenMaruGothic-Bold',
    color: '#407B50'
    
  },

  skillLevel: {
    fontSize: 50,
    color: '#EB5874',
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

export default SkillScreen;