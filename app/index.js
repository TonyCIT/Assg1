// index.js
import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page() {
    const [one, onChangeOne] = React.useState("");
    const [two, onChangeTwo] = React.useState("");

    const clearInputs = () => {
        onChangeOne("");
        onChangeTwo("");
    };

    return (
        <View style={Styles.page}>
            <Text>How tp play Mad Libs</Text>
            <Text>Hall Pass</Text>
            <TextInput
                style={Styles.input}
                onChangeText={onChangeOne}
                value={one}
                placeholder=""
            />
            <TextInput
                style={Styles.input}
                onChangeText={onChangeTwo}
                value={two}
                placeholder=""
            />
            <Link style={Styles.button}
                href={{ pathname: "/page2", params: { one, two } }}
                asChild>
                <Pressable >
                    <Text>Make My Hall Pass</Text>
                </Pressable>
            </Link>
            <Pressable style={Styles.button} onPress={clearInputs} >
                <Text>Clear</Text>
            </Pressable>
        </View>
    )
}