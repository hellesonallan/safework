import { ScrollView, View } from "react-native";
import { HeaderTitle } from "~/components/HeaderTitle";
import { ReportCard } from "~/components/ReportCard";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import { useNavigation } from "expo-router";

export default function ReportListScreen() {
  const [value, setValue] = useState("");
  const navigation = useNavigation();

  const onChangeText = (text: string) => {
    setValue(text);
  };

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
    {
      id: "4",
      title: "Porta com trinco quebrado",
      description:
        "Porta do escritório principal não está fechando corretamente",
      date: "01/05/2025",
      location: "Escritório principal",
      status: "pending" as const,
    },
    {
      id: "5",
      title: "Vazamento na cozinha",
      description: "Pia da cozinha está vazando água",
      date: "02/05/2025",
      location: "Cozinha",
      status: "in_progress" as const,
    },
    {
      id: "6",
      title: "Problema na rede Wi-Fi",
      description: "Sinal fraco na área de trabalho",
      date: "03/05/2025",
      location: "Área de trabalho aberta",
      status: "pending" as const,
    },
    {
      id: "7",
      title: "Cadeira com roda quebrada",
      description: "Cadeira da estação 5 com roda danificada",
      date: "04/05/2025",
      location: "Estação de trabalho 5",
      status: "completed" as const,
    },
    {
      id: "8",
      title: "Janela não fecha",
      description: "Janela do escritório 2 não está vedando corretamente",
      date: "05/05/2025",
      location: "Escritório 2",
      status: "in_progress" as const,
    },
    {
      id: "9",
      title: "Problema na impressora",
      description: "Impressora principal está com papel frequentemente preso",
      date: "06/05/2025",
      location: "Sala de impressão",
      status: "pending" as const,
    },
    {
      id: "10",
      title: "Limpeza necessária",
      description: "Área externa precisa de limpeza urgente",
      date: "07/05/2025",
      location: "Entrada principal",
      status: "completed" as const,
    },
  ];

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
        aria-labelledby="search"
      />
      <View className="mb-4">
        {reports.map((report) => (
          <ReportCard
            id={report.id}
            title={report.title}
            description={report.description}
            date={report.date}
            location={report.location}
            status={report.status}
          />
        ))}
      </View>
    </ScrollView>
  );
}
