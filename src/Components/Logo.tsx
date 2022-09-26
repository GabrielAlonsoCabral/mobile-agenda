import {useColorScheme} from 'nativewind';
import React from 'react';
import {Image} from 'react-native';
import Themes from '../Themes/theme';

function Logo() {
  const {colorScheme} = useColorScheme();

  const isDarkMode = colorScheme === 'dark' ? 'dark' : 'light';
  const theme = Themes[isDarkMode];

  return (
    <Image
      className="w-28 h-28"
      source={{
        uri: theme.logo,
      }}
    />
  );
}

export default Logo;
