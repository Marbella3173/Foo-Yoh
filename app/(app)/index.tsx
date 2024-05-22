import { Text, View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { useSession } from '../ctx';
import { Link } from 'expo-router';

export default function Index() {
  const { signOut } = useSession();
  const [ searchQuery, setSearchQuery ] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'start', alignItems: 'center' }}>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}>
        Sign Out
      </Text>
      <Link  href = "/account">Account</Link>
      <Searchbar style = {styles.search} onChangeText={setSearchQuery} value = {searchQuery}/>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    width: "80%",
  }
});
