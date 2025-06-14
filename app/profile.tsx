import { ScrollView, View } from "react-native";
import { HeaderTitle } from "~/components/HeaderTitle";
import { router } from "expo-router";
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Bell } from "~/lib/icons/Bell";
import { Contrast } from "~/lib/icons/Contrast";
import { ScrollText } from "~/lib/icons/ScrollText";
import { LogOut } from "~/lib/icons/LogOut";
import { Info } from "~/lib/icons/Info";
import { MessageSquareWarning } from "~/lib/icons/MessageSquareWarning";
import { useColorScheme } from "~/lib/useColorScheme";
import { setAndroidNavigationBar } from "~/lib/android-navigation-bar";

export default function ProfileScreen() {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  function toggleColorScheme() {
    const newTheme = isDarkColorScheme ? "light" : "dark";
    setColorScheme(newTheme);
    setAndroidNavigationBar(newTheme);
  }

  return (
    <ScrollView className="h-full p-4">
      <HeaderTitle
        classname="mb-4"
        title="Meu Perfil"
        subtitle="Visualize seu perfil e suas configurações"
      />
      <View className="flex-row items-center mb-4">
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
      <View>
        <Button
          className="flex-row gap-2 mb-4 justify-start"
          variant={"outline"}
        >
          <Bell className="text-primary" size={24} strokeWidth={2} />
          <Text>Notificações</Text>
        </Button>
        <Separator className="mb-4" />
        <Button
          className="flex-row gap-2 mb-4 justify-start"
          variant={"outline"}
          onPress={toggleColorScheme}
        >
          <Contrast className="text-primary" size={24} strokeWidth={2} />
          <Text>Modo Alto Contraste</Text>
        </Button>
        <Separator className="mb-4" />
        <Button
          className="flex-row gap-2 mb-4 justify-start"
          variant={"outline"}
        >
          <Info className="text-primary" size={24} strokeWidth={2} />
          <Text>Suporte Online</Text>
        </Button>
        <Separator className="mb-4" />
        <Button
          className="flex-row gap-2 mb-4 justify-start"
          variant={"outline"}
        >
          <MessageSquareWarning
            className="text-primary"
            size={24}
            strokeWidth={2}
          />
          <Text>Sobre o SafeWork</Text>
        </Button>
        <Separator className="mb-4" />
        <Button
          className="flex-row gap-2 mb-4 justify-start"
          variant={"outline"}
        >
          <ScrollText className="text-primary" size={24} strokeWidth={2} />
          <Text>Termos de Uso</Text>
        </Button>
        <Separator className="mb-4" />
        <Button
          className="flex-row gap-2 mb-4 justify-start"
          variant={"outline"}
        >
          <LogOut className="text-primary" size={24} strokeWidth={2} />
          <Text>Sair</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
