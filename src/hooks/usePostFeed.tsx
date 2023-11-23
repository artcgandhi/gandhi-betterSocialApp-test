import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {dummyFeed} from '../dummy';
import {Feed, PostComments} from '../interface';

export interface PostFeedContextInterface {
  postFeeds: Feed[];
  setPostFeeds: Dispatch<SetStateAction<Feed[]>>;
  selectedFeed: Feed | null;
  setSelectedFeed: Dispatch<SetStateAction<Feed | null>>;
  onChangeVote: (type: string, id: string) => void;
  onSendComment: (content: string, id: string) => void;
}

export const PostFeedContext = createContext<PostFeedContextInterface>({
  postFeeds: dummyFeed,
  setPostFeeds: () => {
    //
  },
  selectedFeed: null,
  setSelectedFeed: () => {
    //
  },
  onChangeVote: () => {},
  onSendComment: () => {},
});

export const PostFeedProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [postFeeds, setPostFeeds] = useState<Feed[]>(dummyFeed);
  const [selectedFeed, setSelectedFeed] = useState<Feed | null>(null);

  const onChangeVote = (type: string, id: string) => {
    console.log(id === selectedFeed?.id)
    setPostFeeds(prev => {
      return prev.map(e => {
        if (e.id === id) {
          return {
            ...e,
            totalVote: type === 'up' ? e.totalVote + 1 : e.totalVote - 1,
          };
        } else {
          return e;
        }
      });
    });
    setSelectedFeed(prev => {
      if(prev) {
        return {
          ...prev,
          totalVote: type === 'up' ? prev?.totalVote + 1 : prev?.totalVote - 1,
        }
      }
      else {
        return prev
      }
    });
  };

  const onSendComment = (content: string, id: string) => {
    const comment: PostComments = {
      id: id,
      commentText: content,
      userData: {userImage: 'https://picsum.photos/200', userName: 'Joko'},
    };
    console.log('comment', comment);
    setSelectedFeed(prev => {
      if (prev !== null) {
        return {
          ...prev,
          postComments: [comment, ...prev?.postComments],
        };
      } else {
        return null
      }
    });
  };

  return (
    <PostFeedContext.Provider
      value={{
        postFeeds,
        setPostFeeds,
        selectedFeed,
        setSelectedFeed,
        onChangeVote,
        onSendComment,
      }}>
      {children}
    </PostFeedContext.Provider>
  );
};

export const usePostFeed = () => {
  const {
    postFeeds,
    setPostFeeds,
    selectedFeed,
    setSelectedFeed,
    onChangeVote,
    onSendComment,
  } = useContext(PostFeedContext);

  return {
    postFeeds,
    setPostFeeds,
    selectedFeed,
    setSelectedFeed,
    onChangeVote,
    onSendComment,
  };
};
