import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FeedScreen from './src/screens/FeedScreen';
import PostDetailScreen from './src/screens/PostDetailScreen';
import {PostFeedProvider} from './src/hooks/usePostFeed';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PostFeedProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="feed">
          <Stack.Screen
            name="feed"
            component={FeedScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="post-detail"
            component={PostDetailScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PostFeedProvider>
  );
}

export default App;
