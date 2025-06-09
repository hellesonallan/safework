import { Image, ScrollView, View } from "react-native";
import { HeaderTitle } from "~/components/HeaderTitle";
import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { router, useLocalSearchParams } from "expo-router";
import { Button } from "~/components/ui/button";
import { SquarePen } from "~/lib/icons/SquarePen";
import { Trash } from "~/lib/icons/Trash";
import { Save } from "~/lib/icons/Save";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

type ReportDetailsParams = {
  id: string;
  title: string;
  status: "pending" | "in_progress" | "completed";
  location?: string;
  description?: string;
  date?: string;
};

export default function ReportDetailsScreen() {
  const params = useLocalSearchParams<ReportDetailsParams>();

  const statusConfig = {
    pending: {
      bgColor: "bg-yellow-500",
      text: "Pendente",
    },
    in_progress: {
      bgColor: "bg-blue-500",
      text: "Em andamento",
    },
    completed: {
      bgColor: "bg-green-500",
      text: "Concluído",
    },
  } as const;

  const handlePress = () => {
    router.push({
      pathname: `./edit-[id]`,
      params: {
        title: params.title,
        date: params.date,
        status: params.status,
        location: params.location,
        description: params.description,
      },
    });
  };

  const insets = useSafeAreaInsets();
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  const [value, setValue] = useState("");

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <ScrollView className="h-full p-4">
      <HeaderTitle
        classname="mb-4"
        title="Detalhes do Reporte"
        subtitle="Visualize os detalhes dos reportes"
      />
      <Image
        className="w-full h-64 rounded-lg mb-4"
        resizeMode="cover"
        source={{
          uri: "https://images.unsplash.com/photo-1632580801279-46b167db58bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
      <View className="mb-4">
        <Text className="text-lg mb-2">{params.title}</Text>
        <Select defaultValue={{ value: "in_progress", label: "Em Andamento" }}>
          <SelectTrigger className="w-[250px]">
            <SelectValue
              className="text-foreground text-sm native:text-lg"
              placeholder="Select a fruit"
            />
          </SelectTrigger>
          <SelectContent insets={contentInsets} className="w-[250px]">
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem label="Em Andamento" value="in_progress">
                Em andamento
              </SelectItem>
              <SelectItem label="Pendente" value="pending">
                Pendente
              </SelectItem>
              <SelectItem label="Concluído" value="completed">
                Concluído
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </View>
      <View className="mb-4">
        <Text className="text-lg mb-2">Localização</Text>
        <Input
          placeholder="Digite a localização..."
          value={value}
          onChangeText={onChangeText}
          aria-labelledby="location"
        />
      </View>
      <View className="mb-4">
        <Text className="text-lg mb-2">Descrição</Text>
        <Textarea
          placeholder="Digite uma breve descrição..."
          value={value}
          onChangeText={setValue}
          aria-labelledby="description"
        />
      </View>
      <View className="mb-4">
        <Text className="text-lg mb-2">Data do Reporte</Text>
        <Text className="font-light">{params.date}</Text>
      </View>
      <Button className="flex-row mb-4 mr-2 bg-blue-500" onPress={handlePress}>
        <Save className="text-secondary mr-2" size={24} strokeWidth={2} />
        <Text>Salvar</Text>
      </Button>
      <Button className="flex-row mb-4 mr-2" variant={"destructive"}>
        <Trash className="text-secondary mr-2" size={24} strokeWidth={2} />
        <Text>Cancelar</Text>
      </Button>
    </ScrollView>
  );
}
