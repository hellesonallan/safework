import { ScrollView, View } from "react-native";
import { HeaderTitle } from "~/components/HeaderTitle";
import { ReportCard } from "~/components/ReportCard";
import { router } from "expo-router";
import { Input } from "~/components/ui/input";
import { useState } from "react";

export default function Screen() {
  const [value, setValue] = useState("");

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return (
    <ScrollView className="h-full p-4">
      <HeaderTitle
        classname="mb-4"
        title="Todos os Reportes"
        subtitle="Visualize aqui todos os seus reportes"
      />
      <Input
        className="mb-4"
        placeholder="Pesquise os reportes..."
        value={value}
        onChangeText={onChangeText}
        aria-labelledby="inputLabel"
        aria-errormessage="inputError"
      />
      <View className="mb-4">
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
    </ScrollView>
  );
}
