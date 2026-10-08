import Button from '@/components/ui/button/Button'
import FormField from '@/components/ui/formField/FormField'
import { COLORS } from '@/constants/colors'
import { SIZES } from '@/constants/sizes'
import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

export default function CreateThread() {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [isDisabled, setIsDisabled] = useState(true)
	useEffect(() => {
		if (!title.trim() || !content.trim()) {
			setIsDisabled(true)
		} else {
			setIsDisabled(false)
		}
	}, [title, content])
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Button size='large' onPress={() => {}} disabled={isDisabled}>
					Опубликовать
				</Button>
			</View>
			<View style={styles.inputs}>
				<FormField
					label='Заголовок'
					inputType='input'
					value={title}
					onChangeText={setTitle}
				/>
				<FormField
					label='Основной текст'
					inputType='textarea'
					multiline={true}
					numberOfLines={4}
					value={content}
					onChangeText={setContent}
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
		marginBottom: 20,
	},
	inputs: {
		gap: 10,
	},
})
