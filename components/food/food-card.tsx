import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { colors } from '../../constants/colors';
import { FoodItem } from '../../lib/types';

interface FoodCardProps {
  item: FoodItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  return (
    <Link href={`/menu/${item.id}`} asChild>
      <TouchableOpacity style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.priceTag}>
            <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{item.category.toUpperCase()}</Text>
            </View>
          </View>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
          <View style={styles.footer}>
            <View style={styles.rating}>
              <Ionicons name="star" size={14} color={colors.gold} />
              <Text style={styles.ratingText}>4.8</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add" size={22} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginRight: 20,
    width: 240,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 160,
  },
  priceTag: {
    position: 'absolute',
    bottom: -12,
    right: 16,
    backgroundColor: colors.gold,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: colors.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  priceText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  header: {
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 6,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.black + '10',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.gold,
  },
  categoryText: {
    fontSize: 10,
    color: colors.gold,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  description: {
    fontSize: 13,
    color: colors.gray,
    lineHeight: 18,
    marginBottom: 16,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black + '05',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: colors.black,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: colors.gold,
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
});
