import { Link, Tabs } from "expo-router";

export default function TabsLayout() {
   return (
      <Tabs
         screenOptions={{
            headerRight: function () {
               return <Link href="/about">About</Link>;
            },
         }}
      ></Tabs>
   );
}
