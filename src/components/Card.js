import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Rating } from "react-native-ratings";

const SCREEN_WIDTH = Dimensions.get("window").width;
const Card = ({ show, image, name, count, price, rating }) => {
	const SmallCard = () => {
		return (
			<View>
				<Image resizeMode="stretch" source={image} style={styles.small_card_image} />
			</View>
		);
	};

	const LargeCard = () => {
		return (
			<View style={{ width: (SCREEN_WIDTH * 45) / 100, marginHorizontal: (SCREEN_WIDTH * 1) / 100 }}>
				<Image resizeMode="stretch" source={image} style={styles.big_card_image}></Image>
				<Text style={styles.big_card_title}>{name}</Text>
				<View style={styles.big_card_review}>
					<Rating
						ratingBackgroundColor="#c8c7c8"
						startingValue={rating}
						ratingCount={5}
						imageSize={15}
						readonly={true}
					/>
					<Text style={styles.big_card_count}>({count})</Text>
				</View>
				<Text style={styles.big_card_price}>₹ {price}</Text>
			</View>
		);
	};
	return <View style={styles.container}>{show ? <LargeCard /> : <SmallCard />}</View>;
};

export default Card;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	// small card css
	small_card_image: {
		width: (SCREEN_WIDTH * 30) / 100,
		height: 200,
		marginHorizontal: (SCREEN_WIDTH * 1) / 100,
	},

	// big card css
	big_card_image: {
		width: "100%",
		height: 300,
	},
	big_card_title: {
		fontSize: 20,
		fontWeight: "bold",
		overflow: "hidden",
	},
	big_card_count: {
		fontSize: 12,
		marginLeft: 10,
	},
	big_card_price: {
		fontSize: 18,
	},
	big_card_review: {
		flexDirection: "row",
	},
});
