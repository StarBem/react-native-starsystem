import AnimatedView, {AnimatedProps} from './AnimatedView';
import AnimatedImage from './AnimatedImage';
import AnimatedText from './AnimatedText';
import Avatar, {AvatarProps} from './Avatar';
import Badge, {BadgeProps, withBadge} from './Badge';
import BottomSheet, {BottomSheetProps} from './BottomSheet';
import Button, {ButtonProps} from './Button';
import Card, {CardProps} from './Card';
import CheckBox, {CheckBoxProps} from './CheckBox';
import ContentBox, {ContentBoxProps} from './ContentBox';
import Divider, {DividerProps} from './Divider';
import Header, {HeaderProps} from './Header';
import Icon, {IconProps} from './Icon';
import Image, {ImageProps} from './Image';
import Input, {InputProps} from './Input';
import LinearProgress, {LinearProgressProps} from './LinearProgress';
import ListItem, {
  ListItemProps,
  ListItemAccordionProps,
  ListItemSwipeableProps,
} from './ListItem';
import Switch, {SwitchProps} from './Switch';
import Tab, {TabItemProps, TabProps} from './Tab';
import TabView, {TabViewProps} from './TabView';
import Text, {TextProps} from './Text';

import {
  Colors,
  colors,
  fonts,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withTheme,
  makeStyles,
  useTheme,
  UpdateTheme,
  ReplaceTheme,
  FullTheme,
  Theme,
  ThemeProps,
} from './config';
import getIconType, {registerCustomIconType} from './helpers/getIconType';
import normalize from './helpers/normalizeText';
import {
  getBottomSpace,
  getStatusBarHeight,
  isIphoneX,
  ifIphoneX,
} from './helpers/iphoneX';

// Components exports
export {
  AnimatedView,
  AnimatedImage,
  AnimatedText,
  Avatar,
  Badge,
  BottomSheet,
  Button,
  Card,
  CheckBox,
  ContentBox,
  Divider,
  Header,
  Icon,
  Image,
  Input,
  LinearProgress,
  ListItem,
  Switch,
  Tab,
  TabView,
  Text,
};

// Theme utils exports
export {
  colors,
  fonts,
  getIconType,
  registerCustomIconType,
  normalize,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withBadge,
  withTheme,
  useTheme,
  makeStyles,
};

// Functions utils exports
export {getBottomSpace, getStatusBarHeight, isIphoneX, ifIphoneX};

// Components Props exports
export type {
  AnimatedProps,
  AvatarProps,
  BadgeProps,
  BottomSheetProps,
  ButtonProps,
  CardProps,
  CheckBoxProps,
  ContentBoxProps,
  Colors,
  DividerProps,
  HeaderProps,
  IconProps,
  ImageProps,
  InputProps,
  LinearProgressProps,
  ListItemAccordionProps,
  ListItemProps,
  ListItemSwipeableProps,
  SwitchProps,
  TabItemProps,
  TabProps,
  TabViewProps,
  TextProps,
};

// Theme props export
export type {FullTheme, ReplaceTheme, Theme, ThemeProps, UpdateTheme};
