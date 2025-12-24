import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import { colors } from '../../constants/colors';
import { registerSchema } from '../../lib/validation';
import { useAuth } from '../../context/AuthContext';

type RegisterFormData = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterScreen() {
  const { register, isLoading } = useAuth();
  
  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const userData = {
        name: data.name,
        surname: data.surname,
        phone: data.phone,
        address: data.address,
      };
      
      await register(data.email, data.password, userData);
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Registration failed:', error);
      // You can show an error message here
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={colors.black} />
        </TouchableOpacity>

        {/* Logo & Title */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>G</Text>
          </View>
          <Text style={styles.title}>CREATE ACCOUNT</Text>
          <Text style={styles.subtitle}>Join Golden Plate premium experience</Text>
        </View>

        {/* Registration Form */}
        <View style={styles.form}>
          <View style={styles.nameRow}>
            <View style={styles.halfInput}>
              <Input
                control={control}
                name="name"
                label="FIRST NAME"
                placeholder="John"
                error={errors.name?.message}
              />
            </View>
            <View style={styles.halfInput}>
              <Input
                control={control}
                name="surname"
                label="LAST NAME"
                placeholder="Doe"
                error={errors.surname?.message}
              />
            </View>
          </View>

          <Input
            control={control}
            name="email"
            label="EMAIL ADDRESS"
            placeholder="john@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email?.message}
          />

          <Input
            control={control}
            name="phone"
            label="PHONE NUMBER"
            placeholder="+1 234 567 890"
            keyboardType="phone-pad"
            error={errors.phone?.message}
          />

          <Input
            control={control}
            name="address"
            label="ADDRESS"
            placeholder="123 Luxury Street, Gold City"
            multiline
            numberOfLines={2}
            error={errors.address?.message}
          />

          <Input
            control={control}
            name="password"
            label="PASSWORD"
            placeholder="Create a strong password"
            secureTextEntry
            error={errors.password?.message}
          />

          <Input
            control={control}
            name="confirmPassword"
            label="CONFIRM PASSWORD"
            placeholder="Confirm your password"
            secureTextEntry
            error={errors.confirmPassword?.message}
          />

          {/* Terms & Conditions */}
          <View style={styles.terms}>
            <Text style={styles.termsText}>
              By creating an account, you agree to our{' '}
              <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
              <Text style={styles.termsLink}>Privacy Policy</Text>
            </Text>
          </View>

          {/* Register Button */}
          <Button
            title="CREATE ACCOUNT"
            variant="gold"
            size="large"
            loading={isLoading}
            onPress={handleSubmit(onSubmit)}
            style={styles.registerButton}
          />
        </View>

        {/* Login Link */}
        <View style={styles.loginSection}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/auth/login')}>
            <Text style={styles.loginLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  backButton: {
    padding: 24,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.gold,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: colors.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  logoText: {
    color: colors.black,
    fontSize: 36,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 8,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
  },
  form: {
    paddingHorizontal: 24,
  },
  nameRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 10,
  },
  halfInput: {
    flex: 1,
  },
  terms: {
    marginBottom: 30,
  },
  termsText: {
    fontSize: 12,
    color: colors.gray,
    lineHeight: 18,
    textAlign: 'center',
  },
  termsLink: {
    color: colors.gold,
    fontWeight: '500',
  },
  registerButton: {
    marginBottom: 30,
  },
  loginSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    color: colors.gray,
  },
  loginLink: {
    fontSize: 14,
    color: colors.gold,
    fontWeight: 'bold',
  },
});
