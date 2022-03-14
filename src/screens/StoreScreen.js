import React from "react";
import { SafeAreaView, StyleSheet, Text, Platform, TouchableOpacity, ScrollView, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

//Commponent
import BookList from "../components/BookList";
import DrawerCom from "../components/Drawer";

import {
	atomic_habbits,
	attitude_is_everything,
	psychology_of_money,
	rich_dad_poor_dad,
	start_wth_why,
	the_monk_who_sold_his_ferrari,
} from "../resources/images/recommanded";
import {
	the_alchemist,
	the_cather,
	the_secret,
	the_world_as_i_see_it,
	tresure_island,
	wings_of_fire,
} from "../resources/images/popular_this_month";
import {
	how_to_be_perfect,
	red_handed,
	the_final_fighter,
	the_lord_of_easy_money,
	the_man_behind_the_curtain,
	undermoney,
} from "../resources/images/new_releases";
import {
	the_murder_club,
	people_like_her,
	red_rising,
	the_guest_list,
	the_serial_killer,
	the_silent_patient,
} from "../resources/images/top_page_turners";

const recommended_data = [
	{
		id: "1",
		path: atomic_habbits,
		name: "Atomic Habbits",
		count: 327,
		rating: 4.0,
		price: 499,
	},
	{
		id: "2",
		path: attitude_is_everything,
		name: "Attitude Is Everything",
		count: 987,
		rating: 4.0,
		price: 399,
	},
	{
		id: "3",
		path: psychology_of_money,
		name: "The Psychology Of Money",
		count: 1991,
		rating: 4.5,
		price: 599,
	},
	{
		id: "4",
		path: rich_dad_poor_dad,
		name: "Rich Dad Poor Dad",
		count: 432,
		rating: 5.0,
		price: 699,
	},
	{
		id: "5",
		path: start_wth_why,
		name: "Start With Why",
		count: 1221,
		rating: 3.5,
		price: 399,
	},
	{
		id: "6",
		path: the_monk_who_sold_his_ferrari,
		name: "The Monk Who Sold His Ferrari",
		count: 867,
		rating: 4.5,
		price: 899,
	},
];
const popular_this_month_data = [
	{
		id: "1",
		path: the_alchemist,
		name: "The Alchemist",
		count: 327,
		rating: 4.0,
		price: 499,
	},
	{
		id: "2",
		path: the_cather,
		name: "The Cather",
		count: 987,
		rating: 4.0,
		price: 399,
	},
	{
		id: "3",
		path: the_secret,
		name: "The Secret",
		count: 1991,
		rating: 4.5,
		price: 599,
	},
	{
		id: "4",
		path: the_world_as_i_see_it,
		name: "The World As I See It",
		count: 432,
		rating: 5.0,
		price: 699,
	},
	{
		id: "5",
		path: tresure_island,
		name: "Tresure Island",
		count: 1221,
		rating: 3.5,
		price: 399,
	},
	{
		id: "6",
		path: wings_of_fire,
		name: "Wings Of Fire",
		count: 867,
		rating: 4.5,
		price: 899,
	},
];
const new_releases_data = [
	{
		id: "1",
		path: how_to_be_perfect,
		name: "How To Be Perfect",
		count: 327,
		rating: 4.0,
		price: 499,
	},
	{
		id: "2",
		path: red_handed,
		name: "Red Handed",
		count: 987,
		rating: 4.0,
		price: 399,
	},
	{
		id: "3",
		path: the_final_fighter,
		name: "The Final Fighter",
		count: 1991,
		rating: 4.5,
		price: 599,
	},
	{
		id: "4",
		path: the_lord_of_easy_money,
		name: "The Lord Of Easy Money",
		count: 432,
		rating: 5.0,
		price: 699,
	},
	{
		id: "5",
		path: the_man_behind_the_curtain,
		name: "The Man Behind The Curtain",
		count: 1221,
		rating: 3.5,
		price: 399,
	},
	{
		id: "6",
		path: undermoney,
		name: "Undermoney",
		count: 867,
		rating: 4.5,
		price: 899,
	},
];
const top_page_turners_data = [
	{
		id: "1",
		path: the_murder_club,
		name: "The Murder Club",
		count: 327,
		rating: 4.0,
		price: 499,
	},
	{
		id: "2",
		path: people_like_her,
		name: "People Like Her",
		count: 987,
		rating: 4.0,
		price: 399,
	},
	{
		id: "3",
		path: red_rising,
		name: "Red ising",
		count: 1991,
		rating: 4.5,
		price: 599,
	},
	{
		id: "4",
		path: the_guest_list,
		name: "The Guest List",
		count: 432,
		rating: 5.0,
		price: 699,
	},
	{
		id: "5",
		path: the_serial_killer,
		name: "The Serial Killer",
		count: 1221,
		rating: 3.5,
		price: 399,
	},
	{
		id: "6",
		path: the_silent_patient,
		name: "The Silent Patient",
		count: 867,
		rating: 4.5,
		price: 899,
	},
];

const StoreScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header_section}>
				<TouchableOpacity style={styles.menu_section}>
					<Feather
						style={styles.icon}
						name="menu"
						color="#000"
						size={24}
						onPress={() => navigation.openDrawer()}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.container1} onPress={() => navigation.navigate("SearchScreen")}>
					<Text style={(styles.input, styles.icon)}>Search...</Text>
					{/* <Feather style={styles.icon} name="search" color="#000" size={20} /> */}
				</TouchableOpacity>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<BookList show={true} title="Award winers" data={top_page_turners_data} />
				<BookList show={true} title="Best sellers" data={popular_this_month_data} />
				<BookList show={true} title="Recommanded For You" data={recommended_data} />
				<BookList show={true} title="New Releases" data={new_releases_data} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default StoreScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Platform.Os === "ios" ? 0 : 30,
	},
	icon: {
		margin: 5,
	},
	input: {
		fontSize: 16,
		width: "100%",
	},
	container1: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		margin: 10,
		backgroundColor: "#ddd",
		borderRadius: 10,
		width: "auto",
		flex: 1,
	},
	header_section: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 20,
	},
	menu_section: {
		padding: 5,
		marginLeft: 5,
	},
});
