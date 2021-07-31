import React, { useState } from 'react'
import { Text, View, Button } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);
    const pushup = () => {
        setCount(count + 1)
    };

    return (
        <View>
            <Text><h1>いいね！:{count}</h1></Text>
            <Button onPress={pushup} title='いいね！' />
        </View>
    )
}

export default Counter
