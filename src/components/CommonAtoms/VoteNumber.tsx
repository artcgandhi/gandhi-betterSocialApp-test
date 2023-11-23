import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';

interface VoteNumberProps {
  voteNumber: number;
}

const VoteNumber: FC<VoteNumberProps> = ({voteNumber}) => {
  return <Text style={styles.voteText}>{voteNumber}</Text>;
};

export default VoteNumber;

const styles = StyleSheet.create({
  voteText: {width: 24, marginHorizontal: 11, textAlign: 'center'},
});
