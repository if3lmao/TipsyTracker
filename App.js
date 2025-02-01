import React from 'react';
import { Button, View, Alert } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Send API Request" 
        onPress={() => Alert.alert('Button Pressed!')} 
      />
    </View>
  );
};

export default App;