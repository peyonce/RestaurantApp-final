import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator,
  ViewStyle,
  TextStyle 
} from 'react-native';
import { colors } from '../../constants/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'gold' | 'black' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  title,
  onPress,
  variant = 'gold',
  size = 'medium',
  loading = false,
  disabled = false,
  style,
  textStyle,
}: ButtonProps) {
  const getButtonStyle = () => {
    let baseStyle: ViewStyle = {};
    
    switch (variant) {
      case 'gold':
        baseStyle = { 
          backgroundColor: colors.gold,
        };
        break;
      case 'black':
        baseStyle = { 
          backgroundColor: colors.black,
        };
        break;
      case 'outline':
        baseStyle = { 
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: colors.gold,
        };
        break;
    }

    switch (size) {
      case 'small':
        baseStyle.paddingVertical = 10;
        baseStyle.paddingHorizontal = 20;
        break;
      case 'medium':
        baseStyle.paddingVertical = 14;
        baseStyle.paddingHorizontal = 28;
        break;
      case 'large':
        baseStyle.paddingVertical = 18;
        baseStyle.paddingHorizontal = 36;
        break;
    }

    return baseStyle;
  };

  const getTextStyle = () => {
    let baseStyle: TextStyle = { 
      fontSize: 16, 
      fontWeight: '700',
      letterSpacing: 0.5,
    };
    
    switch (size) {
      case 'small':
        baseStyle.fontSize = 14;
        break;
      case 'medium':
        baseStyle.fontSize = 16;
        break;
      case 'large':
        baseStyle.fontSize = 18;
        break;
    }

    switch (variant) {
      case 'gold':
      case 'black':
        baseStyle.color = colors.white;
        break;
      case 'outline':
        baseStyle.color = colors.gold;
        break;
    }

    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(),
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? colors.gold : colors.white} />
      ) : (
        <Text style={[styles.text, getTextStyle(), textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
