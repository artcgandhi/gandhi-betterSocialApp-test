import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import PostTemplate from '../components/Templates/PostTemplate';
import {usePostFeed} from '../hooks/usePostFeed';
import {Feed} from '../interface';

function FeedScreen() {
  const navigation = useNavigation();
  const {postFeeds, setSelectedFeed, onChangeVote} = usePostFeed();

  const onPressPost = (item: Feed) => {
    setSelectedFeed(item);
    navigation.navigate('post-detail');
  };

  return (
    <SafeAreaView>
      <FlatList
        data={postFeeds}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item, index}) => {
          return (
            <PostTemplate
              isPostDetail={false}
              imageUrl={item.userData.userImage}
              onPressPost={() => onPressPost(item)}
              photoContentUrl={item.photoContent}
              totalComment={item.postComments.length}
              userCommentAt={item.userCommentAt}
              userDescriptionText={item.descriptionContent}
              userNameText={item.userData.userName}
              voteNumber={item.totalVote}
              onPressDown={() => onChangeVote('down', item.id)}
              onPressUp={() => onChangeVote('up', item.id)}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

export default FeedScreen;
