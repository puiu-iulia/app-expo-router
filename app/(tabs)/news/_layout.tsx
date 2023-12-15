import { Stack } from "expo-router"

const NewsStack = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerTitle: 'News Feed'}}/>
        </Stack>
    )
}

export default NewsStack