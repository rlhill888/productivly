import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable, Button } from 'react-native';
import { vw, vh, vmin, vmax } from '../styles/DimensionsFile';
import { StyleSheet } from 'react-native';

interface CompleteARoutineCompProps
{
    
}

export default function CompleteARoutineComp({

}:CompleteARoutineCompProps){

    const styles = StyleSheet.create({
        nameAndTitleRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'

        },

        imageCircle: {
            backgroundColor: 'white',
            width: 60,
            borderRadius: '100%' as any,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center'

        },

        titleRow: {
            backgroundColor: 'white',
            width: '70%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center'
        },

        whiteBox: {
            width: 'auto',
            backgroundColor: 'white',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center'

        },
        bottomButton: {
            backgroundColor: 'white',
            height: vw(20),
            width: vw(20),
            justifyContent: 'center',
            alignItems: 'center'
        },
        modalBackground: {
            backgroundColor: 'rgba(0, 0, 0, 0.664)',
            position: 'absolute',
            width: vw(100),
            height: vh(100),
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            justifyContent: 'center',
            alignItems: 'center'
        },
        


    })

    const [modalOpen, setModalOpen]= useState(false)
    const [contentShowing, setContentShowing]= useState(null)

    function renderModalContent(){
        if(contentShowing === 'description'){
            return(
                <Text>Description</Text>
            )
        }
        if(contentShowing === 'routine steps'){
            return(
                <Text>Routine Steps</Text>
            )
        }else{
            return(<></>)
        }
    }
    return (
        <View
        style={{
            height: '100%',
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: 'red',
        }}
        >
            {
                modalOpen && contentShowing ?

                <View style={styles.modalBackground}>
                <View style={{
                    height: vh(70),
                    width: vw(80),
                    backgroundColor: 'white'
                }}>
                    <Button title='x' onPress={()=>{ 
                        setContentShowing(null)
                        setModalOpen(false)
                        }}></Button>
                    {renderModalContent()}
                    
                </View>
            </View>

            :
            <></>

            }

            <SafeAreaView
            style={{
                justifyContent: 'space-evenly',
                height: '100%',
                position: 'relative'
            }}
            >
           <View style={styles.nameAndTitleRow}>
            <View style={styles.imageCircle}>
                <Text>
                    Routine Image
                </Text>
            </View>
            <View style={styles.titleRow}>
                <Text>
                    Routine Title
                </Text>
            </View>

           </View>

           <View onTouchEnd={(e)=>{ 
            setModalOpen(true)
            setContentShowing('routine steps' as any)
            }} style={styles.whiteBox}>
            <Text>
                All Routine Steps Sub Menu Button
            </Text>

           </View>
           <View
           style={{
            width: 'auto',
            justifyContent: 'center',
            alignItems: 'center'
           }}
           >
           <View style={{
            height: vh(25) as any,
            width: vh(25) as any,
            backgroundColor: 'white',
            borderRadius: '100%' as any,
            justifyContent: 'center',
            alignItems: 'center'
           }}>
            <Text>
                Current Step Name
            </Text>
            <Text>
                Current Step Timer
            </Text>
           </View>

           </View>

           

           <View
           onTouchEnd={(e)=>{ 
            setModalOpen(true)
            setContentShowing('description' as any)
            }}
           style={styles.whiteBox}>
            <Text>Description</Text>
           </View>

           <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 'auto',
           }}>
            <View style={styles.bottomButton}>
                <Text>Go back to previous step button</Text></View>
            <View style={styles.bottomButton}>
                <Text>Pause Timer</Text></View>
            <View style={styles.bottomButton}>
                <Text>Skip Button</Text></View>
            <View style={styles.bottomButton}>
                <Text>Go to Next Step Button</Text></View>

           </View>

            </SafeAreaView>
            
        </View>
    )

}