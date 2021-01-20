import React from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-community/picker'

export default function UnitsPicker() {
        return (
                <View>
                        <Picker>
                                <Picker.Item label="Cº" value= 'metric'/>
                                <Picker.Item label="Fº" value= 'imperial'/>
                        </Picker>
                </View>
        )
}
