import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";

const MainTabs = createMaterialBottomTabNavigator();
const DecideStack = createStackNavigator();

// Importing All Screens
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import StoreScreen from "./src/screens/StoreScreen";
import AccountScreen from "./src/screens/AccountScreen";
import SplashScreen from "./src/screens/SplashScreen";

export default function App() {
	const MainFlow = () => {
		return (
			<MainTabs.Navigator
				screenOptions={{
					headerShown: false,
				}}
				activeColor="#FC8019"
				inactiveColor="#ccc"
			>
				<MainTabs.Screen
					name="HomeScreen"
					component={HomeScreen}
					options={{
						tabBarLabel: "Home",
						tabBarIcon: ({ color }) => <Feather name="home" color={color} size={20} />,
						tabBarColor: "#fff",
					}}
				/>
				<MainTabs.Screen
					name="SearchScreen"
					component={SearchScreen}
					options={{
						tabBarLabel: "Search",
						tabBarIcon: ({ color }) => <Feather name="search" color={color} size={20} />,
						tabBarColor: "#fff",
					}}
				/>
				<MainTabs.Screen
					name="StoreScreen"
					component={StoreScreen}
					options={{
						tabBarLabel: "Store",
						tabBarIcon: ({ color }) => <Feather name="shopping-cart" color={color} size={20} />,
						tabBarColor: "#fff",
					}}
				/>
				<MainTabs.Screen
					name="AccountScreen"
					component={AccountScreen}
					options={{
						tabBarLabel: "Account",
						tabBarIcon: ({ color }) => <Feather name="user" color={color} size={20} />,
						tabBarColor: "#fff",
					}}
				/>
			</MainTabs.Navigator>
		);
	};

	return (
		<NavigationContainer>
			<DecideStack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<DecideStack.Screen name="SplashScreen" component={SplashScreen} />
				<DecideStack.Screen name="MainFlow" component={MainFlow} />
			</DecideStack.Navigator>
		</NavigationContainer>
	);
}
