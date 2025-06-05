import { Text } from "./ui/text";
import { Badge } from "./ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";

type Status = "pending" | "in_progress" | "completed";

interface ReportCardProps {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  status: Status; // Nova prop para controlar o status
}

export default function ReportCard({
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

  return (
    <Card className="flex-row justify-between items-center mb-2">
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
