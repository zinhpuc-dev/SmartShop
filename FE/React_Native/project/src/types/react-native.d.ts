// Minimal module declarations to silence TS errors in this environment.
// In a real project prefer installing proper types (or use the ones shipped with React Native / Expo).

declare module 'react-native' {
  export type ImageRequireSource = number;

  export type ColorSchemeName = 'light' | 'dark' | 'unspecified';

  export interface ViewProps {
    style?: any;
    children?: any;
    [key: string]: any;
  }

  export interface TextProps extends ViewProps {
    [key: string]: any;
  }

  export const Platform: {
    OS: 'ios' | 'android' | 'web' | 'windows' | 'macos' | 'default';
    select: <T extends Record<string, any>>(values: T) => any;
  };

  export const Dimensions: {
    get: (key: 'window' | 'screen') => { width: number; height: number };
  };

  export const Image: any;
  export const ImageBackground: any;
  export const KeyboardAvoidingView: any;
  export const Pressable: any;
  export const ScrollView: any;
  export const StyleSheet: {
    create: <T extends Record<string, any>>(styles: T) => T;
    absoluteFillObject: { [key: string]: any };
    absoluteFill: { [key: string]: any };
  };
  export const Text: any;
  export const TextInput: any;
  export const View: any;
  export const useWindowDimensions: any;
  export const useColorScheme: () => ColorSchemeName;
  const _default: any;
  export default _default;
}

declare module '@expo/vector-icons' {
  export const Ionicons: any;
  const _default: any;
  export default _default;
}
