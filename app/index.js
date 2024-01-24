// Import necessary React and React Native components
import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router'; // Import Link for navigation
import Styles from '../styles/page-styles'; // Import custom styles

// Define the main page component
export default function Page() {
    // State hooks to store and manage user inputs
    const [one, onChangeOne] = React.useState("");
    const [two, onChangeTwo] = React.useState("");
    const [three, onChangeThree] = React.useState("");

    // Function to clear all input fields
    const clearInputs = () => {
        onChangeOne("");
        onChangeTwo("");
        onChangeThree("");
    };

    return (
        <View style={Styles.page}>
            {/* Instructions and descriptions for the Mad Libs */}
            <Text style={Styles.instructionsTitle}>How to play Mad Libs:</Text>
            <Text style={Styles.instruction}>
                {"Adjective - A word that describes something.\n" +
                "Animal - Any kind of animal.\n" +
                "Noun - A person, place, thing, or idea."}
            </Text>

            {/* Input fields for user to fill in words for the Mad Libs */}
            <TextInput
                style={Styles.input}
                onChangeText={onChangeOne}
                value={one}
                placeholder="Adjective"
            />
            <TextInput
                style={Styles.input}
                onChangeText={onChangeTwo}
                value={two}
                placeholder="Animal"
            />
            <TextInput
                style={Styles.input}
                onChangeText={onChangeThree}
                value={three}
                placeholder="Noun"
            />

            {/* Link to navigate to Page 2 with the filled in words as parameters */}
            <Link style={Styles.button}
                href={{ pathname: "/page2", params: { one, two, three } }}
                asChild>
                <Pressable >
                    <Text>Make My Hall Pass</Text>
                </Pressable>
            </Link>
            {/* Button to clear all input fields */}
            <Pressable style={Styles.clearButton} onPress={clearInputs}>
                <Text style={Styles.clearButtonText}>Clear</Text>
            </Pressable>
        </View>
    )
}
