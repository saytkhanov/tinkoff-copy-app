import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import tw from 'tailwind-rn'

import { IFooterItem } from '../../../../layout/footer/types'

interface IIcon extends Pick<IFooterItem, 'iconName'> {}

const Icon: FC<IIcon> = ({ iconName }) => {
	return (
		<View
			style={tw('rounded-full bg-blue-500 w-8 h-8 items-center justify-center')}
		>
			<AntDesign name={iconName} size={19} color='#EDF4FE' />
		</View>
	)
}

export default Icon
