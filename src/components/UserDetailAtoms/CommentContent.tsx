import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';

interface CommentContentProps {
  commentContentText: string;
}

const CommentContent: FC<CommentContentProps> = ({commentContentText}) => {
  return <Text style={styles.comment}>{commentContentText}</Text>;
};

export default CommentContent;

const styles = StyleSheet.create({
  comment: {fontWeight: '400', fontSize: 16, lineHeight: 19.36},
});