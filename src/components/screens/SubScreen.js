import React from 'react'
import { View, Text } from 'react-native';

const SubScreen = ({ route }) => {

    const { itemId, param } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SubScreen</Text>
            <Text>{itemId}</Text>
            <Text>{param.name}</Text>
            <Text>{param.uid}</Text>
        </View>
    )
}

export default SubScreen
