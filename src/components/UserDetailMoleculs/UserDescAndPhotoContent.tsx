import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import UserDescription from '../UserDetailAtoms/UserContentDescription';
import UserContentPhoto from '../UserDetailAtoms/UserContentPhoto';

interface UserDescAndPhotoContentProps {
    userDescriptionText: string
    photoContentUrl: string
}

const UserDescAndPhotoContent: FC<UserDescAndPhotoContentProps> = ({photoContentUrl, userDescriptionText}) => {
  return (
    <View>
    <UserDescription userDescriptionText={userDescriptionText}/>
    <UserContentPhoto photoContentUrl={photoContentUrl} />
  </View>
  );
};

export default UserDescAndPhotoContent;

const styles = StyleSheet.create({
  container : {
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameAndCreatedAtWrapper: {marginLeft: 16}
});
