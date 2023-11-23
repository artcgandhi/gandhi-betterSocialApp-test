import React, {FC} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import ShareIcon from '../CommonAtoms/ShareIcon';
import CommentIcon from '../CommonAtoms/CommentIcon';
import BlockIcon from '../CommonAtoms/BlockIcon';
import DownVote from '../CommonAtoms/DownVote';
import VoteNumber from '../CommonAtoms/VoteNumber';
import UpVote from '../CommonAtoms/UpVote';

interface BlockAndVoteProps {
    voteNumber: number;
    onPressDown: () => void
    onPressUp: () => void
}

const BlockAndVote: FC<BlockAndVoteProps> = ({voteNumber, onPressDown, onPressUp}) => {
  return (
    <View
      style={styles.container}>
      <BlockIcon />
      <DownVote onPressDown={onPressDown}/>
      <VoteNumber voteNumber={voteNumber} />
      <UpVote onPressUp={onPressUp}/>
    </View>
  );
};

export default BlockAndVote;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
