import { palette } from './palette'

/**
 * Roles for colors.    Prefer using these over the palette.    It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.    It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
    /**
     * A helper for making something see-thru. Use sparingly as many layers of transparency
     * can cause older Android devices to slow down due to the excessive compositing required
     * by their under-powered GPUs.
     */
    transparent: 'rgba(0, 0, 0, 0)',
    /**
     * The screen background.
     */
    background: '#191919',
    /**
     * The alternative screen background.
     */
    backgroundComplementary: '#ffffff',
    /**
     * The default color of text in many components.
     */
    text: '#ffffff',
    /**
     * The alternative color of text in many components.
     */
    textComplementary: '#313131',
    /**
     * The main tinting color.
     */
    primary: '#00acfe',






    /**
     * The palette is available to use, but prefer using the name.
     */
     palette,

    /**
     * The main tinting color, but darker.
     */
    primaryDarker: palette.orangeDarker,
    /**
     * A subtle color used for borders and lines.
     */
    line: palette.offWhite,
    /**
     * Secondary information.
     */
    dim: palette.lightGrey,
    /**
     * Error messages and icons.
     */
    error: palette.angry,

    /**
     * Storybook background for Text stories, or any stories where
     * the text color is color.text, which is white by default, and does not show
     * in Stories against the default white background
     */
    storybookDarkBg: palette.black,

    /**
     * Storybook text color for stories that display Text components against the
     * white background
     */
    storybookTextColor: palette.black,
}
