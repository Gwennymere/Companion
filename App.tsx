import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NuggetManager from './modules/nugget/NuggetManager';
import { persistor, store } from './modules/state/store';

export default function App() {
  return (
    <ReduxProvider store={store}> 
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <NuggetManager></NuggetManager>
            <StatusBar style="auto" />
          </View>
        </PaperProvider>
     </PersistGate>
   </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
