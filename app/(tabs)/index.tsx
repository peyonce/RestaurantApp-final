import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import FoodCard from '../../components/food/food-card';
import Button from '../../components/ui/button';
import { colors } from '../../constants/colors';
import { foodCategories, foodItems } from '../../constants/food-data';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {/* Premium Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>G</Text>
            </View>
            <View>
              <Text style={styles.greeting}>WELCOME TO</Text>
              <Text style={styles.title}>GOLDEN PLATE</Text>
            </View>
          </View>
          <Link href="/cart" asChild>
            <TouchableOpacity style={styles.cartButton}>
              <Ionicons name="cart" size={28} color={colors.gold} />
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>3</Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0' }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>PREMIUM DINING EXPERIENCE</Text>
            <Text style={styles.heroSubtitle}>Black & Gold Collection</Text>
            <Button 
              title="EXPLORE MENU" 
              variant="gold"
              size="large"
              style={styles.heroButton}
              onPress={() => {}}
            />
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>CATEGORIES</Text>
            <Link href="/menu">
              <Text style={styles.seeAll}>VIEW ALL</Text>
            </Link>
          </View>
          <FlatList
            data={foodCategories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Link href={`/menu?category=${item.name.toLowerCase()}`} asChild>
                <TouchableOpacity style={styles.categoryCard}>
                  <View style={styles.categoryIconContainer}>
                    <Text style={styles.categoryIcon}>{item.icon}</Text>
                  </View>
                  <Text style={styles.categoryName}>{item.name}</Text>
                  <Text style={styles.categoryCount}>{item.count} items</Text>
                </TouchableOpacity>
              </Link>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Signature Dishes */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>SIGNATURE DISHES</Text>
            <Link href="/menu">
              <Text style={styles.seeAll}>VIEW ALL</Text>
            </Link>
          </View>
          <FlatList
            data={foodItems}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <FoodCard item={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.foodList}
          />
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>EXPERIENCE LUXURY DINING</Text>
          <Text style={styles.ctaSubtitle}>Book a table or order premium delivery</Text>
          <View style={styles.ctaButtons}>
            <Button 
              title="BOOK TABLE" 
              variant="black"
              style={styles.ctaButton}
              onPress={() => {}}
            />
            <Button 
              title="ORDER NOW" 
              variant="outline"
              style={styles.ctaButton}
              onPress={() => {}}
            />
          </View>
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
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: colors.white,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gold,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    shadowColor: colors.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  logoText: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 10,
    color: colors.gray,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    letterSpacing: 1,
  },
  cartButton: {
    position: 'relative',
    padding: 8,
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.gold,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.white,
  },
  cartBadgeText: {
    color: colors.black,
    fontSize: 12,
    fontWeight: 'bold',
  },
  heroSection: {
    height: 280,
    position: 'relative',
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.overlay,
    padding: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  heroTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gold,
    marginBottom: 6,
    letterSpacing: 1,
  },
  heroSubtitle: {
    fontSize: 14,
    color: colors.white,
    marginBottom: 16,
    fontWeight: '500',
  },
  heroButton: {
    alignSelf: 'flex-start',
  },
  section: {
    marginTop: 10,
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
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
  categoriesList: {
    paddingLeft: 24,
    paddingRight: 10,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 20,
    width: 100,
  },
  categoryIconContainer: {
    backgroundColor: colors.black,
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 2,
    borderColor: colors.gold,
  },
  categoryIcon: {
    fontSize: 28,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 4,
    textAlign: 'center',
  },
  categoryCount: {
    fontSize: 11,
    color: colors.gray,
    fontWeight: '500',
  },
  foodList: {
    paddingLeft: 24,
    paddingRight: 10,
  },
  ctaSection: {
    backgroundColor: colors.black,
    margin: 24,
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: colors.gold,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.gold,
    marginBottom: 8,
    letterSpacing: 1,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 14,
    color: colors.white,
    marginBottom: 24,
    textAlign: 'center',
    opacity: 0.8,
  },
  ctaButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  ctaButton: {
    minWidth: 140,
  },
});
