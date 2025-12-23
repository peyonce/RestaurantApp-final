import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
  Image 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Button from '../../components/ui/button';
import { colors } from '../../constants/colors';

export default function OrderConfirmationScreen() {
  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Success Icon */}
        <View style={styles.successIcon}>
          <View style={styles.iconCircle}>
            <Ionicons name="checkmark" size={60} color={colors.white} />
          </View>
        </View>

        {/* Success Message */}
        <View style={styles.messageSection}>
          <Text style={styles.title}>ORDER CONFIRMED!</Text>
          <Text style={styles.subtitle}>Your premium order has been placed successfully</Text>
          
          <View style={styles.orderDetails}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Order Number</Text>
              <Text style={styles.detailValue}>#GP-2023-001</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Estimated Delivery</Text>
              <Text style={styles.detailValue}>30-45 minutes</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Total Amount</Text>
              <Text style={styles.detailValue}>$76.47</Text>
            </View>
          </View>
        </View>

        {/* Order Summary */}
        <View style={styles.summarySection}>
          <Text style={styles.summaryTitle}>ORDER SUMMARY</Text>
          
          <View style={styles.orderItems}>
            <View style={styles.orderItem}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd' }}
                style={styles.itemImage}
              />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>Gold Class Burger</Text>
                <Text style={styles.itemQuantity}>x1</Text>
              </View>
              <Text style={styles.itemPrice}>$29.99</Text>
            </View>
            
            <View style={styles.orderItem}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38' }}
                style={styles.itemImage}
              />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>Black Truffle Pizza</Text>
                <Text style={styles.itemQuantity}>x2</Text>
              </View>
              <Text style={styles.itemPrice}>$69.98</Text>
            </View>
          </View>

          <View style={styles.summaryTotal}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>TOTAL</Text>
              <Text style={styles.totalValue}>$99.97</Text>
            </View>
          </View>
        </View>

        {/* Delivery Info */}
        <View style={styles.deliverySection}>
          <View style={styles.deliveryHeader}>
            <Ionicons name="time" size={24} color={colors.gold} />
            <Text style={styles.deliveryTitle}>DELIVERY INFORMATION</Text>
          </View>
          
          <View style={styles.deliveryInfo}>
            <View style={styles.infoRow}>
              <Ionicons name="location" size={20} color={colors.gray} />
              <Text style={styles.infoText}>123 Luxury Street, Gold City</Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="person" size={20} color={colors.gray} />
              <Text style={styles.infoText}>John Doe</Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="call" size={20} color={colors.gray} />
              <Text style={styles.infoText}>+1 234 567 890</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionsSection}>
          <Button
            title="VIEW ORDER STATUS"
            variant="gold"
            size="large"
            onPress={() => router.push('/(tabs)/profile')}
            style={styles.actionButton}
          />
          
          <Button
            title="CONTINUE SHOPPING"
            variant="outline"
            onPress={() => router.push('/(tabs)/menu')}
            style={styles.actionButton}
          />
          
          <TouchableOpacity style={styles.supportLink}>
            <Ionicons name="chatbubble-ellipses" size={20} color={colors.gold} />
            <Text style={styles.supportText}>Need help? Contact Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
  successIcon: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.success,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.success,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 10,
  },
  messageSection: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 12,
    letterSpacing: 1,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 24,
  },
  orderDetails: {
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 20,
    width: '100%',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.border,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  detailLabel: {
    fontSize: 14,
    color: colors.gray,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  summarySection: {
    backgroundColor: colors.white,
    marginHorizontal: 24,
    marginBottom: 24,
    padding: 24,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.border,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 20,
    letterSpacing: 1,
  },
  orderItems: {
    marginBottom: 20,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
    marginBottom: 4,
  },
  itemQuantity: {
    fontSize: 14,
    color: colors.gray,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gold,
  },
  summaryTotal: {
    paddingTop: 16,
    borderTopWidth: 2,
    borderTopColor: colors.gold,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  totalValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.gold,
  },
  deliverySection: {
    backgroundColor: colors.white,
    marginHorizontal: 24,
    marginBottom: 24,
    padding: 24,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: colors.border,
  },
  deliveryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  deliveryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginLeft: 10,
    letterSpacing: 1,
  },
  deliveryInfo: {
    gap: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    color: colors.gray,
    marginLeft: 12,
  },
  actionsSection: {
    paddingHorizontal: 24,
    gap: 16,
  },
  actionButton: {
    width: '100%',
  },
  supportLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  supportText: {
    fontSize: 14,
    color: colors.gold,
    fontWeight: '500',
    marginLeft: 8,
  },
});
