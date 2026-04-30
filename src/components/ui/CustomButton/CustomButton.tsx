"use client";

import { colors } from "@/styles";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  display?: React.CSSProperties["display"];
  justifyContent?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  alignSelf?: React.CSSProperties["alignSelf"];
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  margin?: React.CSSProperties["margin"];
  padding?: React.CSSProperties["padding"];
  color?: React.CSSProperties["color"];
  fontSize?: React.CSSProperties["fontSize"];
  fontWeight?: React.CSSProperties["fontWeight"];
  backgroundColor?: React.CSSProperties["backgroundColor"];
  borderWidth?: React.CSSProperties["borderWidth"];
  borderColor?: React.CSSProperties["borderColor"];
  borderRadius?: React.CSSProperties["borderRadius"];
  cursor?: React.CSSProperties["cursor"];
  disabled?: boolean;
}

export const CustomButton = ({
  children,
  onClick,
  display = "flex",
  justifyContent = "center",
  alignItems = "center",
  alignSelf,
  width = "160px",
  height = "50px",
  margin,
  padding,
  color = colors.black,
  fontSize,
  fontWeight = "600",
  backgroundColor = colors.white,
  borderWidth,
  borderColor,
  borderRadius = "12px",
  cursor = "pointer",
  disabled,
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display,
        justifyContent,
        alignItems,
        alignSelf,
        flexShrink: 0,
        width,
        height,
        margin,
        padding,
        color,
        fontSize,
        fontWeight,
        backgroundColor,
        borderWidth,
        borderColor,
        borderRadius,
        cursor,
      }}
    >
      {children}
    </button>
  );
};
