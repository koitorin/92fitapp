import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MotionTest from './motionTest';
import Home from './home';
import Exercises from './exercises';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MotionTest" component={MotionTest} />
        <Stack.Screen name="Exercícios" component={Exercises} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
