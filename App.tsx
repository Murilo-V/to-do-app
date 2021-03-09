import React from 'react';
import Routes from './src/routes';
import { useFonts } from 'expo-font';
import { Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold } from '@expo-google-fonts/raleway';


export default function App() {

  const [fontsLoaded] = useFonts({
    Raleway_400Regular, Raleway_500Medium, Raleway_600SemiBold, Raleway_700Bold
  })

  if(!fontsLoaded) {
    return null
  }

  return (
    <Routes/>
  );
}


