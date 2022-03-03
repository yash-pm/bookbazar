import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, Platform } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
	useEffect(() => {
		setTimeout(() => {}, 2000);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<SearchBar />
		</SafeAreaView>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.Os === "ios" ? 0 : 30,
		padding: 5,
	},
});
