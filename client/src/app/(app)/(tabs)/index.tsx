import { IThread } from '@/@types/threads.types'
import Input from '@/components/ui/input/Input'
import ThreadCard from '@/components/ui/threads/ThreadCard'
import { COLORS } from '@/constants/colors'
import { SIZES } from '@/constants/sizes'
import { useThread } from '@/hooks/thread/useThread'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

export default function Index() {
	const [threads, setThreads] = useState<IThread[]>([])
	const { get } = useThread()
	useEffect(() => {
		const getThreads = async () => {
			const response = await get()
			setThreads(response)
		}

		getThreads()
	}, [])
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Input placeholder='Поиск в Tredly' type='small' />
			</View>
			<FlatList
				data={threads}
				renderItem={({ item }) => (
					<ThreadCard
						title={item.title}
						content={item.content}
						author={item.author}
						createdAt={item.createdAt}
					/>
				)}
				keyExtractor={item => item.id}
			/>
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
