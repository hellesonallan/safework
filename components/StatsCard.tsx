import { View } from "react-native";
import { Text } from "~/components/ui/text";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface StatsCardProps {
  number: number;
  description: string;
}

export function StatsCard({ number, description }: StatsCardProps) {
  return (
    <Card className="w-1/3 max-w-sm py-2 mb-4 justify-center items-center">
      <Text className="text-2xl font-bold">{number}</Text>
      <Text className="text-gray-500">{description}</Text>
    </Card>
  );
}
