import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack screenOptions={{
            headerTitle: "Assignment 1",
            headerStyle: { backgroundColor: '#999' },
            headerTintColor: 'white',
            headerBackVisible: true,  // Set to true to show the back arrow by default
        }}>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: true,
                }}
            />

            <Stack.Screen
                name="page2"
                options={{
                    headerShown: true,
                    presentation: 'modal',
                }}
            />
        </Stack>
    );
}
