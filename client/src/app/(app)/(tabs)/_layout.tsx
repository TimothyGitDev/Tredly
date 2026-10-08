import { COLORS } from '@/constants/colors'
import Ionicons from '@react-native-vector-icons/ionicons'
import { Tabs } from 'expo-router'

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: { backgroundColor: COLORS.background, borderTopWidth: 0 },
				tabBarActiveTintColor: '#fff',
				tabBarInactiveTintColor: 'gray',
				tabBarShowLabel: false,
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name='home' size={28} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='createThread'
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name='add' size={28} color={color} />
					),
				}}
			/>
		</Tabs>
	)
}
