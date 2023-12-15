import { View, Text, Button } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';

const details = () => {   
    const local  = useLocalSearchParams();
    const router = useRouter();

    return (
        <View>
            <Stack.Screen options={{ headerTitle: 'Details'}}/>
            <Text>{local.id}</Text>
            <Button title="Update params" onPress={() => router.setParams({id: '1229'})} />
        </View>
    );
}

export default details;