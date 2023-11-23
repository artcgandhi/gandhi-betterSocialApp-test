import React, {FC} from 'react';
import { StyleSheet, Image} from 'react-native';

interface UserContentPhotoProps {
  photoContentUrl: string
}

const UserContentPhoto:FC<UserContentPhotoProps> = ({photoContentUrl}) => {

  return (
      <Image style={styles.image} source={{uri: photoContentUrl}} />
  );
};

export default UserContentPhoto;

const styles = StyleSheet.create({
  image: {
    height: 200
}
});
