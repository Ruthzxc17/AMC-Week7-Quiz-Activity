import React, { useState } from 'react';
import { Switch, StyleSheet, Image, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, {backgroundColor: isEnabled ? 'yellow' : 'gray'}]}>
        
        <Image
          source={{
            uri: isEnabled
              ? 
              'https://png.pngtree.com/png-clipart/20220911/original/pngtree-shining-bright-light-bulb-png-image_8539561.png'
              : 'https://png.pngtree.com/png-vector/20220608/ourmid/pngtree-light-bulb-line-icon-vector-png-image_4934008.png'
          }}
          style={styles.image}
        />
        
        <Text style={styles.text}>
        {isEnabled ? 'ON' : 'OFF'}
          </Text>
        
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        
        <Text style={styles.text}>
        {isEnabled ? 'AMC Light Bulb' : 'AMC Light Bulb'}
          </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200, 
    height: 200,
    marginBottom: 20, 
  },
});

export default App;
