import React, {FC} from 'react';
import { StyleSheet, Image, ViewStyle, ImageStyle} from 'react-native';

interface UserImageProps {
  imageUrl: string
  additionalStyle?: ImageStyle
}

const UserImage:FC<UserImageProps> = ({imageUrl, additionalStyle}) => {

  return (
      <Image style={[styles.image, {...additionalStyle}]} source={{uri: imageUrl}} />
  );
};

export default UserImage;

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
    borderRadius: 24, 
    marginLeft: 24
}
});
