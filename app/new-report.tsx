import { ScrollView, View } from "react-native";
import { HeaderTitle } from "~/components/HeaderTitle";
import { router } from "expo-router";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Images } from "~/lib/icons/Images";
import { Button } from "~/components/ui/button";
import { Plus } from "~/lib/icons/Plus";
import { Paperclip } from "~/lib/icons/PaperClip";
import { Trash } from "~/lib/icons/Trash";
import { Text } from "~/components/ui/text";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";

export default function Screen() {
  const [value, setValue] = useState("");

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <ScrollView className="h-full p-4">
      <HeaderTitle
        classname="mb-4"
        title="Criar Novo Reporte"
        subtitle="Crie um novo reporte preenchendo o formulário"
      />
      <View className="mb-4">
        <Label className="mb-2" nativeID="title">
          Título *
        </Label>
        <Input
          placeholder="Digite o título do seu reporte..."
          value={value}
          onChangeText={onChangeText}
          aria-labelledby="title"
        />
      </View>
      <View className="mb-4">
        <Label className="mb-2" nativeID="location">
          Localização *
        </Label>
        <Input
          placeholder="Digite a localização..."
          value={value}
          onChangeText={onChangeText}
          aria-labelledby="location"
        />
      </View>
      <View className="mb-4">
        <Label className="mb-2" nativeID="description">
          Descrição *
        </Label>
        <Textarea
          placeholder="Digite uma breve descrição..."
          value={value}
          onChangeText={setValue}
          aria-labelledby="description"
        />
      </View>
      <View className="mb-4">
        <Label className="mb-2" nativeID="description">
          Adicionar Foto (opcional)
        </Label>
        <View className="flex-row items-center">
          <Button className="flex-row mr-2" variant={"outline"}>
            <Paperclip
              className="text-forebackground mr-2"
              size={24}
              strokeWidth={2}
            />
            <Text>Adicionar Imagem</Text>
          </Button>
          <Text>Nenhum arquivo escolhido</Text>
        </View>
      </View>
      <View className="mb-4">
        <View className="mb-2">
          <Text className="mb-1">imagem1.png</Text>
          <Progress value={33} />
        </View>
        <View className="mb-2">
          <Text className="mb-1">imagem2.png</Text>
          <Progress value={66} />
        </View>
        <View className="mb-2">
          <Text className="mb-1">imagem2.png</Text>
          <Progress value={100} />
        </View>
      </View>
      <View className="mb-4">
        <Button className="flex-row mb-4 mr-2">
          <Plus className="text-background mr-2" size={24} strokeWidth={2} />
          <Text>Criar</Text>
        </Button>
        <Button className="flex-row mb-4 mr-2" variant={"destructive"}>
          <Trash className="text-background mr-2" size={24} strokeWidth={2} />
          <Text>Cancelar</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
