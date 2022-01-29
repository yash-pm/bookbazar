import React from "react";
import { SafeAreaView, StyleSheet, Text, Platform } from "react-native";

const AccountScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>AccountScreen</Text>
		</SafeAreaView>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.Os === "ios" ? 0 : 30,
		padding: 5,
	},
});
