import React from "react";
import { Image, View, StyleSheet } from "react-native";

interface Props {
  perfil: string;
}

const Avatar = ({ perfil }: Props) => {
  return (
    <View>
      {perfil == "con foto" ? (
        <Image
          style={styles.logo}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
          }}
        />
      ) : (
        <>AR</>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
  },
});

export { Avatar };
