import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IconBack from '../assets/back.png';
import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteActive from '../assets/downvote_active.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteActive from '../assets/upvote_active.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import PostTemplate from '../components/Templates/PostTemplate';
import {usePostFeed} from '../hooks/usePostFeed';
import UserComment from '../components/UserDetailOrganism/UserComment';
import Gap from '../components/CommonAtoms/Gap';
import colors from '../themes/colors';

function PostDetailScreen() {
  const {selectedFeed, onSendComment, onChangeVote} = usePostFeed();
  const [newComment, setNewComment] = useState<string>('');
  const navigation = useNavigation();
  const newId: Date = new Date;

  return (
    <SafeAreaView>
      <ScrollView style={{marginBottom: 48}}>
        {selectedFeed !== null && (
          <>
            <PostTemplate
              imageUrl={selectedFeed.userData.userImage}
              isPostDetail={true}
              photoContentUrl={selectedFeed.photoContent}
              totalComment={selectedFeed.postComments.length}
              userCommentAt={selectedFeed.userCommentAt}
              onPressBack={() => navigation.goBack()}
              userDescriptionText={selectedFeed.descriptionContent}
              userNameText={selectedFeed.userData.userName}
              voteNumber={selectedFeed.totalVote}
              onPressDown={() => onChangeVote('down', selectedFeed.id)}
              onPressUp={() => onChangeVote('up', selectedFeed.id)}
            />
          </>
        )}
        <Gap height={2} color={colors.gray100} />
        <FlatList
          scrollEnabled={false}
          data={selectedFeed?.postComments}
          renderItem={({item}) => {
            return (
              <UserComment
                commentContentText={item.commentText}
                imageUrl={item.userData.userImage}
                userName={item.userData.userName}
              />
            );
          }}
        />
      </ScrollView>
      <View style={styles.commentWrapper}>
        <Gap height={0.5} color={colors.gray100} />
        <TextInput
          placeholder="Enter Comment"
          style={styles.textInput}
          value={newComment}
          onChangeText={value => setNewComment(value)}
        />
        <Button
          title="Comment"
          onPress={() => {
            setNewComment('')
            onSendComment(newComment, String(newId));
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default PostDetailScreen;

const styles = StyleSheet.create({
  commentWrapper: {
    position: 'absolute',
    bottom: 20,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    zIndex: 10,
  },
  textInput: {flex: 1},
});
