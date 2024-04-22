import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import ChocolateScreen from './screens/ChocolateScreen';
import ChocolateDetailScreen from './screens/ChocolateDetailScreen';
import CartScreen from './screens/CartScreen';
import CartIcon from './components/CartIcon';
import { CartProvider } from './context';
import { useCart } from './context';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ChocolateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chocolate" component={ChocolateScreen} />
      <Stack.Screen name="ChocolateDetail" component={ChocolateDetailScreen} />
    </Stack.Navigator>
  );
};

const DrawerContent = ({ navigation }) => {
  const { cartItems } = useCart();

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Chocolates">
        <Drawer.Screen
          name="Chocolate Shop"
          component={ChocolateStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="store" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Cart"
          component={CartScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="shopping-cart" size={size} color={color} />
            ),
            drawerLabel: `Cart (${cartItems.length})`,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default function App() {
  return (
    <CartProvider>
      <DrawerContent/>
    </CartProvider>
  );
}
