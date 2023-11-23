import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import UserImageAndName from '../UserDetailMoleculs/UserImageAndName';
import Gap from '../CommonAtoms/Gap';
import colors from '../../themes/colors';
import UserContentAndItem from '../UserDetailOrganism/UserContentAndItem';
import BackIcon from '../CommonAtoms/BackIcon';
import UserImage from '../UserDetailAtoms/UserImage';
import UserName from '../UserDetailAtoms/UserName';
import CommentContent from '../UserDetailAtoms/CommentContent';

interface UserCommentProps {
  imageUrl: string;
  userName: string;
  commentContentText: string;
}

const UserComment: FC<UserCommentProps> = ({
  imageUrl,
  userName,
  commentContentText,
}) => {
  return (
    <>
    <View
      style={styles.container}>
      <UserImage imageUrl={imageUrl} additionalStyle={styles.imageComment} />
      <View style={styles.nameAndCommentWrapper}>
        <UserName userNameText={userName} additionalStyle={styles.name}/>
        <CommentContent commentContentText={commentContentText} />
      </View>
    </View>
    <Gap height={0.5} color={colors.gray100} />
    </>
  );
};

export default UserComment;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 72,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  nameAndCommentWrapper: {width: '90%'},
  name: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 14.52,
    color: '#828282',
  },
  imageComment: {width: 38, height: 38, marginLeft: 0, marginRight: 16}
});
