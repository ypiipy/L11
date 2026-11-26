import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
} from 'react-native';
import {datasource} from './Data.js';

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key);

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>
                Edit Letter
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

            <View style={styles.buttonRow}>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Save"
                        color="#7041B5"
                        onPress={() => {
                            let indexnum = 1;

                            if (route.params.type === 'Vowels') {
                                indexnum = 0;
                            }

                            datasource[indexnum].data[
                                route.params.index
                                ].key = letter;

                            navigation.navigate('Home');
                        }}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Delete"
                        color="#C0392B"
                        onPress={() => {
                            Alert.alert(
                                'Delete Letter',
                                'Are you sure you want to delete this letter?',
                                [
                                    {
                                        text: 'No',
                                        style: 'cancel',
                                    },
                                    {
                                        text: 'Yes',
                                        onPress: () => {
                                            let indexnum = 1;

                                            if (
                                                route.params.type ===
                                                'Vowels'
                                            ) {
                                                indexnum = 0;
                                            }

                                            datasource[indexnum].data.splice(
                                                route.params.index,
                                                1
                                            );

                                            navigation.navigate('Home');
                                        },
                                    },
                                ]
                            );
                        }}
                    />
                </View>
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

    buttonRow: {
        flexDirection: 'row',
        marginTop: 10,
    },

    buttonContainer: {
        flex: 1,
        margin: 10,
    },
});

export default Edit;