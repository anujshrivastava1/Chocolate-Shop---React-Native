import React from 'react';
import { StyleSheet, Text, View, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import { useCart } from '../context';

const ChocolateDetailScreen = ({ route }) => {
  const { name, url, image, stars, total_reviews, price_string, asin } = route.params.item;


  const { addItemToCart } = useCart();

  const handlePress = () => {
    addItemToCart(route.params.item);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.detailsContainer}>
          <Text style={styles.modelName}>{name}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.price}>{price_string}</Text>
            <View style={styles.ratingContainer}>
              <Rating readonly={true} imageSize={20} showRating={false} startingValue={stars} style={{marginTop:20}}/>
              <Text style={styles.reviews}>{total_reviews}</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => Linking.openURL(url)} style={styles.buyButton}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress} style={styles.cartButton}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#F5E3C7', // Light brown background color
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
    borderRadius: 20, // Rounded corners for the image
    borderColor: '#8B4513', // Dark brown border color
    borderWidth: 2, // Add a border to the image
  },
  detailsContainer: {
    alignItems: 'center',
  },
  modelName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#8B4513', // Dark brown color for the model name
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: "90%",
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  buyButton: {
    backgroundColor: '#8B4513', // Dark brown button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25, // Rounder button edges
    marginBottom: 10,
  },
  cartButton: {
    backgroundColor: '#D2691E', // Chocolate brown button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25, // Rounder button edges
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviews: {
    fontSize: 20,
    color: '#8B4513', // Dark brown color for reviews
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    color: '#A52A2A', // Saddle brown color for price
    fontWeight: "bold",
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    marginTop: 10,
    color: '#8B4513', // Dark brown color for rating
  },
});


export default ChocolateDetailScreen;
