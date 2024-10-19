/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#080404'; // black
const tintColorDark = '#fff';

export const Colors = {
  white: '#faf9f9',
  black: '#080404',
  darkGrey: '#555b6e',
  lightGrey: '#f8f4f4',
  darkGreen: '#89b0ae',
  lightGreen: '#bee3db',
  melon: '#fed7ba',

  light: {
    text: '#11181C',
    background: '#f8f4f4', // lightGrey
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
