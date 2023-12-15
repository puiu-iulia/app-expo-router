import { View, Button, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
    return (
        <View>
            <Link href="/(tabs)/news/42" asChild>
                <Button title="Go to 42" />
            </Link>
            <Link href="/(tabs)/news/1337" asChild>
                <Button title="Go to 1337" />
            </Link>
        </View>
    )}
export default index;