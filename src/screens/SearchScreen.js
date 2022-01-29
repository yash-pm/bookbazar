import React from "react";
import { SafeAreaView, StyleSheet, Text, Platform } from "react-native";

const SearchScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>SearchScreen</Text>
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
