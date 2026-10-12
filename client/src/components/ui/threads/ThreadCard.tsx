import { SIZES } from '@/constants/sizes'
import { Image, StyleSheet, View } from 'react-native'
import Text from '../text/Text'

type ThreadCardProps = {
	title: string
	content: string
	author: {
		id: string
		username: string
		avatar?: string
	}
	createdAt: Date
}

export default function ThreadCard({
	title,
	content,
	author,
}: ThreadCardProps) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				{author.avatar ? (
					<Image />
				) : (
					<Image
						source={require('@/assets/images/icon.png')}
						style={styles.avatar}
					/>
				)}
				<Text type='p' typeText='light' style={styles.author}>
					r/{author.username}
				</Text>
			</View>
			<Text type='subtitle' typeText='light' style={styles.title}>
				{title}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		gap: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#303030',
		paddingVertical: 8,
		paddingHorizontal: SIZES.containerWidth,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	avatar: {
		width: 30,
		height: 30,
		borderRadius: 50,
	},
	author: {
		fontWeight: 500,
		color: '#D7D7D7',
	},
	title: {
		fontSize: 20,
	},
})
