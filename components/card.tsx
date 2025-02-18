import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';

const Card = ({ text, background, isDelete, color
}: any) => {
    const [colorCard, setColorCard] = useState(background)
    const [isDeleteCard, setIsDeleteCard] = useState(isDelete)
    const [textCard, setTextCard] = useState(text)
    if (isDeleteCard) return null; // Nasconde la card se isDelete è true
    return (
        <>
            <TouchableOpacity style={[styles.box, { backgroundColor: colorCard ? colorCard : "#85786C" },]} onPress={() => { setColorCard(color), setIsDeleteCard(isDelete) }}>
                <View style={styles.border}>
                    <View style={styles.rotatedTextContainer}>
                        <Text style={styles.rotatedText}>{textCard}</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.boxName}>
                    <TextInput style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }} onChangeText={(e) =>{setTextCard(e)}}>{textCard}</TextInput>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
};

export default Card;

const styles = StyleSheet.create({
    box: {
        height: 109,
        width: 196,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    border: {
        height: 88,
        width: 178,
        backgroundColor: 'transparent',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxName: {
        backgroundColor: 'white',
        height: 40,
        width: 160,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    separator: {
        height: 1,
        width: 178,
        backgroundColor: 'black',
        marginVertical: 5,
    },
    rotatedTextContainer: {
        alignSelf: 'flex-start', // Allinea il contenitore a sinistra
        marginLeft: 10, // Aggiungi un margine a sinistra per spaziare dal bordo
    },
    rotatedText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        transform: [{ rotate: '180deg' }], // Ruota il testo di 180 gradi
    },
});
