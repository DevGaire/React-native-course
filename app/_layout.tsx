import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerTitleAlign:'center'}}>
      <Stack.Screen name="index"  />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}
