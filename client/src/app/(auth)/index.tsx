import Button from '@/components/ui/button/Button'
import Text from '@/components/ui/text/Text'
import { COLORS } from '@/constants/colors'
import { SIZES } from '@/constants/sizes'
import Ionicons from '@react-native-vector-icons/ionicons'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function Index() {
	return (
		<View style={styles.background}>
			<View style={styles.iconContainer}>
				<Ionicons name='chatbubble' color={'#fff'} size={120} />
			</View>
			<View style={styles.nextLevelBlock}>
				<View style={styles.textBlock}>
					<Text type='title' style={styles.text}>
						Общайтесь, вступайте в дисскусии, делитесь историями
					</Text>
				</View>

				<Button size='large' onPress={() => router.replace('/(auth)/login')}>
					Продолжить
				</Button>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	background: {
		paddingTop: SIZES.containerTop,
		backgroundColor: COLORS.background,
		flex: 1,
		paddingHorizontal: SIZES.containerWidth,
	},
	iconContainer: {
		width: '100%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	nextLevelBlock: {
		marginTop: 'auto',
		marginBottom: 80,
	},
	textBlock: {
		marginTop: 40,
		marginBottom: 60,
	},
	text: {
		textAlign: 'center',
		color: '#fff',
	},
})
