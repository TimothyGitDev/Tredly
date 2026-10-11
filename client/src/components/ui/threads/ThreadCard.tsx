import { Text, View } from 'react-native'

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
		<View>
			<Text>{title}</Text>
		</View>
	)
}
