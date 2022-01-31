import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

//import Component
import Card from "./Card";
import Seperator from "./Seperator";

const BookList = ({ title, show, data }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Seperator />
			<FlatList
				data={data}
				horizontal={true}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return (
						<Card
							show={show}
							image={item.path}
							name={item.name}
							count={item.count}
							price={item.price}
							rating={item.rating}
						/>
					);
				}}
				showsHorizontalScrollIndicator={false}
			></FlatList>
			<Seperator />
			<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("StoreScreen")}>
				<Text>See More</Text>
				<EvilIcons name="chevron-right" color="#000" size={20} />
			</TouchableOpacity>
		</View>
	);
};

export default BookList;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		paddingHorizontal: 10,
		marginVertical: 5,
	},
	title: {
		marginVertical: 15,
	},
	button: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 15,
	},
});
