import React from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  StyleSheet, 
  TextInputProps 
} from 'react-native';
import { colors } from '../../constants/colors';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

interface InputProps<T extends FieldValues> extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: any;
  control?: Control<T>;
  name: Path<T>;
}

export default function Input<T extends FieldValues>({
  label,
  error,
  containerStyle,
  control,
  name,
  ...props
}: InputProps<T>) {
  if (control) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={[styles.container, containerStyle]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
              style={[
                styles.input,
                error && styles.inputError,
                props.editable === false && styles.inputDisabled,
              ]}
              placeholderTextColor={colors.grayLight}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              {...props}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
          </View>
        )}
      />
    );
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          props.editable === false && styles.inputDisabled,
        ]}
        placeholderTextColor={colors.grayLight}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textGold,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.borderDark,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.white,
    fontWeight: '500',
  },
  inputError: {
    borderColor: colors.error,
  },
  inputDisabled: {
    backgroundColor: colors.whiteGray,
    color: colors.gray,
  },
  errorText: {
    fontSize: 12,
    color: colors.error,
    marginTop: 6,
    fontWeight: '500',
  },
});
