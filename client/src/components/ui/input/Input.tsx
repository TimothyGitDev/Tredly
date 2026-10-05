import { TextInput, TextInputProps } from 'react-native'
import { styles } from './styles.input'

type Props = TextInputProps & {}

export default function Input({ ...props }: Props) {
	return (
		<TextInput
			{...props}
			placeholderTextColor={'#757575'}
			autoCapitalize='none'
			style={styles.input}
		/>
	)
}
