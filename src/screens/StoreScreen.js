import React from "react";
import { SafeAreaView, StyleSheet, Text, Platform } from "react-native";

const StoreScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>StoreScreen</Text>
		</SafeAreaView>
	);
};

export default StoreScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.Os === "ios" ? 0 : 30,
		padding: 5,
	},
});
