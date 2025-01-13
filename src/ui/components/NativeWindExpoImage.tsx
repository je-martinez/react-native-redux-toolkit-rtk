import { Image, ImageProps } from 'expo-image';

export function NativeWindExpoImage({ style, ...props }: ImageProps) {
  return <Image style={style} {...props} />;
}
