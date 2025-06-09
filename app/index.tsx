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

export default function Screen() {
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
          <Plus className="text-background mr-2" size={24} strokeWidth={2} />
          <Text>Criar Novo Reporte</Text>
        </Button>
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl">Reportes Recentes</Text>
          <Button variant={"ghost"} size={"icon"}>
            <List className="text-forebackground" size={32} strokeWidth={2} />
          </Button>
        </View>
        <View className="mb-2">
          <ReportCard
            title="Vazamento no banheiro"
            subtitle="Problema hidráulico"
            date="28/04/2025"
            location="Banheiro 2º andar"
            status="in_progress"
          />
          <ReportCard
            title="Vazamento no banheiro"
            subtitle="Problema hidráulico"
            date="28/04/2025"
            location="Banheiro 2º andar"
            status="in_progress"
          />
          <ReportCard
            title="Vazamento no banheiro"
            subtitle="Problema hidráulico"
            date="28/04/2025"
            location="Banheiro 2º andar"
            status="in_progress"
          />
          <ReportCard
            title="Vazamento no banheiro"
            subtitle="Problema hidráulico"
            date="28/04/2025"
            location="Banheiro 2º andar"
            status="in_progress"
          />
          <ReportCard
            title="Vazamento no banheiro"
            subtitle="Problema hidráulico"
            date="28/04/2025"
            location="Banheiro 2º andar"
            status="in_progress"
          />
          <ReportCard
            title="Vazamento no banheiro"
            subtitle="Problema hidráulico"
            date="28/04/2025"
            location="Banheiro 2º andar"
            status="in_progress"
          />
        </View>
        <Button
          className="flex-row gap-2 mb-6"
          onPress={() => router.navigate("/report-list")}
        >
          <ScrollText className="text-background" size={24} strokeWidth={2} />
          <Text>Ver Reportes</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
