import { Text, View, ImageBackground } from "react-native";
import Card from "@/components/card";
import { StatusBar } from "expo-status-bar";
import Palette from "@/components/palette";
import { useState } from "react";
import { data } from "@/data";

const colorDefault = "#85786C";

export default function Index() {
    const [colorCard, setColorCard] = useState(colorDefault);
    const [isDelete, setIsDelete] = useState(false)

    return (
        <ImageBackground
            source={require("@/assets/images/back.avif")}
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View style={{ flexDirection: "row", flexWrap: "wrap", width: "100%", justifyContent: "center" }}>
                {data.paroleCasali.map((parola, index) => (
                    <View key={index} style={{ width: "20%", padding: 5, alignItems: "center", gap:10 }}>
                        <Card text={parola} background={colorDefault} color={colorCard} isDelete={isDelete}/>
                    </View>
                ))}
            </View>
            <StatusBar hidden={true} />
            <View style={{ width: "90%", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <Palette setColorCard={setColorCard} setIsDelete={setIsDelete}/>
            </View>
        </ImageBackground>
    );
}
