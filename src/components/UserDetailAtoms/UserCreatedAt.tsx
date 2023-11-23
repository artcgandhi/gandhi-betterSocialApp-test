import React, {FC} from 'react';
import {Text, StyleSheet, Image} from 'react-native';

interface UserCreatedAtProps {
  userCommentAt: string;
}

const UserCreatedAt: FC<UserCreatedAtProps> = ({userCommentAt}) => {
  return <Text style={styles.name}>{userCommentAt}</Text>;
};

export default UserCreatedAt;

const styles = StyleSheet.create({
  name: {fontWeight: '400', fontSize: 12, lineHeight: 18},
});