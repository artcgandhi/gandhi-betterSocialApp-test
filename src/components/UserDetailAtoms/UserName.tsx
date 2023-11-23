import React, {FC} from 'react';
import {Text, StyleSheet, Image, TextStyle} from 'react-native';

interface UserNameProps {
  userNameText: string;
  additionalStyle?: TextStyle
}

const UserName: FC<UserNameProps> = ({userNameText, additionalStyle}) => {
  return <Text style={[styles.name, {...additionalStyle}]}>{userNameText}</Text>;
};

export default UserName;

const styles = StyleSheet.create({
  name: {fontWeight: '600', fontSize: 14, lineHeight: 16.94},
});
