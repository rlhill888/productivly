import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

interface TestCompProps {

}

export default function TestComp({

}: TestCompProps) {

    return (
        <View >
            <SafeAreaView >
                <View >
                    <Text>
                        <Text> Test 1</Text>
                    </Text>

                </View>

            </SafeAreaView>

        </View>
    )

}