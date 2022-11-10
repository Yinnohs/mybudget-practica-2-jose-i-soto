import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export const HomeView: React.FC = ()=>{
    return(
        <View style={styles.container}>
            <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, quasi!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });