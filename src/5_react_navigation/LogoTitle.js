import React from 'react';
import {Image, StyleSheet} from 'react-native';
import reactImgSrc from '../../assets/react.png';

function LogoTitle() {
  return <Image style={styles.container} source={reactImgSrc} />;
}

const styles = StyleSheet.create({
  container: {width: 30, height: 30},
});

export default LogoTitle;
