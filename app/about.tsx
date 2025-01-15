import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function about() {
   return (
      <View>
         <Text>Welcome to the Todo App! This app helps you manage your tasks efficiently.</Text>
         <Text>With this app, you can add, edit, and delete tasks to stay organized and productive.</Text>
         <Link href="/">Home </Link>
      </View>
   );
}
