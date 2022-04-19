import { ViewStyle } from 'react-native';
import { color } from '../../theme';

/**
 * All screen keyboard offsets.
 */
export const offsets = {
  none: 0,
};

/**
 * The variations of keyboard offsets.
 */
export type KeyboardOffsets = keyof typeof offsets;

/**
 * All the variations of screens.
 */
export const presets = {
  fixed: {
    outer: {
      backgroundColor: color.background,
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: '100%',
      width: '100%',
    } as ViewStyle,
  },
  scroll: {
    outer: {
      backgroundColor: color.background,
      flex: 1,
      height: '100%',
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch'
    } as ViewStyle,
  },
}

/**
 * The variations of screens.
 */
export type ScreenPresets = keyof typeof presets;

/**
 * Is this preset a non-scrolling one?
 *
 * @param preset The preset to check
 */
export function isNonScrolling(preset?: ScreenPresets) {
  // any of these things will make you scroll
  return !preset || !presets[preset] || preset === 'fixed';
}
