import React from "react";
import { View, Text, Button, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 120 }}>Mesa</Text>
        <Image
          style={{ height: 400, width: 400 }}
          resizeMode="contain"
          source={require("../../../assets/imgs/logo.png")}
        />
      </View>

      <View
        style={{
          backgroundColor: "#D9D9D9",
          padding: 40,
          justifyContent: "center",
          height: "30%",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <Button title="Entrar" onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  );
}
