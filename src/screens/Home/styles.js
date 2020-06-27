import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {},
    input: {
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 0.5,
        borderRadius: 5,
        width: '100%',
        marginVertical: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputText: {
        fontSize: 16,
        fontWeight: '500',
    },
    contentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    content: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginVertical: 70,
    },
    confirmButton: {
        borderWidth: 0.5,
        padding: 15,
        margin: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },


    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 30,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    window2: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    window: {
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 11
    },
    windowHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#c8c8c8',
        paddingHorizontal: 20,
        paddingVertical: 19
    },
    windowContent: {
        paddingHorizontal: 20,
        paddingVertical: 25
    },
    windowInput: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    windowInputInside: {
        width: '100%',
        borderWidth: 0.3,
        borderColor: '#c4c4c4',
        borderRadius: 4,
        backgroundColor: '#fafafa',
        padding: 10,
        color: '#00063f',
        fontSize: 13
    },
    windowFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#c8c8c8'
    },
    title: {
        fontFamily: 'Helvetica',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
    },
    text: {
        fontFamily: 'Helvetica',
        fontSize: 15,
        color: '#888787',
        padding: 13,
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        paddingVertical: 13
    },
    buttonTxt: {
        fontFamily: 'Helvetica',
        fontSize: 14,
        fontWeight: 'bold',
    },
    cancelBtn: {
        borderRightColor: '#c8c8c8',
        borderRightWidth: 0.5
    },
    nextBtn: {
        color: '#006ed3'
    },
    flexCenter: {
        position: 'absolute',
        left: (Dimensions.get('window').width / 2) - 25,
        bottom: 80
    },
    sliderWrap: {
        position: 'absolute',
        left: (Dimensions.get('window').width / 2) - 20,
        bottom: 30,
        flexDirection: 'row',
    },
    imageCenter: {
        justifyContent: "center",
        flexDirection: 'row',
        marginVertical: 35
    },
    modelContenttext: {
        color: '#757575',
    },
    pickerStyle:{  
        height: 100,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',  
    },
    footerButton: {
        borderRadius:8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 56,
        backgroundColor: "#f4511e",
        position: 'absolute',
        bottom: 20,
        zIndex: 2
    }  
})  

export {styles}