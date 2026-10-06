import { DefaultTheme, Stack, ThemeProvider } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />

        <Stack.Screen name="login" options={{ headerShown: false }} />

        <Stack.Screen name="register" options={{ headerShown: false }} />

        <Stack.Screen
          name="sign_up"
          // component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="product_detail"
          options={{ headerShown: false }}
        />        

      </Stack>
    </ThemeProvider>
  );
}
