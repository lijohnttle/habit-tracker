import React from 'react';
import * as Icon from 'react-native-feather';
import { SvgProps } from 'react-native-svg';

export const icons = {
    menu: (props: SvgProps) => (<Icon.Menu {...props} />),
    error: (props: SvgProps) => (<Icon.AlertOctagon {...props} />),
};

export type IconTypes = keyof typeof icons;
