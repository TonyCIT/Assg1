// page2.js
import React from 'react';
import { Text, View, Image } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page() {
    const params = useLocalSearchParams();
    const { one, two } = params;


    return (
        <View style={Styles.page}>
            <View>
                <Image
                    style={{ width: 150, height: 100 }}
                    source={require('../assets/pic.png')} />
            </View>
            <View >
                <Text>This is page 2 </Text>
                <Text>First {one}!</Text>
                <Text>second {two}!</Text>
                <Link href="/">Return</Link>
            </View>
        </View>
    )
}