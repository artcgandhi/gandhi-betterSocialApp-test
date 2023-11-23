import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import UserImage from '../UserDetailAtoms/UserImage';
import UserName from '../UserDetailAtoms/UserName';
import UserCreatedAt from '../UserDetailAtoms/UserCreatedAt';

interface UserImageAndNameProps {
    imageUrl: string
    userNameText: string
    userCommentAt: string
}

const UserImageAndName: FC<UserImageAndNameProps> = ({imageUrl, userNameText, userCommentAt}) => {
  return (
    <View style={styles.container}>
      <UserImage imageUrl={imageUrl} />
      <View style={styles.nameAndCreatedAtWrapper}>
      <UserName userNameText={userNameText} />
      <UserCreatedAt userCommentAt={userCommentAt} />
      </View>
    </View>
  );
};

export default UserImageAndName;

const styles = StyleSheet.create({
  container : {
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameAndCreatedAtWrapper: {marginLeft: 16}
});
