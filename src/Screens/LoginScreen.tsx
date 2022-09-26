import {useColorScheme} from 'nativewind';
import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Themes from '../Themes/theme';
import Logo from '../Components/Logo';
import Config from '../Utils/Config';
import FormTextInput from '../Components/FormTextInput';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../Components/Button';
import {
  Divider,
  IconButton,
  Button as PaperButton,
  TouchableRipple,
} from 'react-native-paper';
import {AntDesign, FontAwesome} from '@expo/vector-icons';

interface ILoginScreenProps {
  navigation: any;
}

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LoginScreen({navigation}: ILoginScreenProps) {
  const {colorScheme, setColorScheme} = useColorScheme();
  setColorScheme('dark');
  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isDarkMode = colorScheme === 'dark';

  const theme = Themes[isDarkMode ? 'dark' : 'light'];

  return (
    <SafeAreaView className="dark:bg-black">
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        showHideTransition={'none'}
        hidden={false}
      />
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={{alignItems: 'center'}}
        //default it was true
        scrollEnabled={false}>
        <View
          className={
            'max-w-max mx-auto h-screen flex flex-col items-center my-10'
          }>
          <View className="items-center">
            <Logo />
            <Text className="mt-5 font-bold dark:text-white text-3xl">
              {Config.appName}
            </Text>
            <Text className="mt-2 text-black dark:text-white mb-10">
              Agilizando os seus atendimentos
            </Text>
          </View>
          <FormTextInput
            value={text}
            placeholder="suaconta@email.com"
            label="Email"
            onChangeText={value => setText(value)}
          />
          <View className="mt-3 mb-5">
            <FormTextInput
              value={password}
              placeholder="**********"
              secureTextEntry
              label="Senha"
              onChangeText={value => setPassword(value)}
            />
          </View>

          <Button onPress={() => ''} title="Login" />

          <TouchableRipple
            className="self-center mt-5 rounded-lg px-2"
            onPress={() => ''}>
            <Text className={`text-base text-[#${theme.text}] dark:text-white`}>
              Esqueceu sua senha?
            </Text>
          </TouchableRipple>

          {/* @ts-ignore */}
          <Divider className={`w-screen mt-5 bg-gray-500 dark:bg-white`} />

          <Text className="mt-5 text-center mb-5 text-lg text-black dark:text-white ">
            Ou acesse com sua conta
          </Text>

          <View className="flex flex-row gap-16 justify-items-center">
            <View>
              <TouchableRipple onPress={() => ''} className="rounded-lg">
                <View>
                  <FontAwesome
                    style={{
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                    color={theme.icon}
                    name="google"
                    size={32}
                  />
                  <Text className="text-sm text-black  dark:text-white">
                    Google
                  </Text>
                </View>
              </TouchableRipple>
            </View>
            <View>
              <TouchableRipple onPress={() => ''} className="rounded-lg">
                <View>
                  <AntDesign color={theme.icon} name="apple1" size={32} />

                  <Text className="mt-1 text-sm text-black  dark:text-white">
                    Apple
                  </Text>
                </View>
              </TouchableRipple>
            </View>
          </View>

          <TouchableRipple
            style={{top: '5%'}}
            className="align-bottom"
            onPress={() => ''}>
            <Text
              style={{
                color: theme.text,
              }}
              className={`text-base font-medium`}>
              Ainda não possui uma conta ?
            </Text>
          </TouchableRipple>

          {/* @ts-ignore */}
          {/* <Divider className="w-screen mt-5 bg-gray-500" /> */}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
