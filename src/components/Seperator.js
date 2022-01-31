import { View } from "react-native";
import React from "react";

const Seperator = ({ height = 1, width = "100%", color = "#ddd" }) => {
	return <View style={{ height: height, width: width, backgroundColor: color, borderRadius: 50 }} />;
};

export default Seperator;
