import {
  createInstance,
  OptimizelyExperiment,
  OptimizelyProvider,
  OptimizelyVariation,
} from '@optimizely/react-sdk';
import React, {useId} from 'react';

import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const userId = useId();

  const optimizely = createInstance({
    sdkKey: '',
  });

  return (
    <OptimizelyProvider optimizely={optimizely} user={{id: userId}}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>React Native A/B test Demo</Text>
          <OptimizelyExperiment experiment="button_background_experiment">
            <OptimizelyVariation variation="blue">
              <Pressable
                style={[styles.button, {backgroundColor: 'blue'}]}
                onPress={() => optimizely.track('click')}>
                <Text style={styles.text}>Register</Text>
              </Pressable>
            </OptimizelyVariation>
            <OptimizelyVariation variation="green">
              <Pressable
                style={[styles.button, {backgroundColor: 'green'}]}
                onPress={() => optimizely.track('click')}>
                <Text style={styles.text}>Register</Text>
              </Pressable>
            </OptimizelyVariation>
          </OptimizelyExperiment>
        </View>
      </SafeAreaView>
    </OptimizelyProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  button: {
    width: '50%',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: '#fff',
  },
});
export default App;
