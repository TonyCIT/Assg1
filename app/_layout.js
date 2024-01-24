import { Stack } from 'expo-router';
export default function Layout() {
    return (
        <Stack screenOptions={{
            headerTitle: "Mad Libs",
            headerStyle: { backgroundColor: 'red',},
            headerTintColor: 'white',
            headerBackVisible: false,
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
 ); }