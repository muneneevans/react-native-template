import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({logout, userDetails}) {
  return (
    <View>
      <Text>Home</Text>
      <Text>{JSON.stringify(userDetails)}</Text>
      <Button onPress={logout} title="log out" />
    </View>
  );
}
