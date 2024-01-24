// index.js
import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page() {
    const [one, onChangeOne] = React.useState("");
    const [two, onChangeTwo] = React.useState("");
    const [three, onChangeThree] = React.useState("");

    const clearInputs = () => {
        onChangeOne("");
        onChangeTwo("");
        onChangeThree("");
    };

    return (
        <View style={Styles.page}>
            <Text>How tp play Mad Libs:</Text>
            <Text>Adjective - A word that describes something.</Text>
            <Text>Animal - Any kind of animal.</Text>
            <Text>Noun - A person, place, thing, or idea.</Text>
            
            <Text></Text>
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
            <Link style={Styles.button}
                href={{ pathname: "/page2", params: { one, two, three } }}
                asChild>
                <Pressable >
                    <Text>Make My Hall Pass</Text>
                </Pressable>
            </Link>
            <Text></Text>
            <Text></Text>
            <Pressable style={Styles.button} onPress={clearInputs} >
                <Text>Clear</Text>
            </Pressable>
        </View>
    )
}