import React from 'react';
import { SvgProps } from 'react-native-svg';
import { color } from '../../theme';
import { IconProps } from './icon.props';
import { icons } from './icons';

export function Icon(props: IconProps) {
    const { icon } = props;
    const defaultProps: SvgProps = {
        width: 32,
        height: 32,
        stroke: color.text,
        fill: color.text,
    };

    const finalProps = {
        ...defaultProps,
        ...props,
    };

    return (
        <>
            {icons[icon](finalProps)}
        </>
    );
}
