import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-basic-module-000' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type BasicModule000Props = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'BasicModule000View';

export const BasicModule000View =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<BasicModule000Props>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
