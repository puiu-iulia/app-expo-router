import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


const TabsLayout = ({ children }) => {
    return (
        <Tabs>
            <Tabs.Screen name='news' options={{ 
                headerShown: false,
                tabBarLabel: 'News Feed',
                tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name="ios-information-circle" size={size} color={color} />;
                }
            }} />
            <Tabs.Screen name='tab2' options={{ 
                title: 'Tab 2',
                tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name="ios-information-circle" size={size} color={color} />;
                }
            }} />
            <Tabs.Screen name='index' options={{href: null}} ></Tabs.Screen>
        </Tabs>
    )
}

export default TabsLayout