import React from 'react';
import {StyleSheet, Platform, TextProps} from 'react-native';
import {StarFunctionComponent} from '../helpers';
import Text from '../Text';

const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';

type TitleProps = TextProps & {
  /**Add right title. */
  right?: boolean;
};

export const ListItemTitle: StarFunctionComponent<TitleProps> = ({
  style,
  right,
  children,
  ...props
}) => {
  return (
    <Text
      testID="listItemTitle"
      style={StyleSheet.flatten([
        styles.title,
        right && styles.rightTitle,
        style,
      ])}
      {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        fontSize: 17,
      },
      default: {
        fontSize: 16,
      },
    }),
  },
  rightTitle: {
    color: ANDROID_SECONDARY,
  },
});

ListItemTitle.displayName = 'ListItem.Title';
