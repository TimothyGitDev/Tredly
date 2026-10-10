import Button from '@/components/ui/button/Button'
import FormField from '@/components/ui/formField/FormField'
import { COLORS } from '@/constants/colors'
import { SIZES } from '@/constants/sizes'
import { useThread } from '@/hooks/thread/useThread'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

export default function CreateThread() {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [isDisabled, setIsDisabled] = useState(true)
	const [isLoading, setIsLoading] = useState(false)

	const { create } = useThread()

	useEffect(() => {
		if (!title.trim() || !content.trim()) {
			setIsDisabled(true)
		} else {
			setIsDisabled(false)
		}
	}, [title, content])

	const handleCreate = async () => {
		if (!title.trim() || !content.trim()) {
			return Alert.alert('Заполните все поля')
		}
		try {
			setIsLoading(true)
			await create(title, content)
			router.replace('/(app)/(tabs)')
		} catch (e) {
			if (e instanceof Error) {
				Alert.alert(e.message)
			} else {
				Alert.alert('Что-то пошло не так!')
			}
		} finally {
			setIsLoading(false)
		}
	}
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Button
					size='large'
					onPress={handleCreate}
					disabled={isDisabled}
					loading={isLoading}
				>
					Опубликовать
				</Button>
			</View>
			<View style={styles.inputs}>
				<FormField
					label='Заголовок'
					inputType='input'
					value={title}
					onChangeText={setTitle}
					placeholder='Введите заголовок'
				/>
				<FormField
					label='Основной текст'
					inputType='textarea'
					multiline={true}
					numberOfLines={4}
					value={content}
					onChangeText={setContent}
					placeholder='О чем хотите рассказать?'
				/>
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
		marginBottom: 40,
	},
	inputs: {
		gap: 10,
	},
})
