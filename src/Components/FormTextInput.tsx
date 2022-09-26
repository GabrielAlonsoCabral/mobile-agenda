import {useColorScheme} from 'nativewind';
import React from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Themes from '../Themes/theme';

interface IInputProps {
  value: string;
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (props: any) => void;
}
function FormTextInput({
  value,
  onChangeText,
  label,
  placeholder,
  secureTextEntry,
}: IInputProps) {
  const {colorScheme} = useColorScheme();

  const isDarkMode = colorScheme === 'dark' ? 'dark' : 'light';
  const theme = Themes[isDarkMode];

  return (
    <View className="">
      {label && (
        <Text style={{color: theme.text}} className="ml-1 mb-1 text-2xs">
          {label}
        </Text>
      )}
      <TextInput
        placeholder={placeholder}
        dense={true}
        // @ts-ignore
        className="w-80 rounded  bg-gray-200 dark:bg-white text-white"
        secureTextEntry={secureTextEntry}
        mode="outlined"
        label=""
        value={value}
        activeOutlineColor={theme.activeOutline}
        outlineColor={theme.outlined}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default FormTextInput;
