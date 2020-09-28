/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useState } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './src/screens/Home';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMapMarkerAlt, faHome, faListAlt, faListOl, faThList, faList, faUser } from '@fortawesome/free-solid-svg-icons';

const NavigatioProps = {
  Home: {
    screen: <HomeScreen />,
    icon: faHome
  },
  Search: {
    screen: <Text> 1</Text>,
    icon: faSearch
  },
  Ask: {
    screen: <HomeScreen />,
    icon: require('./src/assets/photo.png')
  },
  List: {
    screen: <HomeScreen />,
    icon: faList
  },
  Person: {
    screen: <HomeScreen />,
    icon: faUser
  }
};
function Navigatio() {
  const activeTintColor = '#FF6F00';
  const inactiveTintColor = '#828282';
  const [selectedTab, setSelectedTab] = useState(0);
  const MyComponent = 'HomeScreen';

  // const TagName = ;
  return (
    <View style={{flex: 1}}>
      {
        NavigatioProps[Object.keys(NavigatioProps)[selectedTab]].screen
      }
      <View style={{width: '100%', height: 56, position: 'absolute', bottom:0, backgroundColor: '#F8F8F8', display: 'flex', flexDirection: 'row'}}>
        {
          Object.keys(NavigatioProps).map((key, index) => (
            key === 'Ask' ? <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center',
              backgroundColor: '#F8F8F8', borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: -10}} onPress={() => setSelectedTab(index)}>
              <Image style={{width: 40, height: 40, tintColor:selectedTab === index ? activeTintColor : inactiveTintColor}} source={NavigatioProps[key].icon}/>
            </TouchableOpacity> : <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={() => setSelectedTab(index)}>
              {/* <Image style={{width: 24, height: 24, tintColor:selectedTab === index ? activeTintColor : inactiveTintColor}} source={NavigatioProps[key].icon}/> */}
              <FontAwesomeIcon icon={NavigatioProps[key].icon} size={24} style={{color: selectedTab === index ? activeTintColor : inactiveTintColor}} />
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}

export default function App (){
  return (
    <Navigatio />
  );
};