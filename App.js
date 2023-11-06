import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import Form from './screens/Form';
import { StyledComponent } from "nativewind";


export default function App() {
  return (
    <View className="h-screen flex justify-center">
       <Form/>
    </View>
  );
}
