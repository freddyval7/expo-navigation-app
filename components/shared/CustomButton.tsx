import { Pressable, type PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";

  variant?: "contained" | "text-only";
}

const CustomButton = ({
  children,
  color = "primary",
  onPress,
  onLongPress,
  variant = "contained",
  className,
}: Props) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  const textColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  }[color];

  if (variant === "text-only") {
    return (
      <Pressable
        className={`p-3 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text className={`${textColor} text-center font-work-medium`}>
          {children}
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      className={`p-3 rounded-md ${btnColor} ${className} active:opacity-90 font-work-medium`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
