import React, {FC} from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';
import IconUpvoteInactive from '../../assets/upvote_inactive.png';

interface UpVoteProps {
  onPressUp: () => void
}

const UpVote: FC<UpVoteProps> = ({
  onPressUp
}) => {
  return (
    <Pressable onPress={onPressUp}>
      <Image
        source={IconUpvoteInactive}
        style={styles.image}
      />
    </Pressable>
  );
};

export default UpVote;

const styles = StyleSheet.create({
  image: {
    height: 18,
    width: 18,
    marginRight: 24,
  },
});
