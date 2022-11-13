import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";

export default function Layout1() {
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
                          backgroundColor: "orange",
                        }}
                      ></View>
                      <View
                        style={{
                          height: 35,
                          width: 150,
                          backgroundColor: "orange",
                        }}
                      ></View>
                    </View>
                    {/* Segundo Caixa */}
                    <View style={styles.box2}>
                      {/* Parte 1 Segunda Caixa */}
                      <View style={{ flexDirection: "row", width: "100%" }}>
                        <View
                          style={{
                            height: 80,
                            backgroundColor: "purple",
                            width: "50%",
                          }}
                        ></View>
                        <View
                          style={{
                            height: 80,
                            backgroundColor: "#59f",
                            width: "50%",
                          }}
                        ></View>
                      </View>
                      {/* Parte 2 Segunda Caixa */}
                      <View
                        style={{
                          height: 20,
                          backgroundColor: "#7FFFD4",
                          width: "100%",
                        }}
                      ></View>
                    </View>
                    {/* Terceira Caixa */}
                    <View style={styles.box3}>
                      <View
                        style={{
                          height: 80,
                          width: 80,
                          backgroundColor: "orange",
                          margin: 18,
                        }}
                      ></View>
                      <View
                        style={{
                          height: 80,
                          width: 80,
                          backgroundColor: "orange",
                          margin: 18,
                        }}
                      ></View>
                      <View
                        style={{
                          height: 80,
                          width: 80,
                          backgroundColor: "orange",
                          margin: 18,
                        }}
                      ></View>
                      <View
                        style={{
                          height: 80,
                          width: 80,
                          backgroundColor: "orange",
                          margin: 18,
                        }}
                      ></View>
                      <View
                        style={{
                          height: 80,
                          width: 80,
                          backgroundColor: "orange",
                          margin: 18,
                        }}
                      ></View>
                      <View
                        style={{
                          height: 80,
                          width: 80,
                          backgroundColor: "orange",
                          margin: 18,
                        }}
                      ></View>
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
      backgroundColor: "#7FFFD4",
    },
    box1: {
      width: "100%",
      height: "30%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    box2: {
      width: "100%",
      height: "14%",
      flexDirection: "column",
    },
    box3: {
      width: 100,
      height: 320,
      flexWrap: "wrap",
      alignContent: "center",
      justifyContent: "center",
    }
  });
  