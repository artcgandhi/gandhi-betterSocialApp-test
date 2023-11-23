import React, {FC} from 'react';
import {StyleSheet, Image} from 'react-native';
import IconBlock from '../../assets/block.png';

const BlockIcon = ({}) => {
  return (
    <Image source={IconBlock} style={styles.image} />
  );
};

export default BlockIcon;

const styles = StyleSheet.create({
  image: {
    height: 24,
    width: 24,
    marginLeft: 22,
  },
});
