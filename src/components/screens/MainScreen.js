import React from 'react'
import { View, Text, Button } from 'react-native';

const MainScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>MainScreen</Text>
            <Button
                title='Go to SubScreen'
                onPress={() =>
                    navigation.navigate('SubScreen',
                        {
                            itemId: 12345,
                            param: {
                                uid: 'saeidfk12',
                                name: 'hashimoto'
                            }
                        }
                    )} />
            <Button
                title='Go to Third'
                onPress={() =>
                    navigation.navigate('Third',
                    )} />
        </View>
    )
}
export default MainScreen
