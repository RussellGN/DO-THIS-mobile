import PageSkeleton from "@/lib/components/PageSkeleton";
import { Text } from "react-native";

export default function Index() {
   return (
      <PageSkeleton>
         <Text className="text-white">Todos</Text>
      </PageSkeleton>
   );
}
