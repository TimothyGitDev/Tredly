import { TextInput, TextInputProps } from 'react-native'
import { styles } from './styles.input'

type Props = TextInputProps & {
	type?: 'small' | 'textarea' | 'input'
}

export default function Input({ type, ...props }: Props) {
	return (
		<TextInput
			{...props}
			placeholderTextColor={'#757575'}
			autoCapitalize='none'
			style={styles[type]}
		/>
	)
}
