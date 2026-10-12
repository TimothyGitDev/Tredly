import { IThread } from '@/@types/threads.types'
import Input from '@/components/ui/input/Input'
import ThreadCard from '@/components/ui/threads/ThreadCard'
import { COLORS } from '@/constants/colors'
import { SIZES } from '@/constants/sizes'
import { useThread } from '@/hooks/thread/useThread'
import { useEffect, useMemo, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

export default function Index() {
	const [search, setSearch] = useState('')

	const [threads, setThreads] = useState<IThread[]>([])
	const { get } = useThread()
	useEffect(() => {
		const getThreads = async () => {
			const response = await get()
			setThreads(response)
		}

		getThreads()
	}, [])

	const filteredThreads = useMemo(() => {
		if (!search.trim()) return threads
		const query = search.toLowerCase()
		return threads.filter(thread => thread.title.toLowerCase().includes(query))
	}, [search, threads])

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Input
					placeholder='Поиск в Tredly'
					type='small'
					value={search}
					onChangeText={setSearch}
				/>
			</View>
			<FlatList
				data={filteredThreads}
				style={{ marginTop: 10 }}
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

		backgroundColor: COLORS.background,
		flex: 1,
	},
	header: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: SIZES.containerWidth,
	},
})
