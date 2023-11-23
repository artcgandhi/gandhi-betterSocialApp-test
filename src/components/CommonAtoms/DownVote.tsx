import React, {FC} from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';
import IconDownvoteInactive from '../../assets/downvote_inactive.png';

interface DownVoteProps {
  onPressDown: () => void
}

const DownVote: FC<DownVoteProps> = ({onPressDown}) => {
  return (
    <Pressable onPress={onPressDown}>
      <Image
        source={IconDownvoteInactive}
        style={styles.image}
      />
    </Pressable>
  );
};

export default DownVote;

const styles = StyleSheet.create({
  image: {
    height: 18,
    width: 18,
    marginLeft: 24,
  },
});
