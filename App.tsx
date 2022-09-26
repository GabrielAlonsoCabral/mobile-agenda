import * as React from 'react';
import AppNavigator from './src/Navigations/Navigators';
import {Provider as PaperProvider} from 'react-native-paper';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import './styles';

function App() {
  const fonts = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}

export default App;
