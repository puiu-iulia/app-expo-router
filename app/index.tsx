import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';


const index = () => {    
    return (
        <View>
            <Link href="/profile" asChild>
                <Button title="Open Profile" />
            </Link>
            <Link href="/feed" asChild>
                <Button title="Open Feed" />
            </Link>
            <Link href="/details/42" asChild>
                <Button title="Open details 42" />
            </Link>
            <Link href="/details/1337" asChild>
                <Button title="Open details 1337" />
            </Link>
            <Link href="/drawer" asChild replace>
                <Button title="Open drawer" />
            </Link>
            <Link href="/(tabs)" asChild replace>
                <Button title="Open Tabs" />
            </Link>
            <Link href="/modal" asChild >
                <Button title="Open Modal" />
            </Link>
        </View>
    );
}

export default index;