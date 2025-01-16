import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { darkStyles } from "../constants";

export default function PageSkeleton({ children }: PropsWithChildren) {
   return (
      <SafeAreaView
         style={{
            ...darkStyles.container,
            height: "100%",
         }}
      >
         {children}
      </SafeAreaView>
   );
}
