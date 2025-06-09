import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";
import { HeaderTitle } from "~/components/HeaderTitle";
import { StatsCard } from "~/components/StatsCard";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Plus } from "~/lib/icons/Plus";
import { List } from "~/lib/icons/List";
import { ScrollText } from "~/lib/icons/ScrollText";
import { ReportCard } from "~/components/ReportCard";
import { router } from "expo-router";

const reports = [
  {
    id: "1",
    title: "Vazamento no banheiro",
    description: "Descrição do Card 1",
    date: "28/04/2025",
    location: "Banheiro 2º andar",
    status: "in_progress" as const,
  },
  {
    id: "2",
    title: "Lâmpada queimada",
    description: "Descrição do Card 2",
    date: "29/04/2025",
    location: "Sala de reuniões",
    status: "pending" as const,
  },
  {
    id: "3",
    title: "Ar-condicionado com defeito",
    description: "Descrição do Card 3",
    date: "30/04/2025",
    location: "Escritório 3",
    status: "completed" as const,
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView edges={["top"]}>
      <ScrollView className="h-full p-4">
        <HeaderTitle
          classname="my-4"
          title="Olá, João!"
          subtitle="Bem-vindo de volta ao SafeWork"
        />
        <View className="flex-row mb-2">
          <StatsCard number={5} description="Reportes" />
          <StatsCard number={3} description="Em andamento" />
          <StatsCard number={5} description="Resolvidos" />
        </View>
        <Button className="flex-row mb-4">
          <Plus className="text-secondary mr-2" size={24} strokeWidth={2} />
          <Text>Criar Novo Reporte</Text>
        </Button>
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl">Reportes Recentes</Text>
          <Button variant={"ghost"} size={"icon"}>
            <List className="text-primary" size={32} strokeWidth={2} />
          </Button>
        </View>
        <View className="mb-2">
          {reports.map((report) => (
            <ReportCard
              id={report.id}
              title={report.title}
              date={report.date}
              location={report.location}
              status={report.status}
            />
          ))}
        </View>
        <Button
          className="flex-row gap-2 mb-6"
          onPress={() => router.navigate("/report-list")}
        >
          <ScrollText className="text-secondary" size={24} strokeWidth={2} />
          <Text>Ver Reportes</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
