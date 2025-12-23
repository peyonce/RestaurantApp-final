import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  TextInput,
  Switch 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import { colors } from '../../constants/colors';

export default function CheckoutScreen() {
  const [useDifferentAddress, setUseDifferentAddress] = React.useState(false);
  const [selectedPayment, setSelectedPayment] = React.useState('card');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={colors.black} />
          </TouchableOpacity>
          <Text style={styles.title}>CHECKOUT</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Delivery Address */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="location-outline" size={24} color={colors.gold} />
            <Text style={styles.sectionTitle}>DELIVERY ADDRESS</Text>
          </View>
          
          <View style={styles.addressCard}>
            <Text style={styles.addressName}>John Doe</Text>
            <Text style={styles.addressText}>123 Luxury Street, Gold City</Text>
            <Text style={styles.addressPhone}>+1 234 567 890</Text>
          </View>

          <View style={styles.differentAddress}>
            <Text style={styles.differentAddressText}>Use different delivery address</Text>
            <Switch
              value={useDifferentAddress}
              onValueChange={setUseDifferentAddress}
              trackColor={{ false: colors.gray, true: colors.gold }}
              thumbColor={colors.white}
            />
          </View>

          {useDifferentAddress && (
            <View style={styles.addressForm}>
              <Input label="Full Name" placeholder="Enter full name" />
              <Input label="Phone Number" placeholder="Enter phone number" keyboardType="phone-pad" />
              <Input label="Address" placeholder="Enter full address" multiline numberOfLines={2} />
              <Input label="City" placeholder="Enter city" />
              <View style={styles.row}>
                <View style={styles.halfInput}>
                  <Input label="State" placeholder="State" />
                </View>
                <View style={styles.halfInput}>
                  <Input label="ZIP Code" placeholder="ZIP Code" />
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="card-outline" size={24} color={colors.gold} />
            <Text style={styles.sectionTitle}>PAYMENT METHOD</Text>
          </View>

          <View style={styles.paymentMethods}>
            <TouchableOpacity
              style={[
                styles.paymentMethod,
                selectedPayment === 'card' && styles.paymentMethodActive
              ]}
              onPress={() => setSelectedPayment('card')}
            >
              <View style={styles.paymentMethodHeader}>
                <Ionicons name="card" size={20} color={selectedPayment === 'card' ? colors.gold : colors.gray} />
                <Text style={[
                  styles.paymentMethodTitle,
                  selectedPayment === 'card' && styles.paymentMethodTitleActive
                ]}>Credit/Debit Card</Text>
              </View>
              <Text style={styles.paymentMethodText}>**** **** **** 1234</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.paymentMethod,
                selectedPayment === 'cash' && styles.paymentMethodActive
              ]}
              onPress={() => setSelectedPayment('cash')}
            >
              <View style={styles.paymentMethodHeader}>
                <Ionicons name="cash" size={20} color={selectedPayment === 'cash' ? colors.gold : colors.gray} />
                <Text style={[
                  styles.paymentMethodTitle,
                  selectedPayment === 'cash' && styles.paymentMethodTitleActive
                ]}>Cash on Delivery</Text>
              </View>
              <Text style={styles.paymentMethodText}>Pay when you receive your order</Text>
            </TouchableOpacity>
          </View>

          {selectedPayment === 'card' && (
            <View style={styles.cardForm}>
              <Input label="Card Number" placeholder="1234 5678 9012 3456" />
              <Input label="Cardholder Name" placeholder="John Doe" />
              <View style={styles.row}>
                <View style={styles.halfInput}>
                  <Input label="Expiry Date" placeholder="MM/YY" />
                </View>
                <View style={styles.halfInput}>
                  <Input label="CVV" placeholder="123" secureTextEntry />
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Order Summary */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="receipt-outline" size={24} color={colors.gold} />
            <Text style={styles.sectionTitle}>ORDER SUMMARY</Text>
          </View>

          <View style={styles.orderSummary}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>$64.98</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>$4.99</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Tax</Text>
              <Text style={styles.summaryValue}>$6.50</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>TOTAL</Text>
              <Text style={styles.totalValue}>$76.47</Text>
            </View>
          </View>
        </View>

        {/* Place Order Button */}
        <View style={styles.placeOrderSection}>
          <Button
            title="PLACE ORDER"
            variant="gold"
            size="large"
            onPress={() => router.push('/order-confirmation')}
            style={styles.placeOrderButton}
          />
          <Text style={styles.termsText}>
            By placing your order, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    letterSpacing: 1,
  },
  section: {
    backgroundColor: colors.white,
    marginHorizontal: 24,
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginLeft: 10,
    letterSpacing: 1,
  },
  addressCard: {
    backgroundColor: colors.backgroundLight,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  addressName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 4,
  },
  addressText: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 4,
  },
  addressPhone: {
    fontSize: 14,
    color: colors.gray,
  },
  differentAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  differentAddressText: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '500',
  },
  addressForm: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  halfInput: {
    flex: 1,
  },
  paymentMethods: {
    gap: 12,
  },
  paymentMethod: {
    backgroundColor: colors.backgroundLight,
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  paymentMethodActive: {
    borderColor: colors.gold,
    backgroundColor: colors.gold + '10',
  },
  paymentMethodHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  paymentMethodTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.gray,
    marginLeft: 10,
  },
  paymentMethodTitleActive: {
    color: colors.gold,
  },
  paymentMethodText: {
    fontSize: 12,
    color: colors.gray,
  },
  cardForm: {
    marginTop: 20,
  },
  orderSummary: {
    marginTop: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: colors.gray,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.black,
  },
  totalRow: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 2,
    borderTopColor: colors.gold,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  totalValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.gold,
  },
  placeOrderSection: {
    paddingHorizontal: 24,
    marginTop: 30,
    marginBottom: 40,
    alignItems: 'center',
  },
  placeOrderButton: {
    width: '100%',
    marginBottom: 16,
  },
  termsText: {
    fontSize: 12,
    color: colors.gray,
    textAlign: 'center',
    lineHeight: 16,
  },
});
