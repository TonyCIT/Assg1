// page2.js
import React, { useState } from 'react'; // Corrected import
import { Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router'; // Removed useState from here
import Signature from 'react-native-signature-canvas';
import Styles from '../styles/page-styles';

export default function Page() {
    const params = useLocalSearchParams();
    const { one, two, three } = params;
    const router = useRouter();
    
    const handleSignature = signature => {
        console.log(signature); // Handle the signature string as needed
    };

    const handleEmpty = () => {
        console.log('Empty signature');
    };

    const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;

    // Function to get today's date in a specific format
    const getTodaysDate = () => {
        const today = new Date();
        return today.toLocaleDateString(); // Formats date as MM/DD/YYYY
    };

     // Split "HALL PASS" into an array of letters
     const hallPassLetters = "HALL PASS".split("");

    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={Styles.backButton}>
                <Text style={Styles.backArrow}>{"←"}</Text>
            </TouchableOpacity>
            <View style={Styles.verticalTextContainer}>   
              {hallPassLetters.map((letter, index) => (
                <Text key={index} style={Styles.verticalLetter}>{letter}</Text>
              ))}
            </View>  
            <ImageBackground 
              source={require('../assets/pic.png')} 
              style={Styles.fullScreenImage}
            >    
                <View style={Styles.textContainer}>
                <Text style={Styles.mad}>Mad Libs</Text>
                <Text style={Styles.dateText}>Date: {getTodaysDate()}</Text>
                    <Text style={Styles.hallPassText}>
                      Last night, a {one} {two} knocked on my door, asking for a {three}!
                    </Text>
                    </View>
                    
                <View style={Styles.signatureContainer}>
                    <Signature
                        onOK={handleSignature}
                        onEmpty={handleEmpty}
                        descriptionText="Sign"
                        clearText="Clear"
                        confirmText="Save"
                        webStyle={style}
                    />
                </View>
                
            </ImageBackground>
        </View>
    );
}
