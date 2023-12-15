import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';

const modal = () => {  
    const navigation = useNavigation();
    const isPresented = navigation.canGoBack();
    return (
        <View>
            <Text>Profile</Text>
        </View>
    );
}

export default modal;