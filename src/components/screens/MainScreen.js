import React from 'react'
import { View, Text, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
        </View>
    )
}
export default MainScreen
