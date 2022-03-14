import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";

const DrawerSection = (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<DrawerContentScrollView {...props}>
				<View>
					<Drawer.Section>
						<DrawerItem
							label="Home"
							// icon={() => <Feather style={styles.icon} name="menu" color="#000" size={24} />}
							onPress={() => {
								props.navigation.navigate("HomeScreen");
							}}
						></DrawerItem>
					</Drawer.Section>
					<Drawer.Section>
						<DrawerItem label="Search">
							<Feather style={styles.icon} name="menu" color="#000" size={24} />
						</DrawerItem>
						<DrawerItem label="Store">
							<Feather style={styles.icon} name="menu" color="#000" size={24} />
						</DrawerItem>
						<DrawerItem label="Account">
							<Feather style={styles.icon} name="menu" color="#000" size={24} />
						</DrawerItem>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
		</SafeAreaView>
	);
};

export default DrawerSection;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Platform.Os === "ios" ? 0 : 50,
		zIndex: 10,
	},
});
