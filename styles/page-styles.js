import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    input: {
        width: '80%',
        flex: .15,
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 15,
        margin: 15,
        },
    button: {
        backgroundColor: 'lightblue',
        borderRadius: 30,
        padding: 20,
        },  
    backButton: {
        position: 'absolute',
        top: 0, // Adjust this value as needed
        left: 20, // Adjust this value as needed
        zIndex: 10, // Ensure the button is above other elements
        padding: 10, // Padding to increase the touchable area
        },
    backArrow: {
        fontSize: 50, // Size of the back arrow text
        color: '#000', // Back arrow color
        },
    container: {
        flex: 1, // Container takes up the full screen
        flexDirection: 'row', // Align children horizontally
        },
    verticalTextContainer: {
        height: '100%', // Make the container take the full height of the screen
        flexDirection: 'column', // Align the letters vertically
        justifyContent: 'space-around', // Center the container vertically on the screen
        alignItems: 'flex-start', // Align the container to the start of the screen
        transform: [{ rotate: '180deg' }],
        },
    verticalLetter: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 30, // Adjust the line height to manage spacing between letters
        transform: [{ rotate: '90deg' }], // Rotate the letters
        },
    fullScreenImage: {
        flex: 1, // Use flex to expand to the full screen
        resizeMode: 'cover', // 'cover' resizes the image to cover the whole screen
        },
    textContainer: {
        flex: 1, // Take up all available space
        backgroundColor: 'rgba(255,255,255,0.8)', // White background with opacity for readability
        padding: 20, // Add some padding around the text
        justifyContent: 'center', // Center the text vertically
        },
    jokeText: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 10,
        right: 0,
        bottom: 0,
        },
    jokeAnswer: {
        fontSize: 18,
        color: 'blue',
        marginTop: 10,
        right: 0,
        bottom: 0,
        },
    hallPass: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        },
    hallPassText: {
        fontSize: 18,
        color: 'black',
        marginBottom: 10,
        },
    dateText: {
        position: 'absolute',
        top: 150, // Adjust as needed
        right: 80, // Adjust as needed
        fontSize: 16,
        color: '#000',
    },
    mad: {
        position: 'absolute',
        top: 10, // Adjust as needed
        right: 80, // Adjust as needed
        fontSize: 48,
        color: '#000',
    },
    signatureContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        height: 100, // Adjust the height as needed
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
    },
    
});

export default styles;