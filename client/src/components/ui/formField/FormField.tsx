import { TextInputProps, View } from 'react-native'
import Input from '../input/Input'
import Text from '../text/Text'
import { styles } from './styles.formfield'

type Props = TextInputProps & {
	label: string
}

export default function FormField({ label, ...props }: Props) {
	return (
		<View>
			<Text type='p' style={styles.label}>
				{label}
			</Text>
			<Input {...props} />
		</View>
	)
}
