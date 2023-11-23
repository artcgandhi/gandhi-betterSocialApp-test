import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import UserDescription from '../UserDetailAtoms/UserContentDescription';
import UserContentPhoto from '../UserDetailAtoms/UserContentPhoto';
import ShareIcon from '../CommonAtoms/ShareIcon';
import CommentIcon from '../CommonAtoms/CommentIcon';

interface ShareAndCommentProps {
  totalComment: number
}

const ShareAndComment: FC<ShareAndCommentProps> = ({
  totalComment
}) => {
  return (
    <View
      style={styles.container}>
      <ShareIcon />
      <CommentIcon totalComment={totalComment}/>
    </View>
  );
};

export default ShareAndComment;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  }
});
