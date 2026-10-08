import { TextInputProps, View } from 'react-native'
import Input from '../input/Input'
import Text from '../text/Text'
import { styles } from './styles.formfield'

type Props = TextInputProps & {
	label: string
	inputType: 'input' | 'small' | 'textarea'
}

export default function FormField({
	inputType = 'input',
	label,
	...props
}: Props) {
	return (
		<View>
			<Text type='p' style={styles.label}>
				{label}
			</Text>
			<Input {...props} type={inputType} />
		</View>
	)
}
