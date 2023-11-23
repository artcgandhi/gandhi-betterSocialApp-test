import React, {FC} from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';
import IconBack from '../../assets/back.png';

interface BackIconProps {
    onPressBack?: () => void
}

const BackIcon: FC<BackIconProps> = ({onPressBack}) => {
  return (
    <Pressable onPress={onPressBack}>
    <Image
      source={IconBack}
      height={18}
      width={18}
      style={{marginLeft: 22}}
    />
  </Pressable>
  );
};

export default BackIcon;

const styles = StyleSheet.create({
  image: {
    height: 24,
    width: 24,
    marginLeft: 22,
  },
});
