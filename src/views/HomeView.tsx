import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { appTheme } from '../theme/theme';


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
      backgroundColor: appTheme.colorBackground,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });