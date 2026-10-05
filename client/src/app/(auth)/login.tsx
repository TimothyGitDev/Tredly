import Button from '@/components/ui/button/Button'
import FormField from '@/components/ui/formField/FormField'
import Text from '@/components/ui/text/Text'
import { COLORS } from '@/constants/colors'
import { SIZES } from '@/constants/sizes'
import { useAuth } from '@/hooks/auth/useAuth'
import { router } from 'expo-router'
import { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

export default function LoginScreen() {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const { login } = useAuth()

	const handleLogin = async () => {
		if (!username || !password) {
			return Alert.alert('Заполните все поля')
		}
		try {
			await login(username, password)
		} catch (e: any) {
			return Alert.alert(e.message)
		}
	}

	return (
		<View style={styles.background}>
			<View style={styles.textBlock}>
				<Text type='title' typeText='light'>
					Вход в аккаунт
				</Text>
				<Text type='subtitle' style={{ textAlign: 'center' }}>
					Скорее вновь присоединяйтесь к нам!
				</Text>
			</View>
			<View style={styles.formContainer}>
				<FormField
					label='Логин'
					placeholder='Введите логин'
					value={username}
					onChangeText={setUsername}
				/>
				<FormField
					label='Пароль'
					placeholder='Введите пароль'
					value={password}
					onChangeText={setPassword}
				/>
			</View>
			<View style={styles.btnContainer}>
				<Button size='large' onPress={handleLogin}>
					Далее
				</Button>
				<Button
					size='large'
					type='second'
					onPress={() => router.replace('/(auth)/register')}
				>
					Регистрация
				</Button>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	background: {
		paddingTop: SIZES.containerTop + 40,
		backgroundColor: COLORS.background,
		flex: 1,
		paddingHorizontal: SIZES.containerWidth,
	},
	textBlock: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	formContainer: {
		flex: 1,
		justifyContent: 'center',
		gap: 20,
	},
	btnContainer: {
		marginTop: 'auto',
		marginBottom: 80,
		gap: 10,
	},
})
