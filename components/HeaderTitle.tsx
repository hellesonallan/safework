import { View } from "react-native";
import { Text } from "./ui/text";

interface HeaderTitleProps {
  title: string;
  subtitle: string;
}

export function HeaderTitle({ title, subtitle }: HeaderTitleProps) {
  return (
    <View className="mb-4">
      <Text className="text-3xl font-bold">{title}</Text>
      <Text className="text-lg text-gray-500">{subtitle}</Text>
    </View>
  );
}
