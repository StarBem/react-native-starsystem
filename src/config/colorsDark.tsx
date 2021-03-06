import {StyleSheet} from 'react-native';
import {Colors} from './colors';

const colorsDark: Colors = {
  primary: '#FF6B19',
  primaryLight: '#FF9B00',
  secondary: '#FF3F72',
  secondaryLight: '#FFE4EB',
  white: '#080808',
  black: '#f2f2f2',
  grey5: '#393e42',
  grey4: '#43484d',
  grey3: '#5e6977',
  grey2: '#86939e',
  grey1: '#bdc6cf',
  grey0: '#e1e8ee',
  greyOutline: '#bbb',
  searchBg: '#303337',
  success: '#439946',
  error: '#bf2c24',
  warning: '#cfbe27',
  disabled: 'hsl(208, 8%, 90%)',
  // Darker color if hairlineWidth is not thin enough
  divider: StyleSheet.hairlineWidth < 1 ? '#84838a' : 'rgba(0, 0, 0, 0.12)',
  platform: {
    ios: {
      primary: '#1b262c',
      secondary: '#2089dc',
      grey: '#ffffff',
      searchBg: '#393e42',
      success: '#439946',
      error: '#bf2c24',
      warning: '#cfbe27',
    },
    android: {
      primary: '#1b262c',
      secondary: '#2089dc',
      grey: '#393e42',
      searchBg: '#393e42',
      success: '#439946',
      error: '#bf2c24',
      warning: '#cfbe27',
    },
    web: {
      primary: '#1b262c',
      secondary: '#2089dc',
      grey: '#ffffff',
      searchBg: '#393e42',
      success: '#439946',
      error: '#bf2c24',
      warning: '#cfbe27',
    },
    default: {
      primary: '#1b262c',
      secondary: '#2089dc',
      grey: '#ffffff',
      searchBg: '#393e42',
      success: '#439946',
      error: '#bf2c24',
      warning: '#cfbe27',
    },
  },
};

export default colorsDark;
