import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {

  return (
    <>
    <View style={styles.timingButon}>
    <RoundedButton size={75} title='10' onPress={() => onChangeTime(10)} />
    </View>
    <View style={styles.timingButon}>
    <RoundedButton size={75} title='15' onPress={() => onChangeTime(15)} />
    </View>
    <View style={styles.timingButon}>
    <RoundedButton size={75} title='20' onPress={() => onChangeTime(20)} />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  timingButon: {
    flex: 1,
    alignItems: 'center'
  }
})