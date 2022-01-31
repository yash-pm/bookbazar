import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Feather from "react-native-vector-icons/Feather";

const SearchBar = ({ SearchText }) => {
	const [search, setSearch] = useState("");
	return (
		<View style={styles.container}>
			<Feather style={styles.icon} name="search" color="#000" size={20} />
			<TextInput
				style={styles.input}
				placeholder="Search.."
				autoCapitalize="none"
				autoCorrect={false}
				value={search}
				onChangeText={(val) => setSearch(val)}
			/>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	icon: {
		margin: 5,
	},
	input: {
		fontSize: 16,
		width: "100%",
	},
	container: {
		flexDirection: "row",
		padding: 10,
		margin: 10,
		backgroundColor: "#ddd",
		borderRadius: 10,
	},
});
