import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import List from '../components/List';
import axios from 'axios';
import renderChocolates from '../components/renderChocolates';

const ChocolateScreen = (props) => {


  const [itemData, setItemData] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.BACKEND_URL}/api/products`);
        const info = response.data;
        setFilteredData(info);
        setItemData(info)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query == '') {
      setFilteredData(itemData)
    }
    else {
      const filtered = itemData.filter(chocolate =>
        chocolate.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
    
  };

  return (
    <View>
      <TextInput
        style={styles.search}
        placeholder="Search chocolates..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <List data={filteredData} navigation={props.navigation} renderElement={renderChocolates} />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    width: "85%",
    height: 40,
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#8B4513', // Dark brown color
    paddingHorizontal: 15,
    color: '#000', // Black text color
  },
});



export default ChocolateScreen;
