import React, {FC} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import UserImageAndName from '../UserDetailMoleculs/UserImageAndName';
import Gap from '../CommonAtoms/Gap';
import colors from '../../themes/colors';
import UserContentAndItem from '../UserDetailOrganism/UserContentAndItem';
import BackIcon from '../CommonAtoms/BackIcon';

interface PostTemplateProps {
  imageUrl: string;
  userNameText: string;
  userCommentAt: string;
  userDescriptionText: string;
  photoContentUrl: string;
  totalComment: number;
  voteNumber: number;
  isPostDetail?: boolean
  onPressPost?: () => void;
  onPressBack?: () => void
  onPressDown: () => void
  onPressUp: () => void
}

const PostTemplate: FC<PostTemplateProps> = ({
  imageUrl,
  userNameText,
  userCommentAt,
  photoContentUrl,
  userDescriptionText,
  totalComment,
  voteNumber,
  onPressPost,
  isPostDetail,
  onPressBack,
  onPressDown,
  onPressUp
}) => {
    
  return (
    <Pressable onPress={onPressPost}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {isPostDetail === true ? <BackIcon onPressBack={onPressBack} /> : null}
        <UserImageAndName
          imageUrl={imageUrl}
          userNameText={userNameText}
          userCommentAt={userCommentAt}
        />
        </View>
        <Gap height={0.5} color={colors.gray100} />
        <UserContentAndItem
          userDescriptionText={userDescriptionText}
          photoContentUrl={photoContentUrl}
          totalComment={totalComment}
          voteNumber={voteNumber}
          onPressDown={onPressDown}
          onPressUp={onPressUp}
        />
      </View>
      <Gap height={4} color={colors.gray100} />
    </Pressable>
  );
};

export default PostTemplate;

const styles = StyleSheet.create({
  container: {height: 547},
});
