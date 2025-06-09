import { Image, ScrollView, View } from "react-native";
import { HeaderTitle } from "~/components/HeaderTitle";
import { Badge } from "~/components/ui/badge";
import { Text } from "~/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { Button } from "~/components/ui/button";
import { SquarePen } from "~/lib/icons/SquarePen";

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
        <Badge className={`w-1/2 ${statusConfig[params.status].bgColor}`}>
          <Text>{statusConfig[params.status].text}</Text>
        </Badge>
      </View>
      <View className="mb-4">
        <Text className="text-lg mb-2">Localização</Text>
        <Text className="font-light">{params.location}</Text>
      </View>
      <View className="mb-4">
        <Text className="text-lg mb-2">Descrição</Text>
        <Text className="font-light">{params.description}</Text>
      </View>
      <View className="mb-4">
        <Text className="text-lg mb-2">Data do Reporte</Text>
        <Text className="font-light">{params.date}</Text>
      </View>
      <Button className="flex-row mb-4 mr-2">
        <SquarePen className="text-secondary mr-2" size={24} strokeWidth={2} />
        <Text>Editar</Text>
      </Button>
    </ScrollView>
  );
}
