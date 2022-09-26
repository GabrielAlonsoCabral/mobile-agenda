import {useColorScheme} from 'nativewind';
import React from 'react';
import Themes from '../Themes/theme';
import {Button, TouchableRipple} from 'react-native-paper';
import {TouchableHighlight, TouchableOpacity} from 'react-native';

interface IButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

function ExtendedButton({title, onPress, disabled}: IButtonProps) {
  const {colorScheme} = useColorScheme();

  const isDarkMode = colorScheme === 'dark' ? 'dark' : 'light';
  const theme = Themes[isDarkMode];

  return (
    <Button
      className={`mt-5 shadow-md shadow-[#${theme.shadow}] rounded-lg`}
      style={{backgroundColor: theme.ctaButton}}
      contentStyle={{paddingHorizontal: 120}}
      mode="contained"
      labelStyle={{fontSize: 16, color: theme.buttonLabel}}
      disabled={disabled}
      onPress={onPress}>
      {title}
    </Button>
  );
}

export default ExtendedButton;
