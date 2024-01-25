// Import necessary modules and components
import React, { useState } from 'react'; 
import { Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Signature from 'react-native-signature-canvas';
import Styles from '../styles/page-styles';

// Define the Page component
export default function Page() {
    // Retrieve query parameters using useLocalSearchParams hook
    const params = useLocalSearchParams();
    const { one, two, three } = params;

    // useRouter hook to access router for navigation
    const router = useRouter();
    
    // Function to handle the signature once it's confirmed
    const handleSignature = signature => {
        console.log(signature); // Logs the signature data
    };

    // Function called when the signature pad is empty
    const handleEmpty = () => {
        console.log('Empty signature');
    };

    // Custom styles for the signature canvas
    const style = `.m-signature-pad--footer {display: none; margin: 0px;}`;

    // Function to get and format today's date
    const getTodaysDate = () => {
        const today = new Date();
        return today.toLocaleDateString();
    };

    // Split "HALL PASS" into individual letters for vertical display
    const hallPassLetters = "HALL PASS".split("");

    return (
        <View style={Styles.container}>
            {/* Back button to navigate to the previous screen */}
            <TouchableOpacity onPress={() => router.back()} style={Styles.backButton}>
                <Text style={Styles.backArrow}>{"←"}</Text>
            </TouchableOpacity>

            {/* Vertical text container for "HALL PASS" */}
            <View style={Styles.verticalTextContainer}>   
              {hallPassLetters.map((letter, index) => (
                <Text key={index} style={Styles.verticalLetter}>{letter}</Text>
              ))}
            </View>  

            {/* Background image container */}
            <ImageBackground 
              source={require('../assets/pic.png')} 
              style={Styles.fullScreenImage}
            >    
                {/* Text container for content display */}
                <View style={Styles.textContainer}>
                    <Text style={Styles.mad}>Mad Libs</Text>
                    <Text style={Styles.dateText}>Date: {getTodaysDate()}</Text>
                    <Text style={Styles.hallPassText}>
                      Last night, a {one} {two} knocked on my door, asking for a {three}!
                    </Text>
                </View>
                    
                {/* Signature pad for user input */}
                <View style={Styles.signatureContainer}>
                <Text >Signature:</Text>
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
