import { View } from "react-native";
import { Text } from "./ui/text";

interface HeaderTitleProps {
  classname?: string;
  title: string;
  subtitle: string;
}

export function HeaderTitle({ title, subtitle, classname }: HeaderTitleProps) {
  return (
    <View className={`${classname}`}>
      <Text className="text-3xl font-bold">{title}</Text>
      <Text className="text-lg text-gray-500">{subtitle}</Text>
    </View>
  );
}
