import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './app/Components/Home';
import NewsDetail from './app/Components/NewsDetail';
import NewsList from './app/Components/NewsList';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: 'white',
          headerLeftContainerStyle: {
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: 'rgba(92,90,91,0.7)',
            alignItems: 'center',
            marginLeft: 20,
            marginTop: 20,
          },
        }}
        initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="News Detail" component={NewsDetail} />
        <Stack.Screen name="NewsList" component={NewsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
