import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {datasource} from "./Data";

const Add = ({navigation}) => {
    const [letter, setLetter] = useState('');
    const [letterType, setLetterType] = useState('Vowels');

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>
                Add Letter
            </Text>

            <Text style={styles.label}>
                Letter:
            </Text>

            <TextInput
                style={styles.input}
                maxLength={1}
                value={letter}
                onChangeText={(value) => setLetter(value)}
            />

            <Text style={styles.label}>
                Letter Type:
            </Text>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={letterType}
                    onValueChange={(value) => setLetterType(value)}
                >
                    <Picker.Item
                        label="Vowels"
                        value="Vowels"
                    />

                    <Picker.Item
                        label="Consonants"
                        value="Consonants"
                    />
                </Picker>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Submit"
                    color="#7041B5"
                    onPress={() => {
                        let item = {key: letter};
                        let indexnum = 1;
                        if(letterType=="Vowels") {
                            indexnum = 0;
                        }
                        datasource[indexnum].data.push(item);
                        navigation.navigate("Home");
                    }
                }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#F3EFF8',
        marginTop: 40,
    },

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#603A91',
        margin: 20,
    },

    label: {
        fontSize: 18,
        color: '#40334D',
        margin: 10,
    },

    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#7041B5',
        backgroundColor: 'white',
        fontSize: 18,
        margin: 10,
    },

    pickerContainer: {
        borderWidth: 1,
        borderColor: '#7041B5',
        backgroundColor: 'white',
        margin: 10,
    },

    buttonContainer: {
        margin: 10,
    },
});

export default Add;