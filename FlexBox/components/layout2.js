import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Layout2() {
 return (
   <>
    <View style={styles.container}>
                  {/* Barra Celular */}
                  <View
                    style={{
                      height: 26,
                      width: "100%",
                      backgroundColor: "black",
                    }}
                  ></View>
                  {/* Caixa Pai */}
                  <View style={styles.container}>
                    {/* NavBar */}
                    <View style={styles.navbar}></View>
                    {/* Primeira Caixa */}
                    <View style={styles.box1}>
                      <View
                        style={{
                          height: 95,
                          width: 95,
                          backgroundColor: "green",
                        }}
                      ></View>
                      <View
                        style={{
                          height: 35,
                          width: 95,
                          backgroundColor: "green",
                        }}
                      ></View>
                      <View
                        style={{
                          height: 95,
                          width: 95,
                          backgroundColor: "green",
                        }}
                      ></View>
                    </View>
                    {/* Segundo Caixa */}
                    <View style={styles.box2}>
                      {/* Parte 1 Segunda Caixa */}
                      <View style={{ alignItems: 'center', width: "100%"}}>
                        <View
                          style={{
                            height: 80,
                            backgroundColor: "blue",
                            width: "50%",
                          }}
                        ></View>
                      </View>
                      {/* Parte 2 Segunda Caixa */}
                      <View
                        style={{
                          height: 30,
                          backgroundColor: "purple",
                          width: "100%",
                        }}
                      ></View>
                    </View>
                    {/* Terceira Caixa */}
                    <View style={styles.box3}>
                        <View style={styles.box3Content}>
                            <View
                                style={{
                                height: 80,
                                width: 80,
                                backgroundColor: "green",
                                margin: 18,
                                }}
                            ></View>
                            <View
                                style={{
                                height: 80,
                                width: 80,
                                margin: 18,
                                }}
                            ></View>
                            <View
                                style={{
                                height: 80,
                                width: 80,
                                backgroundColor: "green",
                                margin: 18,
                                }}
                            ></View>
                        </View>
                        <View style={styles.box3Content}>
                            <View
                                style={{
                                height: 80,
                                width: 80,
                                backgroundColor: "green",
                                margin: 18,
                                }}
                            ></View>
                        </View>
                    </View>
                  </View>
                </View>
   </>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      },
      navbar: {
        width: "100%",
        height: 24,
        backgroundColor: "purple",
      },
      box1: {
        width: "100%",
        height: "30%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      box2: {
        width: "100%",
        height: "14%",
        flexDirection: "column",
      },
      box3: {
        width: "100%",
        height: 320,
        flexDirection: 'column',
        alignContent: "center",
        justifyContent: "space-around",    
      },
      box3Content:{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }
})