import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Translator from './src/screen/Translator';
import VK from './src/screen/VK';

function VKScreen() {
  return (
    <View>
      <ScrollView>
        <VK />
      </ScrollView>
    </View>
  );
}

function TranslatorScreen() {
  return (
    <View>
      <ScrollView>
        <Translator />
      </ScrollView>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="VK"
        component={VKScreen}
        options={{
          tabBarLabel: 'VK',
          tabBarIcon: ({color, size}) => (
            <Icon name="vk" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TranslatorScreen"
        component={TranslatorScreen}
        options={{
          tabBarLabel: 'Translator',
          tabBarIcon: ({color, size}) => (
            <Icon name="at" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
