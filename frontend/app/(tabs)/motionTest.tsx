import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';  // Corrigido a importação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MotionTest = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);  // Usando Camera.Constants
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri); // Exibindo a URI da foto no console
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Button
            title="Flip Camera"
            onPress={() =>
              setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)
            }
          />
          <Button title="Take Picture" onPress={takePicture} />
        </View>
      </Camera>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MotionTest">
        <Stack.Screen name="MotionTest" component={MotionTest} options={{ title: 'Motion Test' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
});

export default App;