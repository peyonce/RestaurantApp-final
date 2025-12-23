import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Image 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import { colors } from '../../constants/colors';

export default function ProfileScreen() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    address: '123 Luxury Street, Gold City',
  });

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' }}
                style={styles.avatar}
              />
              <View style={styles.avatarBadge}>
                <Ionicons name="star" size={12} color={colors.black} />
              </View>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.userName}>John Doe</Text>
              <Text style={styles.userEmail}>Gold Member</Text>
              <View style={styles.membershipBadge}>
                <Ionicons name="diamond" size={12} color={colors.gold} />
                <Text style={styles.membershipText}>PREMIUM</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.actionIcon, { backgroundColor: colors.gold + '20' }]}>
              <Ionicons name="time-outline" size={24} color={colors.gold} />
            </View>
            <Text style={styles.actionText}>Orders</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.actionIcon, { backgroundColor: colors.black + '20' }]}>
              <Ionicons name="heart-outline" size={24} color={colors.black} />
            </View>
            <Text style={styles.actionText}>Favorites</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.actionIcon, { backgroundColor: colors.gold + '20' }]}>
              <Ionicons name="card-outline" size={24} color={colors.gold} />
            </View>
            <Text style={styles.actionText}>Payment</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.actionIcon, { backgroundColor: colors.black + '20' }]}>
              <Ionicons name="settings-outline" size={24} color={colors.black} />
            </View>
            <Text style={styles.actionText}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Form */}
        <View style={styles.formSection}>
          <View style={styles.formHeader}>
            <Text style={styles.formTitle}>PERSONAL INFORMATION</Text>
            <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
              <Text style={styles.editButton}>
                {isEditing ? 'SAVE' : 'EDIT'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.form}>
            <Input
              label="First Name"
              value={userData.name}
              editable={isEditing}
              onChangeText={(text) => setUserData({...userData, name: text})}
            />
            <Input
              label="Last Name"
              value={userData.surname}
              editable={isEditing}
              onChangeText={(text) => setUserData({...userData, surname: text})}
            />
            <Input
              label="Email"
              value={userData.email}
              editable={isEditing}
              keyboardType="email-address"
              onChangeText={(text) => setUserData({...userData, email: text})}
            />
            <Input
              label="Phone Number"
              value={userData.phone}
              editable={isEditing}
              keyboardType="phone-pad"
              onChangeText={(text) => setUserData({...userData, phone: text})}
            />
            <Input
              label="Address"
              value={userData.address}
              editable={isEditing}
              multiline
              numberOfLines={2}
              onChangeText={(text) => setUserData({...userData, address: text})}
            />
          </View>
        </View>

        {/* Recent Orders */}
        <View style={styles.ordersSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>RECENT ORDERS</Text>
            <TouchableOpacity onPress={() => router.push('/order-confirmation')}>
              <Text style={styles.seeAll}>VIEW ALL</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.ordersList}>
            <View style={styles.orderItem}>
              <View style={styles.orderInfo}>
                <Text style={styles.orderNumber}>ORDER #001</Text>
                <Text style={styles.orderDate}>Today, 14:30</Text>
              </View>
              <View style={styles.orderStatus}>
                <View style={[styles.statusBadge, { backgroundColor: colors.success + '20' }]}>
                  <Text style={[styles.statusText, { color: colors.success }]}>DELIVERED</Text>
                </View>
                <Text style={styles.orderTotal}>$64.98</Text>
              </View>
            </View>
            
            <View style={styles.orderItem}>
              <View style={styles.orderInfo}>
                <Text style={styles.orderNumber}>ORDER #002</Text>
                <Text style={styles.orderDate}>Yesterday, 19:15</Text>
              </View>
              <View style={styles.orderStatus}>
                <View style={[styles.statusBadge, { backgroundColor: colors.warning + '20' }]}>
                  <Text style={[styles.statusText, { color: colors.warning }]}>PREPARING</Text>
                </View>
                <Text style={styles.orderTotal}>$34.99</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Logout Button */}
        <View style={styles.logoutSection}>
          <Button
            title="LOGOUT"
            variant="black"
            onPress={() => router.push('/(auth)/login')}
          />
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
  header: {
    backgroundColor: colors.black,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: colors.gold,
  },
  avatarBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.gold,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.black,
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: colors.grayLight,
    marginBottom: 8,
  },
  membershipBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gold + '20',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  membershipText: {
    fontSize: 10,
    color: colors.gold,
    fontWeight: 'bold',
    marginLeft: 4,
    letterSpacing: 1,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    marginTop: -20,
    marginHorizontal: 24,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  actionItem: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.black,
  },
  formSection: {
    backgroundColor: colors.white,
    marginHorizontal: 24,
    marginTop: 30,
    padding: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  formHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    letterSpacing: 1,
  },
  editButton: {
    fontSize: 14,
    color: colors.gold,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  form: {
    marginTop: 10,
  },
  ordersSection: {
    marginHorizontal: 24,
    marginTop: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    letterSpacing: 1,
  },
  seeAll: {
    fontSize: 12,
    color: colors.gold,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  ordersList: {
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  orderInfo: {
    flex: 1,
  },
  orderNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 4,
  },
  orderDate: {
    fontSize: 12,
    color: colors.gray,
  },
  orderStatus: {
    alignItems: 'flex-end',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 6,
  },
  statusText: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gold,
  },
  logoutSection: {
    paddingHorizontal: 24,
    marginTop: 40,
    marginBottom: 40,
  },
});
