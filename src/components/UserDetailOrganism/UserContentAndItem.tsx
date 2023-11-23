import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import ShareAndComment from '../CommonMoleculs/ShareAndComment';
import BlockAndVote from '../CommonMoleculs/BlockAndVote';
import UserDescAndPhotoContent from '../UserDetailMoleculs/UserDescAndPhotoContent';

interface UserContentAndItemProps {
  userDescriptionText: string;
  photoContentUrl: string;
  totalComment: number
  voteNumber: number,
  onPressDown: () => void
  onPressUp: () => void
}

const UserContentAndItem: FC<UserContentAndItemProps> = ({
  photoContentUrl,
  userDescriptionText,
  totalComment,
  voteNumber,
  onPressDown,
  onPressUp
}) => {
  return (
    <View>
      <UserDescAndPhotoContent
        userDescriptionText={userDescriptionText}
        photoContentUrl={photoContentUrl}
      />
      <View
        style={styles.itemsWrapper}>
        <ShareAndComment totalComment={totalComment} />
        <BlockAndVote voteNumber={voteNumber} onPressDown={onPressDown} onPressUp={onPressUp} />
      </View>
    </View>
  );
};

export default UserContentAndItem;

const styles = StyleSheet.create({
  container: {
    height: 64,
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemsWrapper: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
