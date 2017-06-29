import React, { PropTypes } from 'react';
import {
	StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		marginTop: 20,
		alignSelf: 'center',
		width: 150,
	},
});

const Main = (props) => {
	const routeStack = props.navigator.getCurrentRoutes();
	return (
		<View style={styles.container}>
			<View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => props.navigator.jumpTo(routeStack[1])
					}
				>
                    <Text> Login </Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => props.navigator.jumpTo(routeStack[2])
					}
				>
                    <Text> Register </Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

Main.propTypes = {
	navigator: PropTypes.shape({
		getCurrentRoutes: PropTypes.func,
		jumpTo: PropTypes.func,
	}),
};

export default Main;
