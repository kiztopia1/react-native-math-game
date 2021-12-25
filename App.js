import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/main'
export default function App() {
  return (
    <View style={styles.container}>
      <Main ></Main>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
