import React, {FC, useEffect, useRef, useState} from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';
import colors from '../../themes/colors';

interface UserDescriptionProps {
  userDescriptionText: string;
}

const UserDescription: FC<UserDescriptionProps> = ({userDescriptionText}) => {
  const [showMore, setShowMore] = useState(false);
  //   const [contentHeight, setContentHeight] = useState(0);
  const textRef = useRef<Text>(null);
  const maxLines = 3;
  useEffect(() => {
    if (textRef.current) {
      textRef.current.measure((height) => {
        // setContentHeight(height);
        setShowMore(height > maxLines * 8); // Assuming each line height is 20 (adjust as needed)
      });
    }
  }, [userDescriptionText]);

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={styles.row}>
      <Text
        ref={textRef}
        ellipsizeMode={'clip'}
        numberOfLines={showMore ? maxLines : undefined}>
        {userDescriptionText}
      </Text>
      {showMore && (
        <Pressable onPress={handleToggleMore}>
          <Text style={styles.more}>More...</Text>
        </Pressable>
      )}
    </View>
  );
};

export default UserDescription;

const styles = StyleSheet.create({
  more: {color: colors.gray300, marginTop: 5, textDecorationLine: 'underline'},
  row: {
    marginHorizontal: 24,
    marginVertical: 8,
  },
});
