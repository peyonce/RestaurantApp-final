import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Image 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import Button from '../../components/ui/button';
import { colors } from '../../constants/colors';

export default function CartScreen() {
  const cartItems = [
    {
      id: '1',
      name: 'Gold Class Burger',
      price: 29.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
      extras: ['Extra Gold Leaf', 'Truffle Fries'],
    },
    {
      id: '2',
      name: 'Black Truffle Pizza',
      price: 34.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      extras: ['Gold Flakes'],
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 4.99;
  const total = subtotal + deliveryFee;

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>YOUR CART</Text>
          <Text style={styles.subtitle}>{cartItems.length} items in cart</Text>
        </View>

        {/* Cart Items */}
        <View style={styles.cartItems}>
          {cartItems.map(item => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                </View>
                <Text style={styles.itemExtras}>
                  {item.extras.join(', ')}
                </Text>
                <View style={styles.itemActions}>
                  <View style={styles.quantityControls}>
                    <TouchableOpacity style={styles.quantityButton}>
                      <Ionicons name="remove" size={18} color={colors.black} />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity style={styles.quantityButton}>
                      <Ionicons name="add" size={18} color={colors.black} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.removeButton}>
                    <Ionicons name="trash-outline" size={20} color={colors.error} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Order Summary */}
        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>ORDER SUMMARY</Text>
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
          </View>
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
          </View>
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax</Text>
            <Text style={styles.summaryValue}>${(subtotal * 0.1).toFixed(2)}</Text>
          </View>
          
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>TOTAL</Text>
            <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <Button
            title="CONTINUE SHOPPING"
            variant="outline"
            style={styles.actionButton}
            onPress={() => {}}
          />
          <Link href="/checkout" asChild>
            <Button
              title="PROCEED TO CHECKOUT"
              variant="gold"
              style={styles.actionButton}
              onPress={() => {}}
            />
          </Link>
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
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 14,
    color: colors.gold,
    marginTop: 4,
    fontWeight: '500',
  },
  cartItems: {
    paddingHorizontal: 24,
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    flex: 1,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gold,
  },
  itemExtras: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 12,
    fontStyle: 'italic',
  },
  itemActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginHorizontal: 12,
  },
  removeButton: {
    padding: 8,
  },
  summary: {
    backgroundColor: colors.white,
    marginHorizontal: 24,
    marginTop: 20,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 16,
    letterSpacing: 1,
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
  actions: {
    paddingHorizontal: 24,
    marginTop: 30,
    marginBottom: 40,
    gap: 12,
  },
  actionButton: {
    width: '100%',
  },
});
