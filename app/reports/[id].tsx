import { ScrollView, View } from "react-native";
import { HeaderTitle } from "~/components/HeaderTitle";
import { ReportCard } from "~/components/ReportCard";
import { router } from "expo-router";
import { Input } from "~/components/ui/input";
import { useState } from "react";
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
        title="Todos os Reportes"
        subtitle="Visualize aqui todos os seus reportes"
      />
      <Text></Text>
    </ScrollView>
  );
}
