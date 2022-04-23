import { SvgProps } from 'react-native-svg'
import { IconTypes } from "./icons"

export interface IconProps extends SvgProps {
    icon?: IconTypes,
};
