import StackHeader from "@/lib/components/StackHeader";
import PageSkeleton from "@/lib/components/PageSkeleton";
import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { APP_NAME, APP_VERSION, GITHUB_REPO, THEME } from "@/lib/constants";

export default function info() {
  return (
    <PageSkeleton>
      <Stack.Screen
        options={{
          headerShown: true,
          header: ({ route }) => <StackHeader route={route.name} />,
        }}
      />

      <View className="px-4 py-8">
        <Text className="text-white">
          <Text className="font-bold">Stay organized and never miss a task!</Text>
          {"\n"} {"\n"} {"\n"}
          <Text>Version: </Text>
          <Text className="font-bold">{APP_VERSION}</Text>
          {"\n"} {"\n"}
          <Text>Github: </Text>
          <Link
            style={{ color: THEME.pallete.primary }}
            className="font-bold underline"
            href={GITHUB_REPO}
          >
            {GITHUB_REPO}
          </Link>
          {"\n"} {"\n"}
          <Text className="font-bold">{`© ${new Date().getFullYear()} ${APP_NAME}`}</Text>
          {"\n"} {"\n"}
        </Text>
      </View>
    </PageSkeleton>
  );
}
