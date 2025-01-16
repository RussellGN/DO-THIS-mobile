import StackHeader from "@/lib/components/StackHeader";
import PageSkeleton from "@/lib/components/PageSkeleton";
import { Text } from "react-native";
import { Stack } from "expo-router";

export default function about() {
   return (
      <PageSkeleton>
         <Stack.Screen
            options={{
               headerShown: true,
               header: ({ route }) => <StackHeader route={route.name} />,
            }}
         />
         <Text className="text-white">about</Text>
      </PageSkeleton>
   );
}
