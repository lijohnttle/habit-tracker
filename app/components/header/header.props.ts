import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { IconTypes } from '../icon/icons';
import { TxKeyPath } from '../../i18n';
import { SvgProps } from 'react-native-svg';

export interface HeaderProps {
  /**
   * Main header.
   */
  headerTx?: TxKeyPath;

  /**
   * Header non-i18n.
   */
  headerText?: string;

  /**
   * Icon that should appear on the left.
   */
  leftIcon?: IconTypes;
  leftIconProps?: SvgProps;

  /**
   * What happens when you press the left icon.
   */
  onLeftPress?(): void;

  /**
   * Icon that should appear on the right.
   */
  rightIcon?: IconTypes;
  rightIconProps?: SvgProps;

  /**
   * What happens when you press the right icon.
   */
  onRightPress?(): void;

  /**
   * Container style overrides.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Title style overrides.
   */
  titleStyle?: StyleProp<TextStyle>;
}
