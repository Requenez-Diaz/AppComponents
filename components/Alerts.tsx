import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Avatar } from "./Avatar";

interface Props {
  color: string;
  message: string;
  perfil: string;
}

const Alerts = ({ color, message, perfil }: Props) => {
  return (
    <View>
      <div style={color === "azul" ? styles.colorFondo : styles.colorFondo2}>
        <Avatar perfil={perfil} />
        <Text>El mensaje es: {message}</Text>
      </div>
    </View>
  );
};

export { Alerts };

const styles = StyleSheet.create({
  colorFondo: {
    backgroundColor: "blue",
    borderRadius: 8,
  },
  colorFondo2: {
    backgroundColor: "red",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
