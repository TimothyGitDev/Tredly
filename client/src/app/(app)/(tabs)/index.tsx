import Input from '@/components/ui/input/Input'
import { COLORS } from '@/constants/colors'
import { SIZES } from '@/constants/sizes'
import { StyleSheet, View } from 'react-native'

export default function Index() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Input placeholder='Поиск в Tredly' type='small' />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingTop: SIZES.containerTop,
		paddingHorizontal: SIZES.containerWidth,
		backgroundColor: COLORS.background,
		flex: 1,
	},
	header: {
		justifyContent: 'center',
		alignItems: 'center',
	},
})
