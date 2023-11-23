import React, {FC} from 'react';
import { StyleSheet, Image} from 'react-native';
import IconShare from '../../assets/share.png';

const ShareIcon = ({}) => {

  return (
    <Image
    source={IconShare}
    style={styles.image}
  />
  );
};

export default ShareIcon;

const styles = StyleSheet.create({
  image: {
    height: 18,
    width: 18,
    marginLeft: 22
}
});
