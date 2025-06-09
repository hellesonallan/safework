import { Text } from "./ui/text";
import { Badge } from "./ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { router } from "expo-router";

type Status = "pending" | "in_progress" | "completed";

interface ReportCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  status: Status;
}

export function ReportCard({
  id,
  title,
  date,
  location,
  status,
}: ReportCardProps) {
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
  };

  const handlePress = () => {
    router.push({
      pathname: "/reports/[id]",
      params: { id, title, status },
    });
  };

  return (
    <Card
      className="flex-row justify-between items-center mb-2"
      onTouchEnd={handlePress}
    >
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardHeader>
        <Badge className={statusConfig[status].bgColor}>
          <Text>{statusConfig[status].text}</Text>
        </Badge>
        <CardDescription>{location}</CardDescription>
      </CardHeader>
    </Card>
  );
}
