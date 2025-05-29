import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

export default function Login() {
    return (
        <SafeAreaView>
            <View>
                <Text>Welcome to the SafeWork App</Text>
                <Text>This is a simple login application.</Text>
            </View>
        </SafeAreaView>
    );
}