import { ScrollView, View } from "react-native";
import { HeaderTitle } from "~/components/HeaderTitle";
import { ReportCard } from "~/components/ReportCard";
import { router } from "expo-router";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { Text } from "~/components/ui/text";

export default function Screen() {
  const [value, setValue] = useState("");

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <ScrollView className="h-full p-4">
      <HeaderTitle
        classname="mb-4"
        title="Meu Perfil"
        subtitle="Visualize seu perfil e suas configurações"
      />
      <View className="flex-row items-center">
        <Avatar className="w-24 h-24 mr-4" alt="Avatar">
          <AvatarImage source={require("~/assets/images/avatar.png")} />
          <AvatarFallback>
            <Text>JS</Text>
          </AvatarFallback>
        </Avatar>
        <View>
          <Text className="font-bold text-2xl">João Silva</Text>
          <Text className="font-light">joao.silva@mail.com</Text>
          <Text className="font-light">Funcionário - Setor Administrativo</Text>
        </View>
      </View>
    </ScrollView>
  );
}
