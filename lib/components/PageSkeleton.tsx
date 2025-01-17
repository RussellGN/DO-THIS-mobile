import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DARK_STYLES } from "../constants";

export default function PageSkeleton({ children }: PropsWithChildren) {
  return (
    <SafeAreaView
      style={{
        ...DARK_STYLES.container,
        height: "100%",
      }}
    >
      {children}
    </SafeAreaView>
  );
}
