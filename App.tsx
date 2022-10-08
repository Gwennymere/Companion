import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NuggetManager from './modules/nugget/NuggetManager';
import { store, persistor } from './modules/state/store';

export default function App() {
  return (
    <Provider store={store}> {/* provides state */}
      <PersistGate persistor={persistor}> {/* handles state reload on application reopen */}
        <PaperProvider>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <NuggetManager></NuggetManager>
            <StatusBar style="auto" />
          </View>
        </PaperProvider>
      </PersistGate>
    </Provider>
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
