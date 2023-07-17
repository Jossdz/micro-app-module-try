/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

// type HomeScreenProps = {
//   navigation: any; // You can replace 'any' with the specific navigation prop type if available
// };

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}
    >
      <Text>Go to sign-in</Text>
    </View>
  );
}

function SignIn() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign-in</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export const MainModule: React.FC = () => {
  return (
    <View>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
