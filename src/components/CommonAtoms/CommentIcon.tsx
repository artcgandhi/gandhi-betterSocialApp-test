import React, {FC} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import IconComment from '../../assets/comment.png';

interface CommentIconProps {
  totalComment: number;
}

const CommentIcon: FC<CommentIconProps> = ({totalComment}) => {
  return (
    <View style={styles.container}>
      <Image source={IconComment} style={styles.image} />
      <Text style={styles.commentTotal}>{totalComment}</Text>
    </View>
  );
};

export default CommentIcon;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
  image: {
    height: 18,
    width: 18,
    marginLeft: 24,
  },
  commentTotal: {
    width: 24,
    marginHorizontal: 4,
    textAlign: 'center',
  },
});
