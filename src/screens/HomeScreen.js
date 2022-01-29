import React from "react";
import { SafeAreaView, StyleSheet, Text, Platform } from "react-native";

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Hey, It's HOme Screen.</Text>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.Os === "ios" ? 0 : 30,
		padding: 5,
	},
});
