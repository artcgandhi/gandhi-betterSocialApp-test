import React, { FC } from 'react'
import { View, ViewStyle } from 'react-native'

interface GapProps {
	height?: number
	width?: number
	color?: string
	style?: ViewStyle
}

const Gap: FC<GapProps> = ({ height, width, color, style }) => {
	return <View style={{ height, width, backgroundColor: color, ...style }} />
}

export default Gap
