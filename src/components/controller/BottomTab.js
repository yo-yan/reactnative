import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ThirdScreen from '../screens/ThirdScreen';
import FourthScreen from '../screens/FourthScreen';

const BottomTab = () => {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="ThirdScreen" component={ThirdScreen} />
                <Tab.Screen name="FourthScreen" component={FourthScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTab
