import { Stack } from "expo-router"

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerTitle: 'Your Home'}}/>
            <Stack.Screen name="profile" />
            <Stack.Screen name="drawer" options={{ headerShown: false}}/>
            <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
            <Stack.Screen name="modal" options={{presentation: 'modal'}} />
        </Stack>
    )
}

export default StackLayout
