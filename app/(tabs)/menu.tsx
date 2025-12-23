import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  FlatList,
  SafeAreaView,
  TextInput 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import FoodCard from '../../components/food/food-card';
import { colors } from '../../constants/colors';
import { foodItems, foodCategories } from '../../constants/food-data';

export default function MenuScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredItems = foodItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>OUR MENU</Text>
            <Text style={styles.subtitle}>Premium Black & Gold Collection</Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={colors.gray} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search dishes..."
            placeholderTextColor={colors.grayLight}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color={colors.gray} />
            </TouchableOpacity>
          )}
        </View>

        {/* Categories Filter */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
          contentContainerStyle={styles.categoriesContainer}
        >
          <TouchableOpacity
            style={[
              styles.categoryFilter,
              selectedCategory === 'all' && styles.categoryFilterActive
            ]}
            onPress={() => setSelectedCategory('all')}
          >
            <Text style={[
              styles.categoryFilterText,
              selectedCategory === 'all' && styles.categoryFilterTextActive
            ]}>ALL</Text>
          </TouchableOpacity>
          
          {foodCategories.map(category => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryFilter,
                selectedCategory === category.name.toLowerCase() && styles.categoryFilterActive
              ]}
              onPress={() => setSelectedCategory(category.name.toLowerCase())}
            >
              <Text style={[
                styles.categoryFilterText,
                selectedCategory === category.name.toLowerCase() && styles.categoryFilterTextActive
              ]}>{category.name.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Menu Items Grid */}
        <View style={styles.menuGrid}>
          {filteredItems.length > 0 ? (
            <FlatList
              data={filteredItems}
              renderItem={({ item }) => <FoodCard item={item} />}
              keyExtractor={item => item.id}
              numColumns={2}
              columnWrapperStyle={styles.row}
              scrollEnabled={false}
            />
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="restaurant-outline" size={60} color={colors.gray} />
              <Text style={styles.emptyText}>No items found</Text>
              <Text style={styles.emptySubtext}>Try a different search or category</Text>
            </View>
          )}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 24,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.borderDark,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  categoriesScroll: {
    marginBottom: 20,
  },
  categoriesContainer: {
    paddingHorizontal: 24,
    gap: 10,
  },
  categoryFilter: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryFilterActive: {
    backgroundColor: colors.gold,
    borderColor: colors.gold,
  },
  categoryFilterText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.gray,
    letterSpacing: 1,
  },
  categoryFilterTextActive: {
    color: colors.black,
  },
  menuGrid: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.gray,
    marginTop: 8,
    textAlign: 'center',
  },
});
