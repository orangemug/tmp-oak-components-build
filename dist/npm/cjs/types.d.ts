import React$1, { CSSProperties, MouseEventHandler, ElementType, ComponentPropsWithoutRef, ComponentPropsWithRef, FC, ReactNode, HTMLAttributes, DetailedHTMLProps, TextareaHTMLAttributes, InputHTMLAttributes, FocusEvent, ChangeEventHandler, ComponentProps, ReactElement, MutableRefObject, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import * as styled_components from 'styled-components';
import { ThemedStyledProps, DefaultTheme, Interpolation, CSSProperties as CSSProperties$1 } from 'styled-components';
import Image, { ImageProps as ImageProps$1 } from 'next/image';
import { UrlObject } from 'url';
import { Announcements } from '@dnd-kit/core';
import { CldImage } from 'next-cloudinary';

declare const oakColorTokens: {
    white: string;
    grey10: string;
    grey20: string;
    grey30: string;
    grey40: string;
    grey50: string;
    grey60: string;
    grey70: string;
    grey80: string;
    black: string;
    oakGreen: string;
    mint: string;
    mint30: string;
    mint50: string;
    mint110: string;
    aqua: string;
    aqua30: string;
    aqua50: string;
    aqua110: string;
    lavender: string;
    lavender30: string;
    lavender50: string;
    lavender110: string;
    pink: string;
    pink30: string;
    pink50: string;
    pink110: string;
    lemon: string;
    lemon30: string;
    lemon50: string;
    lemon110: string;
    amber: string;
    amber30: string;
    amber50: string;
    red: string;
    red30: string;
    red50: string;
    navy: string;
    navy110: string;
    navy120: string;
    blue: string;
    magenta: string;
    purple: string;
    teal: string;
    blackSemiTransparent: string;
    whiteSemiTransparent: string;
    transparent: string;
    "rpf-syntax-blue": string;
    "rpf-syntax-green": string;
    "rpf-syntax-grey": string;
    "rpf-syntax-pink": string;
};
type OakColorToken = keyof typeof oakColorTokens;
/**
 *
 *  Use this tool to convert Hex to color filter values https://codepen.io/sosuke/pen/Pjoqqp
 *
 */
declare const oakColorFilterTokens: {
    black: string;
    red: string;
    oakGreen: string;
    white: string;
    grey40: string;
    grey50: string;
    grey60: string;
    navy: string;
    navy110: string;
    navy120: string;
    amber: string;
    lemon: string;
    pink: string;
    pink50: string;
    mint: string;
    mint30: string;
    mint50: string;
    mint110: string;
    aqua: string;
    lavender: string;
};
type OakColorFilterToken = keyof typeof oakColorFilterTokens;
declare const oakUiRoleTokensConst: readonly ["text-primary", "text-subdued", "text-error", "text-disabled", "text-link-active", "text-link-hover", "text-link-visited", "text-link-pressed", "text-inverted", "text-success", "text-promo", "bg-primary", "bg-inverted", "bg-inverted-semi-transparent", "bg-neutral", "bg-neutral-stronger", "bg-btn-primary", "bg-btn-primary-hover", "bg-btn-primary-disabled", "bg-btn-secondary", "bg-btn-secondary-hover", "bg-btn-secondary-disabled", "bg-decorative1-main", "bg-decorative1-subdued", "bg-decorative1-very-subdued", "bg-decorative2-main", "bg-decorative2-subdued", "bg-decorative2-very-subdued", "bg-decorative3-main", "bg-decorative3-subdued", "bg-decorative3-very-subdued", "bg-decorative4-main", "bg-decorative4-subdued", "bg-decorative4-very-subdued", "bg-decorative5-main", "bg-decorative5-subdued", "bg-decorative5-very-subdued", "bg-decorative6-main", "bg-decorative6-subdued", "bg-decorative6-very-subdued", "bg-interactive-element1", "bg-interactive-element2", "bg-correct", "bg-incorrect", "bg-success", "bg-error", "icon-inverted", "icon-disabled", "icon-brand", "icon-success", "icon-error", "icon-warning", "icon-primary", "icon-subdued", "icon-link-active", "icon-link-hover", "icon-link-pressed", "icon-link-visited", "icon-decorative1", "icon-decorative2", "icon-decorative3", "icon-decorative4", "icon-decorative5", "icon-decorative6", "icon-promo", "border-primary", "border-inverted", "border-neutral", "border-neutral-lighter", "border-neutral-stronger", "border-brand", "border-success", "border-error", "border-warning", "border-decorative1", "border-decorative1-stronger", "border-decorative2", "border-decorative2-stronger", "border-decorative3", "border-decorative3-stronger", "border-decorative4", "border-decorative4-stronger", "border-decorative5", "border-decorative5-stronger", "border-decorative6", "border-decorative6-stronger", "transparent", "code-blue", "code-green", "code-grey", "code-pink"];
type OakUiRoleToken = (typeof oakUiRoleTokensConst)[number];
declare const oakUiRoleTokens: ("transparent" | "text-primary" | "text-subdued" | "text-error" | "text-disabled" | "text-link-active" | "text-link-hover" | "text-link-visited" | "text-link-pressed" | "text-inverted" | "text-success" | "text-promo" | "bg-primary" | "bg-inverted" | "bg-inverted-semi-transparent" | "bg-neutral" | "bg-neutral-stronger" | "bg-btn-primary" | "bg-btn-primary-hover" | "bg-btn-primary-disabled" | "bg-btn-secondary" | "bg-btn-secondary-hover" | "bg-btn-secondary-disabled" | "bg-decorative1-main" | "bg-decorative1-subdued" | "bg-decorative1-very-subdued" | "bg-decorative2-main" | "bg-decorative2-subdued" | "bg-decorative2-very-subdued" | "bg-decorative3-main" | "bg-decorative3-subdued" | "bg-decorative3-very-subdued" | "bg-decorative4-main" | "bg-decorative4-subdued" | "bg-decorative4-very-subdued" | "bg-decorative5-main" | "bg-decorative5-subdued" | "bg-decorative5-very-subdued" | "bg-decorative6-main" | "bg-decorative6-subdued" | "bg-decorative6-very-subdued" | "bg-interactive-element1" | "bg-interactive-element2" | "bg-correct" | "bg-incorrect" | "bg-success" | "bg-error" | "icon-inverted" | "icon-disabled" | "icon-brand" | "icon-success" | "icon-error" | "icon-warning" | "icon-primary" | "icon-subdued" | "icon-link-active" | "icon-link-hover" | "icon-link-pressed" | "icon-link-visited" | "icon-decorative1" | "icon-decorative2" | "icon-decorative3" | "icon-decorative4" | "icon-decorative5" | "icon-decorative6" | "icon-promo" | "border-primary" | "border-inverted" | "border-neutral" | "border-neutral-lighter" | "border-neutral-stronger" | "border-brand" | "border-success" | "border-error" | "border-warning" | "border-decorative1" | "border-decorative1-stronger" | "border-decorative2" | "border-decorative2-stronger" | "border-decorative3" | "border-decorative3-stronger" | "border-decorative4" | "border-decorative4-stronger" | "border-decorative5" | "border-decorative5-stronger" | "border-decorative6" | "border-decorative6-stronger" | "code-blue" | "code-green" | "code-grey" | "code-pink")[];
type UiRoleMap = Record<OakUiRoleToken, OakColorToken | null | undefined>;

type OakTheme = {
    name: string;
    uiColors: UiRoleMap;
};
type PropsWithTheme<Props = unknown> = ThemedStyledProps<Props, DefaultTheme>;

declare const breakpointsByName: {
    small: number;
    large: number;
};
type BreakpointName = keyof typeof breakpointsByName;
/** Get the pixel width for a breakpoint by its name. */
declare const getBreakpoint: (breakpointName: keyof typeof breakpointsByName) => number;
type Device = "mobile" | "tablet" | "desktop";
/**
 * Get a CSS snippet of a media query condition which matches a specific device.
 *
 * @example
 *   `@media ${getMediaQuery("mobile")} { ... }`
 */
declare const getMediaQuery: (device: Device) => string;
type ResponsiveValues<Value> = (Value | null) | (Value | null)[];
type Generic = string | number | undefined | null;
/**
 * Helper for a styled component's styles. Generates CSS to apply a value to a
 * specific CSS property, including media queries if the value is a responsive
 * array.
 */
declare const responsiveStyle: <Props, T extends Generic>(attr: string, getValues: (props: Props) => ResponsiveValues<T | undefined | null>, parse?: ((unparsed: T | undefined | null) => Generic) | ((unparsed: T | undefined | null) => (props: PropsWithTheme) => Generic)) => (props: Props) => Interpolation<ThemedStyledProps<Props, DefaultTheme>>;

/**
 * Color token!
 */
type ColorToken = ResponsiveValues<OakUiRoleToken | null>;
type ColorStyleProps = {
    /**
     * Sets the `color` of the element.
     *
     * Accepts a UI role token or a responsive array of UI role tokens.
     */
    $color?: ColorToken;
    /**
     * Sets the `background-color` of the element.
     *
     * Accepts a UI role token or a responsive array of UI role tokens.
     */
    $background?: ColorToken;
};

type DisplayStyleProps = {
    /**
     * Sets the `display` CSS property of the element.
     *
     * Accepts a `display` value or a responsive array of `display` values.
     */
    $display?: ResponsiveValues<CSSProperties["display"]>;
};

declare const oakAllSpacingTokens: {
    "spacing-0": number;
    "spacing-2": number;
    "spacing-4": number;
    "spacing-8": number;
    "spacing-12": number;
    "spacing-16": number;
    "spacing-20": number;
    "spacing-24": number;
    "spacing-32": number;
    "spacing-40": number;
    "spacing-48": number;
    "spacing-56": number;
    "spacing-64": number;
    "spacing-72": number;
    "spacing-80": number;
    "spacing-92": number;
    "spacing-100": number;
    "spacing-120": number;
    "spacing-160": number;
    "spacing-180": number;
    "spacing-240": number;
    "spacing-360": number;
    "spacing-480": number;
    "spacing-640": number;
    "spacing-960": number;
    "spacing-1280": number;
    "spacing-1360": number;
};
type OakAllSpacingToken = keyof typeof oakAllSpacingTokens;
declare const oakSpaceBetweenTokens: {
    "spacing-0": string;
    "spacing-2": string;
    "spacing-4": string;
    "spacing-8": string;
    "spacing-12": string;
    "spacing-16": string;
    "spacing-20": string;
    "spacing-24": string;
    "spacing-32": string;
    "spacing-40": string;
    "spacing-48": string;
    "spacing-56": string;
    "spacing-64": string;
    "spacing-72": string;
    "spacing-80": string;
};
type OakSpaceBetweenToken = keyof typeof oakSpaceBetweenTokens;
declare const additionalSpacingTokens: {
    "100%": string;
    "-50%": string;
    "50%": string;
    0: string;
    "100vh": string;
    "100vw": string;
    auto: string;
    "fit-content": string;
    "max-content": string;
    "min-content": string;
    inherit: string;
    initial: string;
    unset: string;
};
type AdditionalSpacingTypes = keyof typeof additionalSpacingTokens;
type OakCombinedSpacingToken = OakAllSpacingToken | OakSpaceBetweenToken | AdditionalSpacingTypes;

type PaddingValues = ResponsiveValues<OakAllSpacingToken | null | undefined>;
type PaddingStyleProps = {
    /**
     * Applies `padding` to all sides of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $pa?: PaddingValues;
    /**
     * Applies `padding`  to the left and right of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $ph?: PaddingValues;
    /**
     * Applies `padding` to the top and bottom of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $pv?: PaddingValues;
    /**
     * Applies `padding` to the left of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $pl?: PaddingValues;
    /**
     * Applies `padding` to the right of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $pr?: PaddingValues;
    /**
     * Applies `padding` to the top of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $pt?: PaddingValues;
    /**
     * Applies `padding` to the bottom of the element
     *
     * Accepts an inner padding token or a responsive array of inner padding tokens. Can be nulled.
     */
    $pb?: PaddingValues;
};
type MarginValue = "auto" | OakSpaceBetweenToken | null | undefined;
type MarginValues = ResponsiveValues<MarginValue>;
type MarginStyleProps = {
    /**
     * Applies `margin` to all sides of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $ma?: MarginValues;
    /**
     * Applies `margin` to the left and right of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $mh?: MarginValues;
    /**
     * Applies `margin` to the top and bottom of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $mv?: MarginValues;
    /**
     * Applies `margin` to the left of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $ml?: MarginValues;
    /**
     * Applies `margin` to the right of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $mr?: MarginValues;
    /**
     * Applies `margin` to the top of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $mt?: MarginValues;
    /**
     * Applies `margin` to the bottom of the element
     *
     * Accepts a space between token or a responsive array of space between tokens. Can be nulled.
     */
    $mb?: MarginValues;
};
type SpacingStyleProps = PaddingStyleProps & MarginStyleProps;

declare const oakFontSizeTokens: {
    "font-size-1": number;
    "font-size-2": number;
    "font-size-3": number;
    "font-size-4": number;
    "font-size-5": number;
    "font-size-6": number;
    "font-size-7": number;
    "font-size-8": number;
    "font-size-9": number;
    "font-size-10": number;
};
type OakFontSizeToken = keyof typeof oakFontSizeTokens;
declare const oakFontTokens: {
    "heading-1": ["font-size-10", 64, 600, "0.0115rem"];
    "heading-2": ["font-size-9", 56, 600, "0.0115rem"];
    "heading-3": ["font-size-8", 48, 600, "0.0115rem"];
    "heading-4": ["font-size-7", 40, 600, "0.0115rem"];
    "heading-5": ["font-size-6", 32, 600, "0.0115rem"];
    "heading-6": ["font-size-5", 24, 600, "0.0115rem"];
    "heading-7": ["font-size-3", 20, 600, "0.0115rem"];
    "heading-light-1": ["font-size-10", 64, 400, "0.0115rem"];
    "heading-light-2": ["font-size-9", 56, 400, "0.0115rem"];
    "heading-light-3": ["font-size-8", 48, 400, "0.0115rem"];
    "heading-light-4": ["font-size-7", 40, 400, "0.0115rem"];
    "heading-light-5": ["font-size-6", 32, 400, "0.0115rem"];
    "heading-light-6": ["font-size-5", 24, 400, "0.0115rem"];
    "heading-light-7": ["font-size-3", 20, 400, "0.0115rem"];
    "body-1": ["font-size-4", 28, 300, "-0.005rem"];
    "body-2": ["font-size-3", 24, 300, "-0.005rem"];
    "body-3": ["font-size-2", 20, 300, "-0.005rem"];
    "body-4": ["font-size-1", 16, 300, "-0.005rem"];
    "body-1-bold": ["font-size-4", 28, 700, "-0.005rem"];
    "body-2-bold": ["font-size-3", 24, 700, "-0.005rem"];
    "body-3-bold": ["font-size-2", 20, 700, "-0.005rem"];
    "list-item-1": ["font-size-4", 32, 300, "-0.005rem"];
    "list-item-2": ["font-size-3", 24, 300, "-0.005rem"];
    "code-1": ["font-size-6", 32, 300, "0.0115rem"];
    "code-1-bold": ["font-size-6", 32, 700, "0.0115rem"];
    "code-2": ["font-size-4", 24, 300, "0.0115rem"];
    "code-2-bold": ["font-size-4", 24, 700, "0.0115rem"];
    "code-3": ["font-size-3", 20, 300, "0.0115rem"];
    "code-3-bold": ["font-size-3", 20, 700, "0.0115rem"];
};
type OakFontToken = keyof typeof oakFontTokens;
declare const oakTextDecorationsConst: readonly ["underline", "overline", "line-through", "none"];
declare const oakWhiteSpacesConst: readonly ["normal", "nowrap", "wrap", "pre", "pre-wrap", "pre-line", "break-spaces"];
declare const oakWordWrapsConst: readonly ["normal", "break-word", "initial", "inherit"];
declare const oakTextOverflowsConst: readonly ["clip", "ellipsis"];
type OakTextDecoration = (typeof oakTextDecorationsConst)[number];
type OakWhiteSpace = (typeof oakWhiteSpacesConst)[number];
type OakWordWrap = (typeof oakWordWrapsConst)[number];
type OakTextOverflow = (typeof oakTextOverflowsConst)[number];

type TypographyStyleProps = {
    /**
     * Sets the `font-size`, `line-height`, `font-weight` and `letter-spacing` of the element.
     *
     * Accepts a font token or a responsive array of font tokens.
     */
    $font?: ResponsiveValues<OakFontToken>;
    /**
     * Sets the `text-decoration` CSS property of the element.
     *
     * Accepts a text-decoration token or a responsive array of text-decoration tokens.
     */
    $textDecoration?: ResponsiveValues<OakTextDecoration>;
    /**
     * Sets the `text-align` CSS property of the element.
     *
     * Accepts a `text-align` value or a responsive array of `text-align` values.
     */
    $textAlign?: ResponsiveValues<CSSProperties$1["textAlign"]>;
    /**
     * Sets the `white-space` CSS property of the element.
     *
     *  Accepts a white-space token or a responsive array of white-space tokens.
     */
    $whiteSpace?: ResponsiveValues<OakWhiteSpace>;
    /**
     * Sets the `word-wrap` CSS property of the element.
     *
     * Accepts a word-wrap token or a responsive array of word-wrap tokens.
     */
    $wordWrap?: ResponsiveValues<OakWordWrap>;
    /**
     * Sets the `text-overflow` CSS property of the element.
     *
     * Accepts a text-overflow token or a responsive array of text-overflow tokens.
     */
    $textOverflow?: ResponsiveValues<OakTextOverflow>;
    /**
     * Sets the `overflow` CSS property of the element.
     *
     * Accepts an overflow token or a responsive array of overflow tokens.
     */
    $overflow?: ResponsiveValues<CSSProperties$1["overflow"]>;
    /**
     * Sets the `text-wrap` CSS property of the element.
     *
     * Accepts a text-wrap token or a responsive array of text-wrap tokens.
     *
     * Controls how text inside an element is wrapped. The different values provide:
     * - Typographic improvements, for example more balanced line lengths across broken headings
     * - A way to turn text wrapping off completely
     */
    $textWrap?: ResponsiveValues<CSSProperties$1["textWrap"]>;
};

declare const oakDropShadowTokens: {
    "drop-shadow-standard": string;
    "drop-shadow-lemon": string;
    "drop-shadow-wide-lemon": string;
    "drop-shadow-centered-lemon": string;
    "drop-shadow-grey": string;
    "drop-shadow-centered-grey": string;
    "drop-shadow-black": string;
    "drop-shadow-centred-standard": string;
    "drop-shadow-none": string;
};
type OakDropShadowToken = keyof typeof oakDropShadowTokens;

type DropShadowStyleProps = {
    /**
     * Applies a drop-shadow to the element.
     *
     * Accepts a drop-shadow token or a responsive array of drop-shadow tokens.
     */
    $dropShadow?: ResponsiveValues<OakDropShadowToken>;
};

declare const oakBorderWidthTokens: {
    "border-solid-none": number;
    "border-solid-s": number;
    "border-solid-m": number;
    "border-solid-l": number;
    "border-solid-xl": number;
    "border-solid-xxl": number;
    "border-solid-xxxl": number;
    "border-solid-xxxxl": number;
};
declare const oakBorderRadiusTokens: {
    "border-radius-square": number;
    "border-radius-xs": number;
    "border-radius-s": number;
    "border-radius-m": number;
    "border-radius-m2": number;
    "border-radius-l": number;
    "border-radius-xl": number;
    "border-radius-circle": number;
};
type OakBorderRadiusToken = keyof typeof oakBorderRadiusTokens;
type OakBorderWidthToken = keyof typeof oakBorderWidthTokens;

type BorderWidth = ResponsiveValues<OakBorderWidthToken>;
type _BorderStyleProps = ResponsiveValues<CSSProperties$1["borderStyle"]>;
type BorderColorProps = ResponsiveValues<OakUiRoleToken>;
type BorderRadiusProps = ResponsiveValues<OakBorderRadiusToken>;
type BorderStyleProps = {
    /**
     * Apply border on all sides
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $ba?: BorderWidth;
    /**
     * Apply border to the top
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $bt?: BorderWidth;
    /**
     * Apply border to the right
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $br?: BorderWidth;
    /**
     * Apply border to the bottom
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $bb?: BorderWidth;
    /**
     * Apply border to the left
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $bl?: BorderWidth;
    /**
     * Apply border to the left and right
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $bh?: BorderWidth;
    /**
     * Apply border to the top and bottom
     *
     * Accepts a border-width token or a responsive array of border-width tokens
     */
    $bv?: BorderWidth;
    /**
     * Apply `border-style` to the element
     *
     * Accepts a single value or a responsive array of values.
     */
    $borderStyle?: _BorderStyleProps;
    /**
     * Apply a border color to all sides of the element
     *
     * Accepts a UI role token or a responsive array of UI role tokens.
     */
    $borderColor?: BorderColorProps;
    $borderRadius?: BorderRadiusProps;
    /**
     * Apply border radius to the top left
     *
     * Accepts an `OakBorderRadiusToken` or a responsive array of `OakBorderRadiusToken`s.
     */
    $btlr?: BorderRadiusProps;
    /**
     * Apply border radius to the top right
     *
     * Accepts a border-radius token or a responsive array of border-radius tokens.
     */
    $btrr?: BorderRadiusProps;
    /**
     * Apply border radius to the bottom left
     *
     * Accepts a border-radius token or a responsive array of border-radius tokens.
     */
    $bblr?: BorderRadiusProps;
    /**
     * Apply border radius to the bottom right
     *
     * Accepts a border-radius token or a responsive array of border-radius tokens.
     */
    $bbrr?: BorderRadiusProps;
    /**
     * Apply border radius to the top right and top left
     *
     * Accepts a border-radius token or a responsive array of border-radius tokens.
     */
    $btr?: BorderRadiusProps;
    /**
     * Apply border radius to the bottom right and bottom left
     *
     * Accepts a border-radius token or a responsive array of border-radius tokens
     */
    $bbr?: BorderRadiusProps;
};

type StyledButtonProps = TypographyStyleProps & SpacingStyleProps & ColorStyleProps & DisplayStyleProps & BorderStyleProps & DropShadowStyleProps & {
    isLoading?: boolean;
};
type InternalButtonProps = StyledButtonProps & {
    onHovered?: (event: React$1.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;
};

declare const oakOpacityTokens: {
    transparent: number;
    "semi-transparent": number;
    "semi-opaque": number;
    opaque: number;
};
type OakOpacityToken = keyof typeof oakOpacityTokens;

declare const oakTransitionTokens: {
    "standard-ease": string;
    "standard-transform": string;
};
type OakTransitionToken = keyof typeof oakTransitionTokens;

declare const oakZIndexTokens: {
    readonly behind: -1;
    readonly neutral: 0;
    readonly "in-front": 1;
    readonly "mobile-filters": 2;
    readonly "fixed-header": 100;
    readonly "modal-close-button": 150;
    readonly "modal-dialog": 300;
    readonly banner: number;
};
type OakZIndexToken = keyof typeof oakZIndexTokens | null;

declare const oakDefaultTheme: OakTheme;

declare const oakDarkTheme: OakTheme;

declare const parseBorder: (value?: OakBorderWidthToken | null) => string | undefined;

/**
 * - takes OakColorToken, OakUiRoleToken, null or undefined
 * - if OakColorToken is passed, returns corresponding css value
 * - if OakUiRoleToken is passed, returns a function that takes the current theme and returns the corresponding css value
 * - if null or undefined is passed, returns undefined
 */
declare function parseColor(): undefined;
declare function parseColor(value?: OakColorToken | OakUiRoleToken | null): (props: PropsWithTheme) => string;
declare function parseColor(value?: OakUiRoleToken | null): ((props: PropsWithTheme) => string) | undefined;

/**
 * - takes any of OakUiRoleToken or null/undefined
 * - returns a function that takes the current theme and returns the corresponding css filter style for that token
 * - returns undefined if no filter is found for the token
 */
declare function parseColorFilter(value?: OakUiRoleToken | null): (props: PropsWithTheme) => string;
declare function parseColorFilter(value?: OakUiRoleToken | null): ((props: PropsWithTheme) => string) | undefined;

declare const parseDropShadow: (variant?: OakDropShadowToken | null) => string | undefined;

declare const parseOpacity: (variant?: OakOpacityToken | null) => number | undefined;

declare const parseTransitions: (variant?: OakTransitionToken | null) => string | undefined;

/**
 * - takes any of OakInnerPadding, OakSpaceBetween, OakAllSpacing, and other accepted values,
 * - derives and returns the corresponding css value
 * - converting to rem where necessary
 */
declare function parseSpacing(value?: OakCombinedSpacingToken | null): string | 0 | undefined;

declare const parseFontWeight: (font?: OakFontToken | null) => 300 | 400 | 600 | 700 | undefined;
declare const parseFontSize: (font?: OakFontToken | null) => string | null | undefined;
declare const parseLineHeight: (font?: OakFontToken | null) => string | null | undefined;
declare const parseLetterSpacing: (font?: OakFontToken | null) => "0.0115rem" | "-0.005rem" | undefined;

declare const parseBorderRadius: (value?: OakBorderRadiusToken | null) => string | undefined;

declare const parseZIndex: (value?: OakZIndexToken | number) => number | undefined;

declare const icons: {
    readonly "question-mark": "v1706872277/icons/question-mark.svg";
    readonly ai: "v1754063273/icons/ai_cqaksa.svg";
    readonly "ai-additional-material": "v1756224441/icons/AI_additional_material_oopjax.svg";
    readonly "ai-quiz": "v1756224440/icons/AI_quiz_eivb2s.svg";
    readonly "ai-slide-deck": "v1756224440/icons/Ai_slidedeck_xuo49n.svg";
    readonly "ai-worksheet": "v1756224441/icons/AI_worksheet_cm4f0q.svg";
    readonly "ai-teaching-resources": "v1779438987/icons/ai-teaching-resources.svg";
    readonly home: "v1699887218/icons/gvqxjxcw07ei2kkmwnes.svg";
    readonly send: "v1699893673/icons/rmvytilpjgvh3pgwc8ph.svg";
    readonly rocket: "v1699894015/icons/u26xm5hteot875ozfnk9.svg";
    readonly edit: "v1699894149/icons/qxlunbg5tfrdherzsvlt.svg";
    readonly expand: "v1730982187/Icon_Expand_arrktl.svg";
    readonly minimise: "v1730982213/Icon_Minimise_btcdbz.svg";
    readonly hamburger: "v1699895123/icons/jaqdnomtbhqvjcap962u.svg";
    readonly cross: "v1699895179/icons/xigimrbivcaxt4omxamp.svg";
    readonly copy: "v1727861316/icons/Icon_Copy_qxgynv.svg";
    readonly bell: "v1699895207/icons/ecejtvqerx81prxyxh9b.svg";
    readonly twitter: "v1699895251/icons/bq6a50xtkvnzhltfggzz.svg";
    readonly x: "v1748452854/icons/x_fpmv5f.svg";
    readonly worksheet: "v1699895300/icons/ez1s6mtpe5jkunnxzvlw.svg";
    readonly facebook: "v1699895330/icons/iojlvh3o5lshy2jupyph.svg";
    readonly share: "v1699895363/icons/agcmduftef3wcla6gzec.svg";
    readonly "arrow-right": "v1707149070/icons/fv0z57zerrioft52dd9n.svg";
    readonly "arrow-down": "v1699954152/icons/wpfmbmwpyfinipg0d61y.svg";
    readonly "arrow-left": "v1707149179/icons/ejrm9dpgpzb7ddbo8z2i.svg";
    readonly "arrow-up": "v1699954152/icons/arrow-up.svg";
    readonly "worksheet-3": "v1699895429/icons/bzhojpjxp9rukdvh7daz.svg";
    readonly "chevron-right": "v1707752509/icons/vk9xxxhnsltsickom6q9.svg";
    readonly save: "v1699895505/icons/rh1ahwwtbemvz0ihluew.svg";
    readonly success: "v1699895534/icons/Icon-Success_aiiprx.svg";
    readonly error: "v1699895534/icons/Icon-Error_r25aza.svg";
    readonly filter: "v1727783280/icons/Icon_Filter_eitb2p.svg";
    readonly "quiz-3": "v1699895534/icons/zoayhgtrotv32fad7d3k.svg";
    readonly "chevron-down": "v1699953557/icons/botfld6brychmttwtv6u.svg";
    readonly linkedin: "v1699953592/icons/leqneklorqqzb1zo6rf1.svg";
    readonly "magic-carpet": "v1699953622/icons/jifivg9xxm7sb0fjdilm.svg";
    readonly books: "v1699953657/icons/hz4l3iq6i68kazvkvorq.svg";
    readonly "supervision-level": "v1699953696/icons/cwqhknapp3maa4g0t3lj.svg";
    readonly "quiz-white": "v1699953730/icons/gpcehpgr9mqoumsa25xe.svg";
    readonly "additional-material": "v1699953798/icons/ntoq4tqvcm2uj1pajubt.svg";
    readonly "slide-deck-3": "v1699953830/icons/sm92moja9d5utu3cj16c.svg";
    readonly "sign-language": "v1699953861/icons/ns94ozvozzi22enxkx0x.svg";
    readonly external: "v1699953892/icons/hlxmejse3mcr4tqo6t8u.svg";
    readonly "equipment-required": "v1699953925/icons/pw22bdhj2vrzfv2ogi4e.svg";
    readonly "chevron-left": "v1707752509/icons/rbvzan0ozubmr4j0uqdn.svg";
    readonly download: "v1699953991/icons/dk0f6a6hdpzxftjosngn.svg";
    readonly search: "v1704901279/icons/canbi3fuz5fanzom2hvi.svg";
    readonly "chevron-up": "v1699954058/icons/pay71thmhhylj7z28sj1.svg";
    readonly go: "v1699954090/icons/vdzptyvmitylra8x4usy.svg";
    readonly copyright: "v1699954118/icons/boiod3rflocgsnfokyo8.svg";
    readonly project: "v1699954186/icons/zofq5pheud6spnwjpewk.svg";
    readonly "slide-deck": "v1699954241/icons/sjjy5f3g4eciwcuxxr33.svg";
    readonly "content-guidance": "v1699954277/icons/tm3uhcqenaznq4fxys7j.svg";
    readonly tick: "v1699954310/icons/efd3esaor6zqk7seh6kt.svg";
    readonly instagram: "v1699954343/icons/ayfeljric0kkimdymvva.svg";
    readonly dot: "v1699954371/icons/knykdclphkm8lgff4u2g.svg";
    readonly warning: "v1704901279/icons/zzszodmk7fvxm9xzzg9s.svg";
    readonly "lightbulb-yellow": "v1705078631/icons/q2v4sqxouy1ngcajoavv.svg";
    readonly lightbulb: "v1705078631/icons/zldisxmbff36z68rwcef.svg";
    readonly pencil: "v1765890807/icons/pencil.svg";
    readonly quiz: "v1705416077/icons/kaaizjcudy0jfgfrrdel.svg";
    readonly video: "v1705416078/icons/wzey1zfxrvv3apeebbf5.svg";
    readonly intro: "v1705662092/icons/pl7bnmb13txese9yxkjv.svg";
    readonly loopdown: "v1699887218/ui-graphics/loopdown.svg";
    readonly "teacher-lesson": "v1714060653/icons/teacher-lesson.svg";
    readonly "teacher-unit": "v1714060657/icons/teacher-unit.svg";
    readonly "move-arrows": "v1709052869/icons/hoddjsgpzkszgvnmn91q.svg";
    readonly info: "v1709052869/icons/Icon_Info_vsx3xi.svg";
    readonly play: "v1732099511/icons/g1xehzuhjnb0xeftmdno.svg";
    readonly "bookmark-outlined": "v1734519491/icons/bookmark-outlined_rxe5v0.svg";
    readonly "bookmark-filled": "v1734519491/icons/bookmark-filled_jz828n.svg";
    readonly "microsoft-teams": "v1736429692/microsoft-teams_gelfmi.svg";
    readonly "google-classroom": "v1736429692/google-classroom_pedfpd.svg";
    readonly clipboard: "v1749031463/icons/clipboard_yll2yj.svg";
    readonly "book-steps": "v1749034739/icons/book-steps_qwku6h.svg";
    readonly "free-tag": "v1749033815/icons/free-tag_lijptf.svg";
    readonly threads: "v1749034800/icons/threads_sqlqoe.svg";
    readonly spreadsheet: "v1754386968/icons/spreadsheet_rsndeb.svg";
    readonly "curriculum-plan": "v1754386969/icons/curriculum-plan_qygyuo.svg";
    readonly data: "v1763393164/icons/data-illustration_ukwdxg.svg";
    readonly chatting: "v1763393163/icons/chatting-illustration_l52zaf.svg";
    readonly "snack-break": "v1763393167/icons/snackbreak_illustration_fguw7l.svg";
    readonly "class-grouping": "v1776785621/icons/class-grouping.svg";
    readonly strand: "v1776850533/icons/strand.svg";
    readonly plus: "v1781533362/icons/plus.svg";
    readonly "subject-art": "v1706616347/subject-icons/art.svg";
    readonly "subject-biology": "v1706616415/subject-icons/biology.svg";
    readonly "subject-chemistry": "v1706616415/subject-icons/chemistry.svg";
    readonly "subject-citizenship": "v1706616415/subject-icons/citizenship.svg";
    readonly "subject-gcse-citizenship": "v1706616415/subject-icons/citizenship.svg";
    readonly "subject-core-citizenship": "v1706616415/subject-icons/citizenship.svg";
    readonly "subject-combined-science": "v1734523570/subject-icons/science.svg";
    readonly "subject-communication-and-language": "v1706616415/subject-icons/communication-and-language.svg";
    readonly "subject-computing": "v1729171080/subject-icons/computing.svg";
    readonly "subject-computer-science": "v1729171080/subject-icons/computing.svg";
    readonly "subject-core-computing": "v1729171080/subject-icons/computing.svg";
    readonly "subject-cooking-nutrition": "v1734523014/subject-icons/cooking-nutrition.svg";
    readonly "subject-computing-non-gcse": "v1729171080/subject-icons/computing.svg";
    readonly "subject-creative-arts": "v1706616415/subject-icons/creative-arts.svg";
    readonly "subject-design-technology": "v1706616417/subject-icons/design-technology.svg";
    readonly "subject-digital-literacy": "v1729171080/subject-icons/computing.svg";
    readonly "subject-drama": "v1706616417/subject-icons/drama.svg";
    readonly "subject-english": "v1706616417/subject-icons/english.svg";
    readonly "subject-english-language": "v1706616419/subject-icons/language.svg";
    readonly "subject-english-grammar": "v1706616417/subject-icons/english-grammar.svg";
    readonly "subject-english-handwriting": "v1706616419/subject-icons/handwriting.svg";
    readonly "subject-english-reading-for-pleasure": "v1706616421/subject-icons/literature.svg";
    readonly "subject-english-spelling": "v1706616417/subject-icons/english-spelling.svg";
    readonly "subject-english-reading-writing-oracy": "v1706616424/subject-icons/reading-writing-oracy.svg";
    readonly "subject-english-vocabulary": "v1706616425/subject-icons/vocabulary.svg";
    readonly "subject-expressive-arts-and-design": "v1706616415/subject-icons/creative-arts.svg";
    readonly "subject-financial-education": "v1729171111/subject-icons/finance.svg";
    readonly "subject-french": "v1729171111/subject-icons/french.svg";
    readonly "subject-geography": "v1734523108/subject-icons/geography.svg";
    readonly "subject-german": "v1734523165/subject-icons/german.svg";
    readonly "subject-history": "v1728568980/subject-icons/history.svg";
    readonly "subject-independent-living": "v1706616419/subject-icons/independent-living.svg";
    readonly "subject-latin": "v1706616420/subject-icons/latin.svg";
    readonly "subject-literacy": "v1706616417/subject-icons/english.svg";
    readonly "subject-maths": "v1706616421/subject-icons/maths.svg";
    readonly "subject-music": "v1728570203/subject-icons/music-hollow.svg";
    readonly "subject-numeracy": "v1706616422/subject-icons/numeracy.svg";
    readonly "occupational-therapy": "v1706616424/subject-icons/therapy.svg";
    readonly "subject-personal-social-and-emotional-development": "v1706616423/subject-icons/rshe-pshe.svg";
    readonly "subject-physical-development": "v1706616422/subject-icons/physical-development.svg";
    readonly "subject-physical-education": "v1728568932/subject-icons/physical-education.svg";
    readonly "subject-core-physical-education": "v1728568932/subject-icons/physical-education.svg";
    readonly "subject-gcse-physical-education": "v1728568932/subject-icons/physical-education.svg";
    readonly "subject-physical-therapy": "v1706632882/subject-icons/physical-therapy.svg";
    readonly "subject-physics": "v1728568898/subject-icons/physics.svg";
    readonly "subject-religious-education": "v1706616425/subject-icons/religious-education.svg";
    readonly "subject-core-religious-education": "v1706616425/subject-icons/religious-education.svg";
    readonly "subject-gcse-religious-education": "v1706616425/subject-icons/religious-education.svg";
    readonly "subject-rshe-pshe": "v1706616423/subject-icons/rshe-pshe.svg";
    readonly "subject-rshe": "v1706616423/subject-icons/rshe-pshe.svg";
    readonly "subject-rule-of-law": "v1706616415/subject-icons/citizenship.svg";
    readonly "subject-philosophy": "v1741794495/subject-icons/philosophy.svg";
    readonly "subject-social-science": "v1741794495/subject-icons/social-science.svg";
    readonly "subject-theology": "v1741794496/subject-icons/theology.svg";
    readonly "subject-science": "v1734523570/subject-icons/science.svg";
    readonly "subject-sensory-integration": "v1706626743/subject-icons/sensory-integration.svg";
    readonly "subject-spanish": "v1729171166/subject-icons/spanish.svg";
    readonly "subject-speech-and-language-therapy": "v1706632882/subject-icons/speech-and-language.svg";
    readonly "subject-specialist": "v1706616415/subject-icons/communication-and-language.svg";
    readonly "subject-therapy": "v1706616424/subject-icons/therapy.svg";
    readonly "subject-therapies": "v1706616424/subject-icons/therapy.svg";
    readonly "subject-occupational-therapy": "v1706616424/subject-icons/therapy.svg";
    readonly "subject-understanding-the-world": "v1706616425/subject-icons/understanding-the-world.svg";
    readonly swimming: "v1728649514/subject-icons/swimming.svg";
    readonly "homepage-robot-waving": "v1734523528/homepage/robot_waving_malpc3.svg";
    readonly "homepage-three-pupils": "v1734523221/homepage/image-students_g0jtxe.svg";
    readonly "homepage-teacher": "v1734523680/homepage/teacher-carrying-stuff_gab2ec.svg";
    readonly "homepage-teacher-map": "v1734523721/homepage/teacher-reading-map_glwhyh.svg";
    readonly "audio-clip-large": "v1731950937/teacher-journey/audio_clip.svg";
    readonly "audio-clip-small": "v1731951210/teacher-journey/audio_clip_small.svg";
    readonly "box-border-bottom": "v1734537219/OWA/ui-graphics/box-border-bottom_oa1riy.svg";
    readonly "box-border-left": "v1734537223/OWA/ui-graphics/box-border-left_eqgplm.svg";
    readonly "box-border-right": "v1734537228/OWA/ui-graphics/box-border-right_unznsm.svg";
    readonly "box-border-top": "v1734537228/OWA/ui-graphics/box-border-right_unznsm.svg";
    readonly "bubble-1": "v1734537172/OWA/ui-graphics/bubble-1_nhgg0w.svg";
    readonly "bubble-2": "v1734537180/OWA/ui-graphics/bubble-2_mfms6f.svg";
    readonly burst: "v1734537152/OWA/ui-graphics/burst_k0mkht.svg";
    readonly confetti: "v1763546694/ui-graphics/confetti-background_xbvfrc.svg";
    readonly "header-underline": "v1734536947/OWA/ui-graphics/header-underline_ejbffz.svg";
    readonly "icon-background-square": "v1734537276/OWA/ui-graphics/icon-background-square_qajipb.svg";
    readonly "looping-arrow-1": "v1734537133/OWA/ui-graphics/looping-arrow-1_zizllb.svg";
    readonly "looping-line-1": "v1734536929/OWA/ui-graphics/looping-line-1_krbrht.svg";
    readonly "looping-line-2": "v1734536933/OWA/ui-graphics/looping-line-2_sdinei.svg";
    readonly "looping-line-3": "v1734537015/OWA/ui-graphics/looping-line-3_b8dque.svg";
    readonly "looping-line-4": "v1734537039/OWA/ui-graphics/looping-line-4_xtjj4r.svg";
    readonly "looping-line-5": "v1740665310/OWA/ui-graphics/looping-line-5_vdknco.svg";
    readonly "speech-bubble": "v1734537300/OWA/ui-graphics/speech-bubble_magqjf.svg";
    readonly "tag-promotional": "v1734537244/OWA/ui-graphics/tag-promotional_v4p3oa.svg";
    readonly "tick-mark-happiness": "v1734537080/OWA/ui-graphics/tick-mark-happiness_fyst07.svg";
    readonly "underline-1": "v1734537060/OWA/ui-graphics/underline-1_zaegqi.svg";
    readonly image: "v1763680546/icons/Icon_Image_uatq6d.svg";
    readonly logo: "v1711468346/logo-mark.svg";
    readonly trash: "v1764692488/icons/icon_delete_edzcua.svg";
    readonly list: "v1774882349/icons/List.svg";
    readonly "media-clips": "v1774884267/icons/media-clips_nw3zpt.svg";
    readonly retake: "v1775141914/icons/retake-icon_xgqxzv.svg";
    readonly globe: "v1776851811/icons/globe.svg";
};
type IconName = keyof typeof icons;

type ColorFilterToken = ResponsiveValues<OakUiRoleToken | null>;
type ColorFilterStyleProps = {
    /**
     * Applies a color-filter to the element.
     *
     * Accepts a color filter token or a responsive array of color tokens.
     */
    $colorFilter?: ColorFilterToken;
};

type PositionSpacing = OakAllSpacingToken | OakSpaceBetweenToken | "-50%" | "50%" | null | undefined;
type PositionStyleProps = {
    /**
     * Sets the `position` CSS property of the element.
     *
     * Accepts a `position` value or a responsive array of `position` values. Can be nulled.
     */
    $position?: ResponsiveValues<CSSProperties["position"]>;
    /**
     * Sets the `top` CSS property of the element.
     *
     * - Accepts a spacing token or a responsive array of spacing tokens. E.g. `['spacing-4', 'spacing-8']`
     * - `50%` or `-50%` may be used to center an absolutely positioned element within its parent.
     * - Can be `null` at a breakpoint E.g. `[null, 'spacing-8']`.
     */
    $top?: ResponsiveValues<PositionSpacing>;
    /**
     * Sets the `right` CSS property of the element.
     *
     * - Accepts a spacing token or a responsive array of spacing tokens. E.g. `['spacing-4', 'spacing-8']`
     * - `50%` or `-50%` may be used to center an absolutely positioned element within its parent.
     * - Can be `null` at a breakpoint E.g. `[null, 'spacing-8']`.
     */
    $right?: ResponsiveValues<PositionSpacing>;
    /**
     * Sets the `bottom` CSS property of the element.
     *
     * - Accepts a spacing token or a responsive array of spacing tokens. E.g. `['spacing-4', 'spacing-8']`
     * - `50%` or `-50%` may be used to center an absolutely positioned element within its parent.
     * - Can be `null` at a breakpoint E.g. `[null, 'spacing-8']`.
     */
    $bottom?: ResponsiveValues<PositionSpacing>;
    /**
     * Sets the `left` CSS property of the element.
     *
     * - Accepts a spacing token or a responsive array of spacing tokens. E.g. `['spacing-4', 'spacing-8']`
     * - `50%` or `-50%` may be used to center an absolutely positioned element within its parent.
     * - Can be `null` at a breakpoint E.g. `[null, 'spacing-8']`.
     */
    $left?: ResponsiveValues<PositionSpacing>;
    /**
     * Sets the `inset` CSS property of the element.
     *
     * - Accepts a spacing token or a responsive array of spacing tokens. E.g. `['spacing-4', 'spacing-8']`
     * - Can be `null` at a breakpoint E.g. `[null, 'spacing-8']`.
     */
    $inset?: ResponsiveValues<PositionSpacing>;
    /**
     * Sets the `overflow` CSS property of the element.
     *
     * Accepts an `overflow` value or a responsive array of `overflow` values.
     */
    $overflow?: ResponsiveValues<CSSProperties["overflow"]>;
    /**
     * Sets the `overflow-x` CSS property of the element.
     *
     * Accepts an `overflow-x` value or a responsive array of `overflow-x` values.
     */
    $overflowX?: ResponsiveValues<CSSProperties["overflowX"]>;
    /**
     * Sets the `overflow-y` CSS property of the element.
     *
     * Accepts an `overflow-y` value or a responsive array of `overflow-y` values.
     */
    $overflowY?: ResponsiveValues<CSSProperties["overflowY"]>;
    /**
     * Sets the `object-fit` CSS property of the element.
     *
     * Accepts an `object-fit` value or a responsive array of `object-fit` values.
     */
    $objectFit?: ResponsiveValues<CSSProperties["objectFit"]>;
    /**
     * Sets the `object-position` CSS property of the element.
     *
     * Accepts an `object-position` value or a responsive array of `object-position` values.
     */
    $objectPosition?: ResponsiveValues<CSSProperties["objectPosition"]>;
    /**
     * Sets the `pointer-events` CSS property of the element.
     *
     * Accepts a `pointer-events` value or a responsive array of `pointer-events` values.
     */
    $pointerEvents?: ResponsiveValues<CSSProperties["pointerEvents"]>;
    /**
     * Sets the `visibility` CSS property of the element.
     *
     * Accepts a `visibility` value or a responsive array of `visibility` values.
     */
    $visibility?: ResponsiveValues<CSSProperties["visibility"]>;
    /**
     * Sets the `vertical-align` CSS property of the element.
     *
     * Accepts a `vertical-align` value or a responsive array of `vertical-align` values.
     */
    $verticalAlign?: ResponsiveValues<CSSProperties["verticalAlign"]>;
};

type SizeValues = ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
type SizeStyleProps = {
    /**
     * Sets the `width` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $width?: SizeValues;
    /**
     * Sets the `min-width` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $minWidth?: SizeValues;
    /**
     * Sets the `max-width` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $maxWidth?: SizeValues;
    /**
     * Sets the `height` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $height?: SizeValues;
    /**
     * Sets the `min-height` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $minHeight?: SizeValues;
    /**
     * Sets the `max-height` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $maxHeight?: SizeValues;
    /**
     * Sets the `aspect-ratio` CSS property of the element.
     *
     * Accepts an `aspect-ratio` value or a responsive array of `aspect-ratio` values.
     */
    $aspectRatio?: ResponsiveValues<CSSProperties$1["aspectRatio"]>;
    /**
     * Sets the `box-sizing` CSS property of the element.
     *
     * Accepts a `box-sizing` value or a responsive array of `box-sizing` values.
     */
    $boxSizing?: ResponsiveValues<CSSProperties$1["boxSizing"]>;
};

type OpacityStyleProps = {
    /**
     * Sets the `opacity` CSS property of the element.
     *
     * Accepts an opacity token or a responsive array of opacity tokens.
     */
    $opacity?: ResponsiveValues<OakOpacityToken>;
};

type TransformStyleProps = {
    /**
     * Sets the `transform` CSS property of the element.
     *
     * Accepts a `transform` value or a responsive array of `transform` values. Can be nulled.
     */
    $transform?: ResponsiveValues<CSSProperties$1["transform"] | null>;
    /**
     * Sets the `transform-origin` CSS property of the element.
     *
     * Accepts a `transform-origin` value or a responsive array of `transform-origin` values. Can be nulled.
     */
    $transformOrigin?: ResponsiveValues<CSSProperties$1["transformOrigin"] | null>;
};

type Transition = OakTransitionToken;
type TransitionStyleProps = {
    /**
     * Sets the `transition` CSS property of the element.
     *
     * Accepts a transition token or a responsive array of transition tokens.
     */
    $transition?: ResponsiveValues<Transition>;
};

type ZIndexStyleProps = {
    /**
     * Sets the `z-index` CSS property of the element.
     *
     * Accepts a z-index token or a responsive array of z-index tokens.
     */
    $zIndex?: ResponsiveValues<OakZIndexToken | number>;
};

type ScrollMarginValue = OakAllSpacingToken | null | undefined;
type ScrollMarginValues = ResponsiveValues<ScrollMarginValue>;
type ScrollSnapStyleProps = {
    /**
     * Applies `scroll-margin-top` to the element
     *
     * Accepts any Oak spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $scrollMarginTop?: ScrollMarginValues;
    /**
     * Applies `scroll-margin-left` to the element
     *
     * Accepts any Oak spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $scrollMarginLeft?: ScrollMarginValues;
};

type HTMLProps$1 = {
    onClick?: MouseEventHandler;
};
type OakBoxProps = {
    children?: React.ReactNode;
} & PositionStyleProps & SizeStyleProps & SpacingStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & HTMLProps$1 & ScrollSnapStyleProps;
declare const oakBoxCss: styled_components.FlattenInterpolation<styled_components.ThemedStyledProps<OakBoxProps, styled_components.DefaultTheme>>;
/**
 * OakBox exposes all the styles that are available styles on a div tag. These include:
 * - color
 * - size
 * - display
 * - spacing
 * - position
 * - border
 * - opacity
 * - z-index
 * - typography
 * - transition
 * - transform
 * - drop-shadow
 * - scroll-margin-top/left
 *
 */
declare const OakBox: any;

type HTMLProps = {
    onClick?: MouseEventHandler;
};
type OakImageProps<C extends ElementType = typeof Image> = Omit<ImageProps$1, "placeholder"> & OakBoxProps & ColorFilterStyleProps & HTMLProps & {
    as?: C;
    /**
     * The placeholder to use while the image is loading
     *
     * Defaults to `oak` which is a placeholder containing the Oak logo
     * also accepts the same options as next/image */
    placeholder?: ImageProps$1["placeholder"] | "oak";
    /**
     * Additional props forwarded to the underlying `Image` component `as`
     */
    imageProps?: Partial<ComponentPropsWithoutRef<C>>;
};
type StyledImageProps = Omit<OakImageProps, "as"> & {
    $showOakPlaceholder: boolean;
};
declare const oakPlaceholder = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZmlsbD0iIzIyMiIgZD0iTTI4Ljc3OSAxOS4xNzZhMjcuMTkxIDI3LjE5MSAwIDAgMC0zLjggMS42IDE2LjcgMTYuNyAwIDAgMC03LjEgOC40YzAgLjEtLjEuMi0uMS4zLS43IDIuNC0uNiAyIDEuMyAyLjMgMS45LjMgMSAuNSAxIDEuMy0uMSA4LjggNC4xIDE1LjEgMTEuNCAxOS42YTEuNSAxLjUgMCAwIDAgMS43LjJjNS43LTIuNiA5LjMtNyAxMC4zLTEzLjJhMSAxIDAgMCAxIDEtMWwzLS4yYy44IDAgMS4zLjIgMS4yIDEuMmExNy45IDE3LjkgMCAwIDEtMy4yIDkuMiAyMy43IDIzLjcgMCAwIDEtMTAuOSA5LjEgNS40MDEgNS40MDEgMCAwIDEtNC41LS4yIDI2LjI5OCAyNi4yOTggMCAwIDEtOC41LTYuNiAyNS45IDI1LjkgMCAwIDEtNi40LTE0LjRjMC0uNi0uMi0uNy0uOC0uOC0yLjUtLjQtMi41LS4xLTIuMy0yLjlhMTkuMyAxOS4zIDAgMCAxIDEwLjgtMTYuNiAzOC45OTkgMzguOTk5IDAgMCAxIDUuNy0yLjEgMi4xIDIuMSAwIDAgMCAuOS0xLjMgMTQuMSAxNC4xIDAgMCAxIDMuNS02LjNsLjMtLjNjMS45LTIgMi42LTIgNC4zLjJsLjQuNWMxLjEgMS4xIDEgMS41LS4xIDIuNmExMS45IDExLjkgMCAwIDAtMy4yIDQuNCAxNi45IDE2LjkgMCAwIDEgNy41IDIuM2M1LjcgMy41IDkuMiA4LjMgOS45IDE1IC4wMTYuOTAxLS4wMTcgMS44MDItLjEgMi43IDAgLjgtLjYgMS0xLjIgMS4yYTE2LjEgMTYuMSAwIDAgMS0xMS0uNyAxNy45MDEgMTcuOTAxIDAgMCAxLTEwLjktMTMuNiA5Ljc5NiA5Ljc5NiAwIDAgMS0uMS0xLjlabTE4LjEgMTIuMmMuNC01LjUtNi45LTEyLjYtMTMtMTIuMS41IDYuNSA3LjYgMTIuOCAxMyAxMi4xWiIgb3BhY2l0eT0iLjEiLz48L3N2Zz4=";
declare const placeholderStyles: styled_components.FlattenInterpolation<styled_components.ThemedStyledProps<StyledImageProps, styled_components.DefaultTheme>>;
/**
 * A wrapper for NextJs's Image component.
 *
 * Use this for all image types as well as icons.
 * Can accept remote urls provided they are whitelisted in next.config.js and relative urls for local images provided they begin with a "/".
 * Set the width and height of the image through the `$width` and `$height` props when the aspect ratio is not known. This will letterbox the image to avoid stretching.
 * Alternatively pass `width` and `height` props when the aspect ratio is known and use $minWidth to set the rendered width, avoiding letter-boxing.
 * NB. for letterboxed images, $background controls the color of the letterbox not the image.
 * `positionStyle` and `spacingStyle` props are also exposed for container.
 * sizes is exposed for further optimisation read Next docs for more info.
 *
 */
declare const OakImage: <C extends ElementType = typeof Image>({ ...props }: OakImageProps<C>) => React$1.JSX.Element;

declare const oakIconNames: IconName[];
type OakIconName = IconName;
type OakIconProps = Omit<OakImageProps, "alt" | "src"> & {
    /**
     * The name of the icon to display
     *
     * Accepts an icon name token
     */
    iconName: OakIconName;
    alt?: string;
    iconWidth?: OakAllSpacingToken;
    iconHeight?: OakAllSpacingToken;
};
/**
 * returns true if the given string is a valid `OakIconName`
 */
declare function isValidIconName(iconName: string): iconName is OakIconName;
/**
 * returns a Icon URL from Cloudinary if is a valid icon, otherwise returns undefined
 */
declare function generateOakIconURL(iconName: string): string;
/**
 * A wrapper around OakImage which uses the image-map.json file to map icon names to image paths.
 */
declare const OakIcon: (props: OakIconProps) => React$1.JSX.Element;

type ElementProp<C extends ElementType> = {
    element?: C;
};
type PolymorphicPropsWithoutRef<C extends ElementType> = ElementProp<C> & ComponentPropsWithoutRef<C>;
type PolymorphicRef<C extends React.ElementType> = ComponentPropsWithRef<C>["ref"];
type PolymorphicPropsWithRef<C extends ElementType> = ElementProp<C> & ComponentPropsWithoutRef<C> & {
    ref?: PolymorphicRef<C>;
};

type FlexStyleProps = DisplayStyleProps & {
    /**
     * Sets the `flex-direction` CSS property of the element.
     *
     * Accepts a `flex-direction` value or a responsive array of flex-direction values.
     */
    $flexDirection?: ResponsiveValues<CSSProperties["flexDirection"]>;
    /**
     * Sets the `flex-wrap` CSS property of the element.
     *
     * Accepts a `flex-wrap` value or a responsive array of flex-wrap values.
     */
    $flexWrap?: ResponsiveValues<CSSProperties["flexWrap"]>;
    /**
     * Sets the `align-items` CSS property of the element.
     *
     * Accepts an `align-items` value or a responsive array of `align-items` values.
     */
    $alignItems?: ResponsiveValues<CSSProperties["alignItems"]>;
    /**
     * Sets the `align-content` CSS property of the element.
     *
     * Accepts an `align-content` value or a responsive array of `align-content` values.
     */
    $alignContent?: ResponsiveValues<CSSProperties["alignContent"]>;
    /**
     * Sets the `justify-content` CSS property of the element.
     *
     * Accepts a `justify-content` value or a responsive array of `justify-content` values.
     */
    $justifyContent?: ResponsiveValues<CSSProperties["justifyContent"]>;
    /**
     * Sets the `align-self` CSS property of the element.
     *
     * Accepts an `align-self` value or a responsive array of `align-self` values.
     */
    $alignSelf?: ResponsiveValues<CSSProperties["alignSelf"]>;
    /**
     * Sets the `flex-grow` CSS property of the element.
     *
     * Accepts a `flex-grow` value or a responsive array of `flex-grow` values.
     */
    $flexGrow?: ResponsiveValues<CSSProperties["flexGrow"]>;
    /**
     * Sets the `flex-shrink` CSS property of the element.
     *
     * Accepts a `flex-shrink` value or a responsive array of `flex-shrink` values.
     */
    $flexShrink?: ResponsiveValues<CSSProperties["flexShrink"]>;
    /**
     * Sets the `order` CSS property of the element.
     *
     * Accepts an `order` value or a responsive array of `order` values.
     */
    $order?: ResponsiveValues<CSSProperties["order"]>;
    /**
     * Sets the `flex-basis` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $flexBasis?: ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
    /**
     * Sets the `gap` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $gap?: ResponsiveValues<OakAllSpacingToken | OakSpaceBetweenToken | null | undefined>;
    /**
     * Sets the `column-gap` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $columnGap?: ResponsiveValues<OakAllSpacingToken | OakSpaceBetweenToken | null | undefined>;
    /**
     * Sets the `row-gap` CSS property of the element.
     *
     * Accepts a spacing token or a responsive array of spacing tokens. Can be nulled.
     */
    $rowGap?: ResponsiveValues<OakAllSpacingToken | OakSpaceBetweenToken | null | undefined>;
    focusable?: boolean;
};

type OakLoadingSpinnerTokenSubset = Extract<OakAllSpacingToken, "spacing-20" | "spacing-24">;
type InternalShadowRectButtonProps = Omit<InternalButtonProps, "$pa" | "$ph" | "$pv" | "$pt" | "$pb" | "$ba" | "$borderRadius" | "$borderColor" | "$background" | "$color"> & {
    iconName?: OakIconName;
    iconAriaHidden?: boolean;
    /**
     *  we can set a custom icon if we want different sizes and padding
     */
    iconOverride?: React$1.ReactNode;
    isTrailingIcon?: boolean;
    /**
     *  we can arrange the icon vertically or horizontally
     */
    iconLayout?: FlexStyleProps["$flexDirection"];
    /**
     *  we can adjust the gap between the icon and the text
     */
    loadingSpinnerSize?: OakLoadingSpinnerTokenSubset;
    /**
     * whether the button should show a selected state
     */
    selected?: boolean;
    iconGap?: FlexStyleProps["$gap"];
    defaultTextColor: OakUiRoleToken;
    defaultBackground: OakUiRoleToken;
    defaultBorderColor: OakUiRoleToken;
    hoverTextColor: OakUiRoleToken;
    hoverBackground: OakUiRoleToken;
    hoverBorderColor: OakUiRoleToken;
    hoverUnderline?: boolean;
    disabledBackground: OakUiRoleToken;
    disabledBorderColor: OakUiRoleToken;
    disabledTextColor: OakUiRoleToken;
    width?: SizeStyleProps["$width"];
    maxWidth?: SizeStyleProps["$maxWidth"];
    hoverShadow?: OakDropShadowToken | null;
    pv?: SpacingStyleProps["$pv"];
    ph?: SpacingStyleProps["$ph"];
    font?: TypographyStyleProps["$font"];
    innerWidth?: SizeStyleProps["$width"];
    textAlign?: TypographyStyleProps["$textAlign"];
    display?: DisplayStyleProps["$display"];
} & PositionStyleProps;

type OakSecondaryButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakSecondaryButton: <C extends ElementType = "button">({ element, ...rest }: OakSecondaryButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type ButtonComponent = <C extends React$1.ElementType = "button">({ element, ...rest }: OakSecondaryButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;
type OakButtonWithDropdownProps = {
    primaryActionText: string;
    primaryActionIcon?: OakIconName;
    onPrimaryAction?: () => void;
    children?: React$1.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    leadingButtonIcon?: React$1.ReactNode;
    ariaDescription?: string;
    "data-testid"?: string;
    buttonComponent: ButtonComponent;
    dropdownTopSpacing?: ResponsiveValues<OakAllSpacingToken | OakSpaceBetweenToken | null | undefined>;
    flexWidth?: ResponsiveValues<OakCombinedSpacingToken | null | undefined>;
    closeOnChange?: boolean;
};
/**
 * A shared component that provides dropdown functionality for any button type.
 * Accepts the button component as a prop to eliminate code duplication.
 */
declare const OakButtonWithDropdown: {
    ({ primaryActionText, primaryActionIcon, onPrimaryAction, children, isLoading, disabled, ariaLabel, ariaDescription, leadingButtonIcon, "data-testid": dataTestId, buttonComponent: ButtonComponent, dropdownTopSpacing, flexWidth, closeOnChange, }: OakButtonWithDropdownProps): React$1.JSX.Element;
    Divider(): React$1.ReactElement;
    Item<C extends ElementType = "button">({ children, element, ...rest }: {
        children: React$1.ReactNode;
    } & OakSecondaryButtonProps & PolymorphicPropsWithoutRef<C>): React$1.ReactElement;
};

type OakCloseButtonProps = {
    onClose: () => void;
};
/**
 *
 * An icon button that can be used for closing items such as in navigation menus and modals.
 *
 * Design system: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=14493-15312>
 *
 *
 */
declare function OakCloseButton({ onClose, ...rest }: Readonly<OakCloseButtonProps>): React$1.JSX.Element;

type OakPrimaryButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor">;
/**
 *
 * A specific implementation of InternalRectButtoną
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakPrimaryButton: <C extends ElementType = "button">({ element, ...rest }: OakPrimaryButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type OakPrimaryInvertedButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callbacks are available for tracking focus events:ą
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakPrimaryInvertedButton: <C extends ElementType = "button">({ element, ...rest }: OakPrimaryInvertedButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type OakSecondaryButtonWithDropdownProps = {
    primaryActionText: string;
    primaryActionIcon?: OakIconName;
    onPrimaryAction?: () => void;
    children?: React$1.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    leadingButtonIcon?: React$1.ReactNode;
    ariaDescription?: string;
    "data-testid"?: string;
};
/**
 * A secondary button that takes custom menu items or .Item and .Divider compound components as children.
 *
 */
declare const OakSecondaryButtonWithDropdown: {
    (props: OakSecondaryButtonWithDropdownProps): React$1.JSX.Element;
    Divider(): React$1.ReactElement;
    Item<C extends ElementType = "button">({ children, element, ...rest }: {
        children: React$1.ReactNode;
    } & OakPrimaryInvertedButtonProps & PolymorphicPropsWithoutRef<C>): React$1.ReactElement;
};

type OakSmallPrimaryButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor" | "pv" | "ph" | "font">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakSmallPrimaryButton: <C extends ElementType = "button">({ element, ...rest }: OakSmallPrimaryButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type OakSmallPrimaryInvertedButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakSmallPrimaryInvertedButton: <C extends ElementType = "button">({ element, ...rest }: OakSmallPrimaryInvertedButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type OakSmallSecondaryButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor" | "pv" | "ph" | "font">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakSmallSecondaryButton: <C extends ElementType = "button">({ element, ...rest }: OakSmallSecondaryButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

declare const oakAllApectRatiosConst: readonly ["7:8", "2:3", "1:1", "3:2", "16:9"];
type OakAllApectRatios = (typeof oakAllApectRatiosConst)[number];
type OakAspectRatioValues = ResponsiveValues<OakAllApectRatios>;
type OakAspectRatioOuterProps = {
    ratio: OakAspectRatioValues;
};
type OakAspectRatioProps = {
    children?: React$1.ReactNode;
} & OakAspectRatioOuterProps;
/**
 *
 * AspectRatio provides a container of fixed aspect ratio
 *
 * ⚠️ To be deprecated
 * @deprecated
 *
 * ## Usage
 * Use this component when you want to ensure a box has a certain aspect ratio.
 * Wrap with component with <code>position: relative</code> and a width or min-width
 * The 'ratio' prop is responsive, so you can pass an array e.g. <code>["3:2", "16:9"]</code>
 * which will result in different aspect ratios on different screen widths.
 * For an example usage, see the <code>CardImage</code> component.
 */
declare const OakAspectRatio: FC<OakAspectRatioProps>;

/**
 * Map of the svg names to the actual svg components
 * Only components that are used in the OakSvg component should be added here
 * Should be used only in cases where OakIcon can't be used and if this list grows much bigger in the future we should consider refactoring
 */
declare const svgMap: {
    "header-underline": () => React$1.JSX.Element;
    underline: () => React$1.JSX.Element;
    "horizontal-rule": () => React$1.JSX.Element;
    "underline-3": () => React$1.JSX.Element;
    "button-border-top": () => React$1.JSX.Element;
    "button-border-bottom": () => React$1.JSX.Element;
    "button-border-left": () => React$1.JSX.Element;
    "button-border-right": () => React$1.JSX.Element;
    "icon-background": () => React$1.JSX.Element;
    scribble: () => React$1.JSX.Element;
};
type OakSvgNames = keyof typeof svgMap;
type OakSvgProps = OakBoxProps & {
    /**
     * The name of the svg to render
     * Accepts an svg name token from the svgMap
     */
    name: OakSvgNames;
    color?: OakColorToken;
};
/**
 * This is component used for rendering SVGs that don't belong to be rendered with OakIcon component
 * ie. UI elements that are not icons/illustratons but are part of the design system (underline, etc)
 */
declare const OakSvg: FC<OakSvgProps>;

type ImageProps = OakImageProps & {
    iconName?: undefined;
};
type IconProps = OakIconProps & {
    src?: undefined;
};
type OakRoundIconProps = IconProps | ImageProps;
/**
 * A wrapper around `OakIcon` which applies a rounded background.
 * Supports either an icon name or an image src
 */
declare const OakRoundIcon: ({ $background, $borderRadius, $width, $height, $pa, className, ...rest }: OakRoundIconProps) => React$1.JSX.Element;

type OakSmallSecondaryButtonWithDropdownProps = {
    primaryActionText: string;
    primaryActionIcon?: OakIconName;
    onPrimaryAction?: () => void;
    children?: React$1.ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    leadingButtonIcon?: React$1.ReactNode;
    ariaDescription?: string;
    "data-testid"?: string;
};
/**
 * A secondary button that allows children to be passed in as a dropdown menu.
 *
 */
declare const OakSmallSecondaryButtonWithDropdown: {
    (props: OakSmallSecondaryButtonWithDropdownProps): React$1.JSX.Element;
    Divider(): React$1.ReactElement;
    Item<C extends ElementType = "button">({ children, element, ...rest }: {
        children: React$1.ReactNode;
    } & OakSmallPrimaryInvertedButtonProps & PolymorphicPropsWithoutRef<C>): React$1.ReactElement;
};

type OakSmallSecondaryToggleButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor" | "pv" | "ph" | "font"> & {
    toggleOn?: boolean;
};
/**
 *
 * A specific implementation of InternalRectButton which can be displayed in two different states using the toggleOn prop
 *
 * This button does not manage its own state but could be adapted to do so at some point in the future
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakSmallSecondaryToggleButton: <C extends ElementType = "button">({ element, toggleOn, ...rest }: OakSmallSecondaryToggleButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type InternalShadowIconButtonProps = Omit<InternalButtonProps, "$pa" | "$ph" | "$pv" | "$ba" | "$borderRadius" | "$borderColor" | "$background" | "$color"> & {
    iconName?: OakIconName;
    isTrailingIcon?: boolean;
    defaultTextColor: OakUiRoleToken;
    hoverTextColor: OakUiRoleToken;
    disabledTextColor: OakUiRoleToken;
    hoverIconColor?: OakUiRoleToken;
    defaultIconColor?: OakRoundIconProps["$colorFilter"];
    disabledIconColor?: OakRoundIconProps["$colorFilter"];
    width?: SizeStyleProps["$width"];
    maxWidth?: SizeStyleProps["$maxWidth"];
} & PositionStyleProps & FlexStyleProps;

type OakSmallTertiaryInvertedButtonProps = Omit<InternalShadowIconButtonProps, "defaultBorderColor" | "defaultTextColor" | "hoverTextColor" | "disabledTextColor" | "iconSize">;
/**
 *
 * A specific implementation of InternalShadowIconButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakSmallTertiaryInvertedButton: <C extends ElementType = "button">({ element, ...rest }: OakSmallTertiaryInvertedButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type InternalShadowRoundButtonProps = Omit<InternalButtonProps, "$pa" | "$ph" | "$pv" | "$ba" | "$borderRadius" | "$borderColor" | "$background" | "$color"> & {
    iconName?: OakIconName;
    isTrailingIcon?: boolean;
    defaultTextColor: OakUiRoleToken;
    hoverTextColor: OakUiRoleToken;
    disabledTextColor: OakUiRoleToken;
    defaultIconBackground: OakUiRoleToken;
    hoverIconBackground: OakUiRoleToken;
    hoverIconColor?: OakUiRoleToken;
    disabledIconBackground: OakUiRoleToken;
    defaultIconColor?: OakRoundIconProps["$colorFilter"];
    disabledIconColor?: OakRoundIconProps["$colorFilter"];
    defaultIconBorderColor?: OakUiRoleToken;
    disabledIconBorderColor?: OakUiRoleToken;
    width?: SizeStyleProps["$width"];
    maxWidth?: SizeStyleProps["$maxWidth"];
    iconBackgroundSize: SizeStyleProps["$width"];
    iconSize: SizeStyleProps["$width"];
    hoverDropShadow?: OakDropShadowToken | null;
} & PositionStyleProps;
/**
 *
 * A styled button with round icons, not intended to be used directly.
 * Instead used by OakTertiaryButton and OakHintButton.
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`

 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const InternalShadowRoundButton: <C extends ElementType = "button">(props: InternalShadowRoundButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type OakTertiaryButtonProps = InternalButtonProps & {
    iconBackground?: OakRoundIconProps["$background"];
    iconColorFilter?: OakRoundIconProps["$colorFilter"];
    isTrailingIcon?: boolean;
    iconName?: OakIconName;
};
/**
 * An implementation of InternalShadowRoundButton, its a subtle button with no border and a round icon.
 *
 */
declare const OakTertiaryButton: <C extends ElementType = "button">({ element, isTrailingIcon, iconName, children, ...props }: OakTertiaryButtonProps & Partial<InternalShadowRoundButtonProps> & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type OakTertiaryInvertedButtonProps = InternalButtonProps & {
    iconBackground?: OakRoundIconProps["$background"];
    iconColorFilter?: OakRoundIconProps["$colorFilter"];
    isTrailingIcon?: boolean;
    iconName?: OakIconName;
};
/**
 * An implementation of InternalShadowRoundButton, its a subtle button with no border and a round icon.
 *
 */
declare const OakTertiaryInvertedButton: <C extends ElementType = "button">({ element, isTrailingIcon, iconName, children, ...props }: OakTertiaryInvertedButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type OakLeftAlignedButtonProps = Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor"> & {
    /**
     * Whether to align the icon to the right with space-between justification
     */
    rightAlignIcon?: boolean;
};
/**
 * A left-aligned button styled similarly to OakSmallPrimaryInvertedButton
 * with configurable icon alignment.
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 * `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`
 * called after a mouseEnter and mouseLeave event has happened
 */
declare const OakLeftAlignedButton: <C extends ElementType = "button">(props: OakLeftAlignedButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type OakCookieBannerProps = {
    /**
     * Triggered when the user clicks the "Hide this message" button.
     */
    onHide(): void;
    /**
     * Triggered when the user clicks the "Accept all cookies" button.
     */
    onAccept(): void;
    /**
     * Triggered when the user clicks the "Reject non-essential cookies" button.
     */
    onReject(): void;
    /**
     * Triggered when the user clicks the "Cookie settings" button.
     */
    onOpenSettings(): void;
    /**
     * The banner is intended to span the full width of the viewport.
     * this prop will set the maximum width of the inner content so that
     * it can line up with the rest of the content on the page.
     **/
    innerMaxWidth?: ResponsiveValues<OakAllSpacingToken>;
    /**
     * The current state of the cookie banner.
     *
     * - `initial` - The user has not made any choices.
     * - `accepted` - The user has accepted all cookies.
     * - `rejected` - The user has rejected non-essential cookies.
     */
    state: "accepted" | "rejected" | "initial";
    /**
     * Whether the banner should be fixed to the bottom of the viewport.
     *
     * @default false
     */
    isFixed?: boolean;
    /**
     * Optional z-index override of the banner.
     *
     * Defaults to token: `banner`
     *
     * 🚨 This prop is intended for use by consumers that do not use
     * the internal system of z-index tokens.
     */
    zIndex?: number;
};
/**
 * A banner presenting the user with options to accept or reject cookies.
 */
declare const OakCookieBanner: ({ state, innerMaxWidth, onOpenSettings, onHide, onAccept, onReject, isFixed, zIndex, }: OakCookieBannerProps) => React$1.JSX.Element;

type CookieConsentReducerState = {
    isSettingsModalOpen: boolean;
    bannerState: "initial" | "accepted" | "rejected" | "hidden";
};

type Party = {
    name: ReactNode;
    url: string;
};
type Consent = {
    /**
     * Unique identifier for the policy.
     */
    policyId: string;
    /**
     * The user's consent state for the policy.
     */
    consentState: ConsentState;
};
type PolicyConsent = {
    /**
     * Unique identifier for the policy.
     */
    policyId: string;
    /**
     * Label for the policy.
     */
    policyLabel: string;
    /**
     * Description of the policy. This should explain what the policy does and why it is needed.
     */
    policyDescription: ReactNode;
    /**
     * Whether the policy is strictly necessary for the site to function.
     * If true, the policy will be enabled by default and cannot be disabled.
     */
    isStrictlyNecessary: boolean;
    /**
     * List of 3rd parties that the policy allows data to be shared with.
     */
    policyParties: Party[];
    /**
     * The current consent state of the policy
     */
    consentState: ConsentStateWithPending;
};
type ConsentState = "granted" | "denied";
type ConsentStateWithPending = ConsentState | "pending";
type OakCookieConsentContextType = {
    /**
     * Whether the cookie settings modal is open.
     */
    isSettingsModalOpen: boolean;
    /**
     * List of cookie policies with the current consent state.
     */
    policyConsents: PolicyConsent[];
    /**
     * Open the cookie settings modal.
     **/
    openSettings(): void;
    /**
     * Close the cookie settings modal.
     */
    closeSettings(): void;
    /**
     * Show the cookie consent banner.
     */
    showBanner(): void;
    /**
     * Hide the cookie consent banner.
     */
    hideBanner(): void;
    /**
     * Reject all non-essential cookies from the settings modal.
     */
    rejectModalConsents(): void;
    /**
     * Confirm the user's consent settings from the modal.
     * @param consents The user's chosen consent settings.
     */
    confirmModalConsents(consents: Consent[]): void;
    /**
     * Consent to all cookies from the modal.
     */
    acceptModalConsents(): void;
    /**
     * Reject all non-essential cookies from the banner.
     */
    rejectBannerConsents(): void;
    /**
     * Accept all cookies from the banner.
     */
    acceptBannerConsents(): void;
    /**
     * The current state of the cookie banner.
     */
    bannerState: CookieConsentReducerState["bannerState"];
};
declare function getDefaultContextState(): OakCookieConsentContextType;
declare const OakCookieConsentContext: React$1.Context<OakCookieConsentContextType>;
type OakCookieConsentProviderProps = Pick<OakCookieConsentContextType, "policyConsents"> & {
    children: ReactNode;
    /**
     * Callback triggered when the user's consent settings change.
     * @param consents The user's updated consent settings.
     */
    onConsentChange(consents: Consent[]): void;
};
/**
 * Enables opening of the cookie settings modal and showing the cookie consent banner.
 */
declare function useCookieConsent(): {
    showBanner: () => void;
    openSettings: () => void;
};
/**
 * Provides a context through which the cookie consent UI can be configured and controlled
 *
 * Intended to be used with `OakCookieConsent`
 */
declare const OakCookieConsentProvider: ({ children, policyConsents, onConsentChange, }: OakCookieConsentProviderProps) => React$1.JSX.Element;

declare const OakInformativeModalBorderColor: React$1.Context<("transparent" | "text-primary" | "text-subdued" | "text-error" | "text-disabled" | "text-link-active" | "text-link-hover" | "text-link-visited" | "text-link-pressed" | "text-inverted" | "text-success" | "text-promo" | "bg-primary" | "bg-inverted" | "bg-inverted-semi-transparent" | "bg-neutral" | "bg-neutral-stronger" | "bg-btn-primary" | "bg-btn-primary-hover" | "bg-btn-primary-disabled" | "bg-btn-secondary" | "bg-btn-secondary-hover" | "bg-btn-secondary-disabled" | "bg-decorative1-main" | "bg-decorative1-subdued" | "bg-decorative1-very-subdued" | "bg-decorative2-main" | "bg-decorative2-subdued" | "bg-decorative2-very-subdued" | "bg-decorative3-main" | "bg-decorative3-subdued" | "bg-decorative3-very-subdued" | "bg-decorative4-main" | "bg-decorative4-subdued" | "bg-decorative4-very-subdued" | "bg-decorative5-main" | "bg-decorative5-subdued" | "bg-decorative5-very-subdued" | "bg-decorative6-main" | "bg-decorative6-subdued" | "bg-decorative6-very-subdued" | "bg-interactive-element1" | "bg-interactive-element2" | "bg-correct" | "bg-incorrect" | "bg-success" | "bg-error" | "icon-inverted" | "icon-disabled" | "icon-brand" | "icon-success" | "icon-error" | "icon-warning" | "icon-primary" | "icon-subdued" | "icon-link-active" | "icon-link-hover" | "icon-link-pressed" | "icon-link-visited" | "icon-decorative1" | "icon-decorative2" | "icon-decorative3" | "icon-decorative4" | "icon-decorative5" | "icon-decorative6" | "icon-promo" | "border-primary" | "border-inverted" | "border-neutral" | "border-neutral-lighter" | "border-neutral-stronger" | "border-brand" | "border-success" | "border-error" | "border-warning" | "border-decorative1" | "border-decorative1-stronger" | "border-decorative2" | "border-decorative2-stronger" | "border-decorative3" | "border-decorative3-stronger" | "border-decorative4" | "border-decorative4-stronger" | "border-decorative5" | "border-decorative5-stronger" | "border-decorative6" | "border-decorative6-stronger" | "code-blue" | "code-green" | "code-grey" | "code-pink" | ("transparent" | "text-primary" | "text-subdued" | "text-error" | "text-disabled" | "text-link-active" | "text-link-hover" | "text-link-visited" | "text-link-pressed" | "text-inverted" | "text-success" | "text-promo" | "bg-primary" | "bg-inverted" | "bg-inverted-semi-transparent" | "bg-neutral" | "bg-neutral-stronger" | "bg-btn-primary" | "bg-btn-primary-hover" | "bg-btn-primary-disabled" | "bg-btn-secondary" | "bg-btn-secondary-hover" | "bg-btn-secondary-disabled" | "bg-decorative1-main" | "bg-decorative1-subdued" | "bg-decorative1-very-subdued" | "bg-decorative2-main" | "bg-decorative2-subdued" | "bg-decorative2-very-subdued" | "bg-decorative3-main" | "bg-decorative3-subdued" | "bg-decorative3-very-subdued" | "bg-decorative4-main" | "bg-decorative4-subdued" | "bg-decorative4-very-subdued" | "bg-decorative5-main" | "bg-decorative5-subdued" | "bg-decorative5-very-subdued" | "bg-decorative6-main" | "bg-decorative6-subdued" | "bg-decorative6-very-subdued" | "bg-interactive-element1" | "bg-interactive-element2" | "bg-correct" | "bg-incorrect" | "bg-success" | "bg-error" | "icon-inverted" | "icon-disabled" | "icon-brand" | "icon-success" | "icon-error" | "icon-warning" | "icon-primary" | "icon-subdued" | "icon-link-active" | "icon-link-hover" | "icon-link-pressed" | "icon-link-visited" | "icon-decorative1" | "icon-decorative2" | "icon-decorative3" | "icon-decorative4" | "icon-decorative5" | "icon-decorative6" | "icon-promo" | "border-primary" | "border-inverted" | "border-neutral" | "border-neutral-lighter" | "border-neutral-stronger" | "border-brand" | "border-success" | "border-error" | "border-warning" | "border-decorative1" | "border-decorative1-stronger" | "border-decorative2" | "border-decorative2-stronger" | "border-decorative3" | "border-decorative3-stronger" | "border-decorative4" | "border-decorative4-stronger" | "border-decorative5" | "border-decorative5-stronger" | "border-decorative6" | "border-decorative6-stronger" | "code-blue" | "code-green" | "code-grey" | "code-pink" | null)[] | null) | undefined>;
type OakInformativeModalCloseAction = "close_button" | undefined;
type OakInformativeModalProps = {
    /**
     * The content of the modal.
     * Use with `<OakInformativeModalBody>` for best results.
     */
    children: ReactNode;
    /**
     * Slot for the footer of the modal.
     * Use with `<OakInformativeModalFooter>` for best results.
     */
    footerSlot?: ReactNode;
    /**
     * Indicates whether the modal is open or closed
     */
    isOpen: boolean;
    /**
     * Called when the modal is closed
     */
    onClose: (action?: OakInformativeModalCloseAction) => void;
    /**
     * The DOM container to render the modal portal into.
     *
     * @default document.body
     */
    domContainer?: Element;
    /**
     * Optional z-index override.
     *
     * Defaults to token: `modal-dialog`
     *
     * 🚨 This prop is intended for use by consumers that do not use
     * the internal system of z-index tokens.
     *
     * NB *The modal is rendered inside a portal so it will not respect the stacking context of its parent component*.
     */
    zIndex?: number;
    isLeftHandSide?: boolean;
    /**
     * Close the modal when clicking the background
     *
     * @default false;
     */
    closeOnBackgroundClick?: boolean;
    /**
     * Max width for tablet and desktop screens (768px+)
     * @default 600
     */
    largeScreenMaxWidth?: number;
} & Pick<HTMLAttributes<Element>, "aria-label" | "aria-description" | "aria-labelledby" | "aria-describedby">;
/**
 * Modal dialog with trapped focus and a close button. See the [design specification](https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=15135-2063)
 */
declare const OakInformativeModal: ({ children, footerSlot, domContainer, isOpen, onClose, zIndex, isLeftHandSide, closeOnBackgroundClick, largeScreenMaxWidth, ...rest }: OakInformativeModalProps) => React$1.ReactPortal | null;

type OakInformativeModalBodyProps = {
    children: ReactNode;
};
/**
 * Intended to be used in the `children` slot of `OakInformativeModal`
 * it applies some padding and margin to ensure that the contents
 * line up with the modal's header and footer
 */
declare const OakInformativeModalBody: (props: OakInformativeModalBodyProps) => React$1.JSX.Element;

type OakInformativeModalFooterProps = {
    children: ReactNode;
};
/**
 * Intended to be used in the `footer` slot of `OakInformativeModal`
 * it is ideal as a container for one or more buttons.
 * It switches from a horizontal to vertical layout on smaller screens
 */
declare const OakInformativeModalFooter: (props: OakInformativeModalFooterProps) => React$1.JSX.Element;

type OakCookieSettingsModalProps = Pick<OakInformativeModalProps, "isOpen" | "onClose" | "zIndex"> & {
    /**
     * Triggered when the user rejects all non-essential cookies.
     */
    onReject(): void;
    /**
     * Triggered when the user confirms their cookie consent settings.
     * @param consents The user's chosen consent settings.
     */
    onConfirm(consents: Consent[]): void;
    /**
     * Triggered when the user accepts all cookies.
     */
    onAccept(): void;
    /**
     * URL of the site's cookie policy.
     */
    policyURL: string;
    /**
     * List of cookie policies with the current consent state.
     */
    policyConsents: PolicyConsent[];
};
/**
 * Modal for managing cookie consent settings.
 */
declare const OakCookieSettingsModal: ({ isOpen, onClose, onReject, onConfirm, onAccept, policyURL, policyConsents, zIndex, }: OakCookieSettingsModalProps) => React$1.JSX.Element;

type OakCookieConsentProps = Pick<OakCookieSettingsModalProps, "policyURL"> & Pick<OakCookieBannerProps, "isFixed" | "innerMaxWidth"> & {
    /**
     * Optional stacking context for the entire consent UI
     *
     * 🚨 This prop is intended for use by consumers that do not use
     * the internal system of z-index tokens.
     */
    zIndex?: number;
};
/**
 * Connects `OakCookieBanner` and `OakCookieSettingsModal` to `OakCookieConsentProvider`.
 */
declare const OakCookieConsent: ({ policyURL, isFixed, innerMaxWidth, zIndex, }: OakCookieConsentProps) => React$1.JSX.Element;

type OakFieldsetProps = OakBoxProps;
/**
 * OakFieldset renders a custom `fieldset` component, removes default styling of fieldset.
  color, opacity, margin, padding, border and typography styles can be passed in also.
 */
declare const OakFieldset: any;

/**
 *
 * OakForm extends OakBox by taking the same props and style but applying them to a form element.
 *
 * ⚠️ To be deprecated
 * Use `<OakBox as="form">` instead
 * @deprecated Use `<OakBox as="form">` instead
 */
declare const OakForm: any;
type OakFormProps = OakBoxProps;

type OakLabelProps = TypographyStyleProps & ColorStyleProps;
/**
 * Label renders a `label` element, exposing all the typography props.
 * ## Usage
 * Use this component when you want to apply styles to a label, likely within
 * a form.
 */
declare const OakLabel: any;

type OakTextAreaProps = Omit<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & StyledTextAreaProps;
type StyledTextAreaProps = SizeStyleProps & BorderStyleProps & SpacingStyleProps & TypographyStyleProps & PositionStyleProps & ColorStyleProps;
/**
 *
 * A textarea that can be used for longer text inputs where text should wrap.
 *
 */
declare const OakTextArea: any;

type OakButtonAsRadioGroupProps = {
    label?: string;
    ariaLabel?: string;
    ariaLabelledby?: string;
    name: string;
    disabled?: boolean;
    children: React$1.ReactNode;
    onChange?: (value: string) => void;
    /**
     * Sets the value of the radio group
     * for use as a controlled component
     */
    value?: string;
    /**
     * Sets the initial value of the radio group
     * for use as an uncontrolled component
     */
    defaultValue?: string;
} & Pick<TypographyStyleProps, "$font"> & ColorStyleProps & Pick<FlexStyleProps, "$flexDirection" | "$alignItems" | "$gap" | "$flexWrap" | "$justifyContent">;
/**
 *
 * A react context supporting a list of mutually exclusive options rendered as buttons.
 *
 * ## Usage
 *
 * the nested items should be OakSecondaryButtonAsRadio or implement the same logic.
 * use the callback onChange to get the value of the clicked button.
 *
 */
declare const OakButtonAsRadioGroup: (props: OakButtonAsRadioGroupProps) => React$1.JSX.Element;

/**
 *
 * These components can be used with InternalCheckBoxWrapper which allows for customisable icons
 *
 * Several flavours of checkbox are created here:
 *  - Default
 *  - Hover decorations
 *  - Focus decorations
 *  - Hover + Focus decorations
 *
 * As they are styled components they can be further customised in implementation. Alternatively additional
 * components can be created here.
 *
 */
type BaseCheckBoxProps = {
    id: string;
    disabled?: boolean;
    value: string;
    name?: string;
    /**
     * Uncontrolled checked state
     */
    defaultChecked?: boolean;
    /**
     * Controlled checked state
     */
    checked?: boolean;
    onHovered?: (value: string, id: string, duration: number) => void;
    onChange?: (event: React$1.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React$1.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React$1.FocusEvent<HTMLInputElement>) => void;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "data-testid"?: string;
};

type InternalCheckBoxLabelProps = {
    labelAlignItems?: FlexStyleProps["$alignItems"];
    labelGap?: FlexStyleProps["$gap"];
    disabled?: boolean;
    pointerEvents?: CSSProperties$1["pointerEvents"];
    "data-testid"?: string;
} & OakLabelProps;

type OakCheckBoxProps = BaseCheckBoxProps & {
    checkboxSize?: OakAllSpacingToken;
    checkboxBorder?: OakBorderWidthToken;
    checkboxBorderRadius?: OakBorderRadiusToken;
    checkedBorderColor?: OakUiRoleToken;
    uncheckedBorderColor?: OakUiRoleToken;
    checkedIcon?: React$1.JSX.Element;
    checkedBackgroundFill?: boolean;
    hoverBorderRadius?: OakBorderRadiusToken;
    iconPadding?: OakAllSpacingToken;
    defaultColor?: OakUiRoleToken;
    disabledColor?: OakUiRoleToken;
    displayValue?: string;
} & InternalCheckBoxLabelProps;
/**
 *
 * Default checkbox which can be extended to create specialised checkboxes.
 * - if provided, displayValue is used to display a different value to the value prop.
 *
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 * onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 * ### onFocus
 *   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onBlur
 *    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onHovered
 *  `onHovered?: (id, value, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 *
 */
declare const OakCheckBox: (props: OakCheckBoxProps) => React$1.JSX.Element;

type OakFieldErrorProps = {
    children?: React$1.ReactNode;
};
/**
 *
 * OakFieldError renders a error message when passed children.
 *
 */
declare const OakFieldError: (props: OakFieldErrorProps) => React$1.JSX.Element | null;

type StyledInputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & SpacingStyleProps & SizeStyleProps;
type InternalTextInputProps = Omit<StyledInputProps, "placeholder"> & {
    /**
     * A textual hint or example to display before a value has been entered
     */
    placeholder?: string;
    /**
     * Fired only when the input is focused for the first time
     */
    onInitialFocus?: (e: FocusEvent<HTMLInputElement>) => void;
};

type OakFormInputProps = {
    /**
     * Disables user input and updates the appearance accordingly.
     */
    disabled?: boolean;
    /**
     * Sets the value. Use this in controlled components;
     */
    value?: string;
    /**
     * Sets the initial value. Use this for an uncontrolled component;
     */
    defaultValue?: string;
    /**
     * Used to target the input element in tests.
     */
    "data-testid"?: string;
    /**
     * Callback function that is called when the input value changes.
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Alters the appearance of the input field to indicate when the input is invalid.
     */
    invalid?: boolean;
    /**
     * Give the field a highlight to draw attention to it
     */
    invalidBorderColor?: OakUiRoleToken;
    color?: OakUiRoleToken;
    background?: OakUiRoleToken;
    borderColor?: OakUiRoleToken;
    hoverBackground?: OakUiRoleToken;
    hoverBorderColor?: OakUiRoleToken;
    focusBorderColor?: OakUiRoleToken;
    focusBackgroundColor?: OakUiRoleToken;
    disabledColor?: OakUiRoleToken;
    disabledBorderColor?: OakUiRoleToken;
    disabledBackgroundColor?: OakUiRoleToken;
    /**
     * The width of the surrounding div - the input will fill this with padding.
     */
    wrapperWidth?: SizeStyleProps["$width"];
    wrapperMaxWidth?: SizeStyleProps["$maxWidth"];
} & InternalTextInputProps;
/**
 * Default input which can be extended to create specialised inputs.
 */
declare const OakFormInput: ({ type, borderColor, focusBorderColor, focusBackgroundColor, background, hoverBackground, hoverBorderColor, disabledBackgroundColor, color, disabledBorderColor, disabledColor, invalid, invalidBorderColor, wrapperWidth, wrapperMaxWidth, ...props }: OakFormInputProps) => React$1.JSX.Element;

type OakJauntyAngleLabelProps = {
    label: string;
} & ComponentProps<typeof OakBox>;
declare const OakJauntyAngleLabel: (props: OakJauntyAngleLabelProps) => React$1.JSX.Element;

type OakMultilineTextProps = {
    /**
     * Set the textarea text on first render when state is controlled internally (i.e. if `value` has not been provided)
     */
    initialValue?: string;
    /**
     * Maximum number of characters
     */
    charLimit: number;
    ariaLabel?: string;
    /**
     * Display errors passed in as a prop
     */
    errors?: Array<string>;
    label?: string;
} & Omit<OakTextAreaProps, "$width">;
/**
 *
 * This component wraps OakTextArea and provides the following functionality
 * - Displays errors passed in as a prop
 * - Displays and updates character count on focus only
 * - Passes stored text to onChange and onBlur callbacks
 * - Allows state to be controlled either internally or externally
 *
 * ### Callbacks
 *
 * onBlur
 * onChange
 * onFocus: display character count
 *
 * ### Notes
 *  - Current method of clearing the component is to reset its key in the parent component
 *  - useImperativeHandle could be used to expose a clear method
 */
declare const OakMultilineText: React$1.ForwardRefExoticComponent<{
    /**
     * Set the textarea text on first render when state is controlled internally (i.e. if `value` has not been provided)
     */
    initialValue?: string;
    /**
     * Maximum number of characters
     */
    charLimit: number;
    ariaLabel?: string;
    /**
     * Display errors passed in as a prop
     */
    errors?: Array<string>;
    label?: string;
} & Omit<OakTextAreaProps, "$width"> & React$1.RefAttributes<HTMLTextAreaElement>>;
declare function useDevice<T>(values: T | Array<T>): T;

type RadioButtonLabelProps = {
    $labelAlignItems?: FlexStyleProps["$alignItems"];
    $labelGap?: FlexStyleProps["$gap"];
    disabled?: boolean;
} & OakLabelProps;
type OakRadioButtonProps = {
    id: string;
    label: ReactNode;
    value: string;
    tabIndex?: number;
    "data-testid"?: string;
    disabled?: boolean;
    required?: boolean;
    /**
     * Allows the focus ring to be disabled. This is useful when focus is indicated
     * by other means, such as a border or background color change.
     */
    disableFocusRing?: boolean;
    /**
     * Allows the size of the radio button to be customized.
     */
    radioOuterSize?: OakAllSpacingToken;
    /**
     * Allows the size of the inner "checked" circle of the radio button to be customized.
     */
    radioInnerSize?: OakAllSpacingToken;
    /**
     * Allows the width of the radio button border to be customized.
     */
    radioBorderWidth?: OakBorderWidthToken;
    /**
     * Allows the background color of the radio button to be customized.
     */
    radioBackground?: OakUiRoleToken;
    /**
     * Allows the width of the radio button border to be customized when the radio button is checked.
     */
    checkedRadioBorderWidth?: OakBorderWidthToken;
} & OakBoxProps & RadioButtonLabelProps;
/**
 * A radio button component.
 *
 * Use within `OakRadioGroup` component.
 */
declare const OakRadioButton: React$1.ForwardRefExoticComponent<{
    id: string;
    label: ReactNode;
    value: string;
    tabIndex?: number;
    "data-testid"?: string;
    disabled?: boolean;
    required?: boolean;
    /**
     * Allows the focus ring to be disabled. This is useful when focus is indicated
     * by other means, such as a border or background color change.
     */
    disableFocusRing?: boolean;
    /**
     * Allows the size of the radio button to be customized.
     */
    radioOuterSize?: OakAllSpacingToken;
    /**
     * Allows the size of the inner "checked" circle of the radio button to be customized.
     */
    radioInnerSize?: OakAllSpacingToken;
    /**
     * Allows the width of the radio button border to be customized.
     */
    radioBorderWidth?: OakBorderWidthToken;
    /**
     * Allows the background color of the radio button to be customized.
     */
    radioBackground?: OakUiRoleToken;
    /**
     * Allows the width of the radio button border to be customized when the radio button is checked.
     */
    checkedRadioBorderWidth?: OakBorderWidthToken;
} & {
    children?: React$1.ReactNode;
} & PositionStyleProps & SizeStyleProps & PaddingStyleProps & MarginStyleProps & ColorStyleProps & BorderStyleProps & DisplayStyleProps & DropShadowStyleProps & OpacityStyleProps & TransformStyleProps & TransitionStyleProps & TypographyStyleProps & ZIndexStyleProps & {
    onClick?: React$1.MouseEventHandler;
} & ScrollSnapStyleProps & {
    $labelAlignItems?: FlexStyleProps["$alignItems"];
    $labelGap?: FlexStyleProps["$gap"];
    disabled?: boolean;
} & React$1.RefAttributes<HTMLInputElement>>;

type RadioContextType = {
    currentValue: string;
    name: string;
    disabled?: boolean;
    onValueUpdated?: (event: React$1.ChangeEvent<HTMLInputElement>) => void;
};
declare const RadioContext: React$1.Context<RadioContextType>;
type OakRadioGroupProps = {
    label?: string;
    name: string;
    disabled?: boolean;
    children: React$1.ReactNode;
    onChange?: (event: React$1.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Sets the value of the radio group
     * for use as a controlled component
     */
    value?: string;
    /**
     * Sets the initial value of the radio group
     * for use as an uncontrolled component
     */
    defaultValue?: string;
} & Pick<TypographyStyleProps, "$font"> & ColorStyleProps & FlexStyleProps;
/**
 *
 * OakRadioGroup allow users to select a single item from a list of mutually exclusive options .
 * OakRadioGroup consists of a set of OakRadioButtons, and a label. Each radio includes a label and a visual selection indicator. A single radio button within the group can be selected at a time. Users may click or touch a radio button to select it, or use the Tab key to navigate to the group, the arrow keys to navigate within the group, and the Space key to select an option.
 * ## Usage
 *
 * use the callback onChange to get the value of the selected radio button.
 *
 */
declare const OakRadioGroup: (props: OakRadioGroupProps) => React$1.JSX.Element;

type OakSecondaryButtonAsRadioProps = {
    children?: React$1.ReactNode;
    value: string;
};
/**
 *
 * To be used as a child of OakButtonAsRadioGroup.
 * Highlights when the value matches the current value of the group.
 * Changes the current value of the group when clicked.
 *
 * ## Usage
 *
 * See OakButtonAsRadioGroup.
 *
 */
declare const OakSecondaryButtonAsRadio: ({ children, value, }: OakSecondaryButtonAsRadioProps) => React$1.JSX.Element;

declare const IconUp: any;
declare const IconDown: any;
type OakSelectProps = {
    id?: string;
    children: ReactNode;
    /**
     * Disables user input and updates the appearance accordingly.
     */
    disabled?: boolean;
    /**
     * Makes the input read-only. Preventing the user from changing the value.
     */
    readOnly?: boolean;
    /**
     * Sets the value. Use this in controlled components;
     */
    value?: string;
    /**
     * Used to target the input element in tests.
     */
    "data-testid"?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    /**
     * Alters the appearance of the input field to indicate whether the input is valid or invalid.
     */
    validity?: "valid" | "invalid";
    /**
     * Give the field a highlight to draw attention to it
     */
    isHighlighted?: boolean;
    validBorderColor?: OakUiRoleToken;
    invalidBorderColor?: OakUiRoleToken;
    validIconColor?: OakUiRoleToken;
    invalidIconColor?: OakUiRoleToken;
    color?: OakUiRoleToken;
    hoverBackground?: OakUiRoleToken;
    background?: OakUiRoleToken;
    borderColor?: OakUiRoleToken;
    focusRingDropShadows?: OakDropShadowToken[];
    disabledBackgroundColor?: OakUiRoleToken;
    readOnlyBorderColor?: OakUiRoleToken;
    disabledColor?: OakUiRoleToken;
    readOnlyColor?: OakUiRoleToken;
    highlightBackgroundColor?: OakUiRoleToken;
    $display?: DisplayStyleProps["$display"];
    name?: HTMLSelectElement["name"];
};
declare function OakSelect({ id, borderColor, readOnlyBorderColor, focusRingDropShadows, background, hoverBackground, disabledBackgroundColor, highlightBackgroundColor, color, disabledColor, readOnlyColor, validity, validBorderColor, invalidBorderColor, isHighlighted, $display, children, name, onChange, ...props }: Readonly<OakSelectProps>): React$1.JSX.Element;

type OakOptionProps = {
    children: ReactNode;
    disabled?: boolean;
    selected?: boolean;
    value?: string;
    asDefault?: boolean;
    $focusRingDropShadows?: OakDropShadowToken[];
};
declare function OakOption({ selected, disabled, value, children, asDefault, $focusRingDropShadows, }: Readonly<OakOptionProps>): React$1.JSX.Element;

type OakOptGroupProps = {
    label: string;
    children: ReactNode;
};
declare function OakOptGroup({ label, children }: Readonly<OakOptGroupProps>): React$1.JSX.Element;

type OakTextInputProps = {
    /**
     * Disables user input and updates the appearance accordingly.
     */
    disabled?: boolean;
    /**
     * Makes the input read-only. Preventing the user from changing the value.
     */
    readOnly?: boolean;
    /**
     * Sets the value. Use this in controlled components;
     */
    value?: string;
    /**
     * Sets the initial value. Use this for an uncontrolled component;
     */
    defaultValue?: string;
    /**
     * Used to target the input element in tests.
     */
    "data-testid"?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Alters the appearance of the input field to indicate whether the input is valid or invalid.
     */
    validity?: "valid" | "invalid";
    /**
     * Adds an icon to the input
     *
     * Defaults to the start of the input
     */
    iconName?: OakIconName;
    /**
     * Position the icon at the end of the input
     */
    isTrailingIcon?: boolean;
    /**
     * Give the field a highlight to draw attention to it
     */
    isHighlighted?: boolean;
    iconColor?: OakUiRoleToken;
    validBorderColor?: OakUiRoleToken;
    invalidBorderColor?: OakUiRoleToken;
    validIconColor?: OakUiRoleToken;
    invalidIconColor?: OakUiRoleToken;
    color?: OakUiRoleToken;
    hoverBackground?: OakUiRoleToken;
    background?: OakUiRoleToken;
    borderColor?: OakUiRoleToken;
    focusRingDropShadows?: OakDropShadowToken[];
    disabledBackgroundColor?: OakUiRoleToken;
    readOnlyBorderColor?: OakUiRoleToken;
    disabledColor?: OakUiRoleToken;
    readOnlyColor?: OakUiRoleToken;
    highlightBackgroundColor?: OakUiRoleToken;
    /**
     * The width of the surrounding div - the input and icon will fill this
     */
    wrapperWidth?: SizeStyleProps["$width"];
    wrapperMaxWidth?: SizeStyleProps["$maxWidth"];
    iconAlt?: string;
} & InternalTextInputProps;
/**
 * Default input which can be extended to create specialised inputs.
 */
declare const OakTextInput: ({ type, borderColor, readOnlyBorderColor, focusRingDropShadows, background, hoverBackground, disabledBackgroundColor, highlightBackgroundColor, color, disabledColor, readOnlyColor, validity, iconColor, validBorderColor, invalidBorderColor, validIconColor, invalidIconColor, iconName, iconAlt, isTrailingIcon, isHighlighted, wrapperWidth, wrapperMaxWidth, ...props }: OakTextInputProps) => React$1.JSX.Element;

/**
 *
 * These components can be used with InternalRadioWrapper which allows for customisable icons
 *
 * Several flavours of Radio are created here:
 *  - Default
 *  - Hover decorations
 *  - Focus decorations
 *  - Hover + Focus decorations
 *
 * As they are styled components they can be further customised in implementation. Alternatively additional
 * components can be created here.
 *
 */
type BaseRadioProps = {
    id: string;
    disabled?: boolean;
    value: string;
    name?: string;
    /**
     * Uncontrolled checked state
     */
    defaultChecked?: boolean;
    /**
     * Controlled checked state
     */
    checked?: boolean;
    /**
     * Called after a mouseEnter and mouseLeave event has happened.
     * Provides the hovered option's `value`, `id`, and hover `duration` (ms).
     */
    onHovered?: (value: string, id: string, duration: number) => void;
    /**
     * Called when the checked value changes.
     */
    onChange?: (event: React$1.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Called when the input receives focus.
     */
    onFocus?: (event: React$1.FocusEvent<HTMLInputElement>) => void;
    /**
     * Called when the input loses focus.
     */
    onBlur?: (event: React$1.FocusEvent<HTMLInputElement>) => void;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "data-testid"?: string;
};

declare const colorSchemes: ["primary", "decorative1", "decorative2", "decorative3", "decorative4", "decorative5", "decorative6", "transparent"];
type OakRadioAsButtonColorScheme = (typeof colorSchemes)[number];
type OakRadioAsButtonProps = Omit<BaseRadioProps, "defaultChecked" | "id" | "checked" | "variant" | "icon"> & {
    value?: HTMLInputElement["value"];
    innerRef?: React$1.RefObject<HTMLInputElement>;
    displayValue: React$1.ReactNode;
    /**
     * Whether to keep the icon color when the component is checked.
     *
     * Useful when the icon has an opinionated color that should be preserved when the component is checked.
     *
     * @default `false`
     */
    keepIconColor?: boolean;
    disabled?: HTMLInputElement["disabled"];
    "aria-labelledby"?: React$1.AriaAttributes["aria-labelledby"];
    "aria-label"?: React$1.AriaAttributes["aria-label"];
    /**
     * Sets the color scheme of the component.
     * Defaults to `"primary"`.
     */
    colorScheme?: OakRadioAsButtonColorScheme;
    width?: SizeStyleProps["$width"];
} & ({
    variant: "with-icon";
    icon: OakIconName;
} | {
    /**
     * Controls the appearance of the component.
     *
     * - `"default"`: Displays as a button
     * - `"with-icon"`: Displays an icon alongside the label
     * - `"with-radio"`: Displays a radio button
     *
     * @default `"default"`
     */
    variant?: "default" | "with-radio";
});
/**
 * A radio input styled as a button, to be used within `<OakRadioGroup/>`.
 */
declare const OakRadioAsButton: (props: OakRadioAsButtonProps) => React$1.JSX.Element;

type OakSearchFilterCheckBoxProps = Omit<BaseCheckBoxProps, "defaultChecked"> & {
    innerRef?: React$1.RefObject<HTMLInputElement>;
    displayValue: string;
    icon?: OakIconName;
    keepIconColor?: boolean;
};
/**
 *
 * A checkbox for search filters.
 *
 * Takes a displayValue and optional icon, for subject icons `subject-[subjectSlug]` should be used.
 *
 * ## To be renamed and refactored 🔀
 * This component will be renamed to `OakCheckboxAsButton` and refactored to have more variants
 *
 * ## Events
 * The following callbacks are available for tracking focus events:
 *
 * ### onChange
 * onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 * ### onFocus
 *   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onBlur
 *    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
 *
 * ### onHovered
 *  `onHovered?: (id, value, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 *
 */
declare const OakSearchFilterCheckBox: (props: OakSearchFilterCheckBoxProps) => React$1.JSX.Element;

interface OakCaptionCardProps {
    captionId: string;
    videoTitle: string;
    lessonUid: string;
    videoType: "lesson";
    lastUpdated: string;
    lastEdited?: string;
    checked?: boolean;
    highlighted?: boolean;
    disabled?: boolean;
    onCheckChanged?: (event: React$1.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (event: React$1.MouseEvent<HTMLDivElement>) => void;
    editHref: string;
    lessonHref: string;
    "data-testid"?: string;
}
/**
 * A caption card with links to the associated lesson and rev edit page.
 *
 * ## Events
 * The following callbacks are available for tracking checkbox events:
 *
 * ### onCheckChanged
 *  onCheckChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
 *
 */
declare const OakCaptionCard: (props: OakCaptionCardProps) => React$1.JSX.Element;

interface OakCaptionSearchProps {
    defaultValue?: string;
    /**
     * Callback function that is called when the search is submitted.
     * It receives the caption ID string as an argument.
     */
    onSearch?: (captionIdString: string) => void;
    /**
     * Indicates if there is an error in the search input.
     */
    hasError?: boolean;
    /**
     * Text to display when there is an error in the search input.
     */
    errorText?: string;
    /**
     * Indicates if the search is currently loading. will disable the input and button.
     */
    isLoading?: boolean;
}
declare const OakCaptionSearch: ({ onSearch, hasError, errorText, isLoading, defaultValue, }: OakCaptionSearchProps) => React$1.JSX.Element;

type OakFlexProps = FlexStyleProps & OakBoxProps;
declare const oakFlexCss: styled_components.FlattenInterpolation<styled_components.ThemedStyledProps<FlexStyleProps, styled_components.DefaultTheme>>;
/**
 * Flex sets `display: flex;` and exposes various flex props, along with Box
 * props.
 *
 * ## Usage
 * Before adding props to this component, think about whether it makes sense
 * to add it to Box instead, as this component extends that.
 */
declare const OakFlex: any;

type OakGridProps = OakBoxProps & {
    /**
     * Applies `row-gap` to the grid
     *
     * Accepts a spacing token or a responsive array of spacing tokens.
     */
    $rg?: ResponsiveValues<OakCombinedSpacingToken>;
    /**
     * Applies `column-gap` to the grid
     *
     * Accepts a spacing token or a responsive array of spacing tokens.
     */
    $cg?: ResponsiveValues<OakCombinedSpacingToken>;
    /**
     * Applies `grid-auto-rows` to the grid
     *
     * Accepts a `grid-auto-rows` value or a responsive array of `grid-auto-rows` values.
     */
    $gridAutoRows?: ResponsiveValues<CSSProperties$1["gridAutoRows"]>;
    /**
     * Applies `grid-template-areas` to the grid
     *
     * Accepts a `grid-template-areas` value or a responsive array of `grid-template-areas` values.
     */
    $gridTemplateAreas?: ResponsiveValues<CSSProperties$1["gridTemplateAreas"]>;
    /**
     * Applies `grid-template-columns` to the grid
     *
     * Accepts a `grid-template-columns` value or a responsive array of `grid-template-columns` values.
     */
    $gridTemplateColumns?: ResponsiveValues<CSSProperties$1["gridTemplateColumns"]>;
    /**
     * Applies `grid-template-rows` to the grid
     *
     * Accepts a `grid-template-rows` value or a responsive array of `grid-template-rows` values.
     */
    $gridTemplateRows?: ResponsiveValues<CSSProperties$1["gridTemplateRows"]>;
};
/**
 * Creates a grid layout
 *
 * Defaults to a 12 column grid
 */
declare const OakGrid: any;

type ColRowSpan = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type OakGridAreaProps = {
    /**
     * Determines the number of columns the element should span.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $colSpan: ResponsiveValues<ColRowSpan>;
    /**
     * Determines the number of rows the element should span.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $rowSpan?: ResponsiveValues<ColRowSpan>;
    /**
     * Sets the order of the element.
     *
     * Accepts a number or a responsive array of numbers.
     */
    $order?: ResponsiveValues<CSSProperties$1["order"]>;
    /**
     * The start column of the element.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $colStart?: ResponsiveValues<ColRowSpan>;
    /**
     * The end column of the element.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $colEnd?: ResponsiveValues<ColRowSpan>;
    /**
     * The start row of the element.
     *
     * Accepts a value from 0-12 or a responsive value of 0-12.
     */
    $rowStart?: ResponsiveValues<ColRowSpan>;
} & SpacingStyleProps;
/**
 *
 * OakGridArea is a flex container that should be used inside OakGrid.
 *
 * - There is no nesting of OakGridAreas
 * - Column and row arrangements are achieved through $colSpan, $rowSpan, $colStart, $colEnd, $rowStart, $rowEnd
 *
 */
declare const OakGridArea: any;

/**
 * This component will provide a default maxWidth and ph value, it take Flex props.
 * ## Usage
 * Use this component on pages to limit the max-width to a specific container.
 * This will make it easier to create full browser width or custom width containers on the same page
 * with different background colors / image url.
 */
declare const OakMaxWidth: any;

type OakAccordionProps = {
    /**
     * The header of the accordion
     */
    header: ReactNode;
    /**
     * The heading tag the header of the accordion is to assume
     */
    headerTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /**
     * Slot to place content after the header and outside the button
     */
    headerAfterSlot?: ReactNode;
    /**
     * Whether the accordion should be open initially
     */
    initialOpen?: boolean;
    /**
     * The content of the accordion
     */
    children: ReactNode;
    /**
     * The id of the accordion
     */
    id: string;
    /**
     * Which side the chevron icon appears on
     * @default "left"
     */
    chevronPosition?: "left" | "right";
    /**
     * The background color when the accordion is open
     * @default "bg-neutral"
     */
    openBackground?: OakUiRoleToken;
    /**
     * The color of the header text and chevron icon. When set, the icon is
     * automatically tinted to match via CSS filter so a single prop keeps both in sync.
     */
    $color?: OakUiRoleToken;
} & BorderStyleProps & FlexStyleProps & SpacingStyleProps;
/**
 * An accordion component that can be used to show/hide content
 */
declare const OakAccordion: (props: OakAccordionProps) => React$1.JSX.Element;

type OakBasicAccordionProps = {
    /**
     * The header of the accordion
     */
    header: ReactNode;
    /**
     * Whether the accordion should be open initially
     */
    initialOpen?: boolean;
    /**
     * The content of the accordion
     */
    children: ReactNode;
    /**
     * Optional subheading to display above the fold
     */
    subheading?: ReactNode;
    /**
     * The id of the accordion
     */
    id: string;
} & BorderStyleProps & FlexStyleProps;
declare const OakBasicAccordion: ({ header, children, id, initialOpen, subheading, ...styleProps }: OakBasicAccordionProps) => React$1.JSX.Element;

type OakCollapsibleContentProps = ComponentProps<typeof OakFlex> & {
    /**
     * Whether the content is displayed or not
     */
    isOpen: boolean;
};
/**
 * A filled scrollable box that can be hidden with the `isOpen` prop.
 * Useful for hiding content that is not immediately relevant
 */
declare const OakCollapsibleContent: ({ isOpen, children, id, ...rest }: OakCollapsibleContentProps) => React$1.JSX.Element;

type OakKbdProps = {
    children: ReactNode;
};
/**
 * Represents textual user input from a keyboard, voice input, or any other text entry device.
 * */
declare const OakKbd: ({ children }: OakKbdProps) => React$1.JSX.Element;

/**
 * This component will visually hide its contents but will still be available
 * to screen readers, assitive technology, and scrapers.
 * ## Usage
 * Use this component in places where content shouldn't be visible, but should
 * be accessible to assistive technology.
 */
declare const OakScreenReader: any;

type OakLoadingSpinnerProps = Pick<SizeStyleProps, "$width"> & ColorStyleProps & {
    loaderColor?: OakUiRoleToken;
    /**
     * Delay the appearance of the spinner
     *
     * Accepts a number in milliseconds
     */
    $delay?: number;
};
/**
 *
 * A loading spinner of variable size.
 *
 */
declare const OakLoadingSpinner: (props: OakLoadingSpinnerProps) => React$1.JSX.Element;

declare const oakHeadingTagsConst: readonly ["div", "h1", "h2", "h3", "h4", "h5", "h6"];
type OakHeadingTag = (typeof oakHeadingTagsConst)[number];
declare const oakHeadingTags: ("div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6")[];
type OakHeadingTagProps = {
    children?: React$1.ReactNode;
    id?: string;
    /**
     * HTML tag to be used for the heading
     *
     * Accepts a heading tag token
     */
    tag: OakHeadingTag;
    ariaLabel?: string;
    ariaHidden?: boolean;
};
declare const HeadingTagComponent: FC<OakHeadingTagProps>;
type OakHeadingProps = TypographyStyleProps & OakHeadingTagProps & ColorStyleProps & OpacityStyleProps & MarginStyleProps;
/**
 *
 * OakHeading can be one of the following style tags dependant on its role: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6".
 * Use the controls to view different font styles.
 *
 */
declare const OakHeading: any;

type OakInlineBannerTypes = "info" | "neutral" | "success" | "alert" | "error" | "warning";
type OakInlineBannerVariants = "regular" | "large";
type OakInlineBannerProps = OakFlexProps & {
    /**
     * If true the modal will be open, if false it will be closed
     */
    isOpen: boolean;
    /**
     * The optional title to display in the banner
     */
    title?: string;
    /**
     * The message to display in the banner
     */
    message: string | ReactNode;
    /**
     * The type of banner to display
     */
    type?: OakInlineBannerTypes;
    /**
     * The icon to display in the banner
     */
    icon?: OakIconName;
    /**
     * The color filter to apply to the icon
     */
    iconColorFilter?: OakUiRoleToken;
    /**
     * If true show a loading spinner instead of an icon
     */
    isLoading?: boolean;
    /**
     * The optional call to action to display in the banner
     */
    cta?: ReactNode;
    /**
     * If true the banner can be dismissed (show close icon)
     */
    canDismiss?: boolean;
    /**
     * The function to call when the banner is dismissed
     */
    onDismiss?: () => void;
    /**
     * Props to override the close button
     */
    closeButtonOverrideProps?: Partial<typeof InternalShadowRoundButton>;
    /**
     * The variant of an Inline Banner to display
     */
    variant?: OakInlineBannerVariants;
    titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
type BannerTypes = {
    [key in OakInlineBannerTypes]: {
        icon: OakIconName;
        iconColorFilter: OakUiRoleToken;
        backgroundColour: OakUiRoleToken;
        borderColour: OakUiRoleToken;
    };
};
declare const bannerTypes: BannerTypes;
type OakInlineBannerVariantProps = {
    [key in OakInlineBannerVariants]: {
        defaultIconDimensions: Partial<SizeStyleProps>;
        loadingSpinnerDimensions: Partial<OakLoadingSpinnerProps>;
        heading: Partial<OakHeadingProps>;
        closeButtonWrapper?: Partial<OakBoxProps>;
        ctaWrapper?: Partial<OakBoxProps>;
        flexDirection: FlexStyleProps["$flexDirection"];
        bannerPadding: PaddingStyleProps["$pa"];
        textContentGap?: FlexStyleProps["$gap"];
    };
};
declare const bannerVariants: OakInlineBannerVariantProps;
/**
 * A inline banner that can be used to display important information to the user.
 *
 * ## Props
 *
 * - **isOpen** \-                      If true the banner will be displayed
 * - **title?** \-                      Optional title to display in the banner, without this the banner will be more compact
 * - **message** \-                     Message to display in the banner
 * - **type?** \-                       Optional type of banner to display (info, neutral, success, alert, error, warning) (default: info)
 * - **icon?** \-                       Optional icon to display in the banner
 * - **iconColorFilter?** \-            Optional color filter to apply to the icon
 * - **isLoading?** \-                  If true show a loading spinner instead of an icon
 * - **cta?** \-                        Optional call to action to display in the banner (ReactNode)
 * - **canDismiss?** \-                 If true the banner can be dismissed (show close icon) (default: false)
 * - **onDismiss?** \-                  Function called when the banner is dismissed
 * - **closeButtonOverrideProps?** \-   Props to override the close button (aria-label, etc)
 * - **variant?** \-                    The variant of the inline banner to display (regular, large) (default: regular)
 * - **...rest** \-                     Other props to be passed to the wrapper OakFlex component (can be used to override styles of the banner)
 */
declare const OakInlineBanner: ({ isOpen, title, message, type, icon, iconColorFilter, isLoading, cta, canDismiss, onDismiss, closeButtonOverrideProps, variant, titleTag, ...props }: OakInlineBannerProps) => React$1.JSX.Element;

type OakModalCenterProps = {
    /**
     * The content of the modal. Use with `<OakModalCenterBody>` for best results.
     */
    children: ReactNode;
    /**
     * Determines whether to show the modal or not
     */
    isOpen: boolean;
    /**
     * Override HTMLAttributes & OakFlex props for the modal container
     */
    modalFlexProps?: Partial<OakFlexProps & HTMLAttributes<Element>>;
    /**
     * Override HTMLAttributes & OakFlex props for the outer modal container
     */
    modalOuterFlexProps?: Partial<OakFlexProps & HTMLAttributes<Element>>;
    /**
     * Override HTMLAttributes & OakFlex props for the inner modal container
     */
    modalInnerFlexProps?: Partial<OakFlexProps & HTMLAttributes<Element>>;
    /**
     * Override HTMLAttributes & OakFlex props for the backdrop container
     */
    backdropFlexProps?: Partial<OakFlexProps & HTMLAttributes<Element>>;
    /**
     * If true, clicking the backdrop will not call onClose
     */
    disableBackdropClick?: boolean;
    /**
     * If true, pressing the escape key will not call onClose
     */
    disableEscapeKey?: boolean;
    /**
     * If true, the close button will be hidden
     */
    hideCloseButton?: boolean;
    /**
     * Called when the modal is closed via the close button, backdrop click, or escape key
     */
    onClose?: () => void;
    /**
     * The DOM container to render the modal portal into.
     */
    domContainer?: Element;
    /**
     * Slot for the footer of the modal
     */
    footerSlot?: ReactNode;
    /**
     * Override for returnFocus behavior of FocusOn
     */
    returnFocus?: (returnTo: Element) => boolean | FocusOptions;
};
/**
 * Centered modal dialog with trapped focus, close button, backdrop click, and escape key handling.
 *
 * ## Props
 *
 * - **isOpen** \-                  If true the modal will be open, if false it will be closed
 * - **onClose** \-                 Called when the modal is closed via the close button, backdrop click, or escape key
 * - **children** \-                The content of the modal. Use with `<OakModalCenterBody>` for best results.
 * - **domContainer** \-            The DOM container to render the modal portal into.
 * - **disableBackdropClick?** \-   If true, clicking the backdrop will not call onClose
 * - **disableEscapeKey?** \-       If true, pressing the escape key will not call onClose
 * - **hideCloseButton?** \-        If true, the close button will be hidden
 * - **modalFlexProps?** \-         Override HTMLAttributes & OakFlex props for the modal container
 * - **modalOuterFlexProps?** \-    Override HTMLAttributes & OakFlex props for the outer modal container
 * - **modalInnerFlexProps?** \-    Override HTMLAttributes & OakFlex props for the inner modal container
 * - **backdropFlexProps?** \-      Override HTMLAttributes & OakFlex props for the backdrop container
 * - **footerSlot?** \-             Fixed area at the bottom of the modal, this will remain fixed in view if the content is scrollable
 */
declare const OakModalCenter: ({ children, domContainer, isOpen, onClose, disableBackdropClick, disableEscapeKey, hideCloseButton, modalFlexProps, modalOuterFlexProps, modalInnerFlexProps, backdropFlexProps, footerSlot, returnFocus, }: OakModalCenterProps) => React$1.JSX.Element;

type OakModalCenterBodyProps = {
    /**
     * The name of the icon to display. Accepts an icon name token
     */
    iconName: OakIconName;
    /**
     * The title of the modal
     */
    title: string;
    /**
     * The content of the modal body
     */
    children: ReactNode;
    /**
     * Override props for the heading
     */
    headingOverride?: Partial<OakHeadingProps>;
    /**
     * Override props for the icon
     */
    iconOverride?: Partial<OakIconProps>;
    /**
     * Hide icon
     */
    hideIcon?: boolean;
};
/**
 * Intended to be used within the `OakModalCenter` component
 * it provides a consistent layout for the body of the modal
 * It includes an icon, a title, and the children passed to it.
 * The icon and title can be extended/overridden with the `iconOverride` and `headingOverride` props.
 *
 *  ## Props
 *
 * - **iconName** \-            The name of the icon to display. Accepts an icon name token
 * - **title** \-               The title of the modal
 * - **children** \-            The content of the modal body
 * - **headingOverride** \-     Override HTMLAttributes & OakHEading props for the heading
 * - **iconOverride** \-        Override HTMLAttributes & OakIcon props for the icon
 */
declare const OakModalCenterBody: ({ children, iconName, title, headingOverride, iconOverride, hideIcon, }: OakModalCenterBodyProps) => React$1.JSX.Element;

type OakTagFunctionalProps = {
    label: string;
    iconName?: OakIconName;
    isTrailingIcon?: boolean;
    useSpan?: boolean;
} & Omit<OakFlexProps, "onClick" | "label">;
declare const OakTagFunctional: (props: OakTagFunctionalProps) => React$1.JSX.Element;

type OakToastProps = {
    message: React$1.ReactNode;
    variant: VariantKey;
    autoDismissDuration?: number;
    autoDismiss: boolean;
    showIcon: boolean;
    onClose?: () => void;
    id?: number;
    showClose?: boolean;
};
type VariantKey = "green" | "yellow" | "pink" | "blue" | "aqua" | "light" | "dark" | "error" | "success";
declare const OakToast: ({ message, variant, autoDismiss, autoDismissDuration, showIcon, onClose, id, showClose, }: OakToastProps) => React$1.JSX.Element;

type InternalTooltipProps = OakFlexProps & HTMLAttributes<Element> & {
    children?: ReactNode;
    tooltipPosition?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
};

type OakTooltipProps = InternalTooltipProps & {
    /**
     * The target element that triggers the tooltip
     */
    children: ReactElement;
    /**
     * The content of the tooltip
     */
    tooltip: ReactNode;
    /**
     * Whether the tooltip is open or not
     */
    isOpen?: boolean;
    /**
     * The DOM container to render the tooltip portal into
     *
     * @default document.body
     */
    domContainer?: Element;
};
/**
 * A tooltip with oven-ready styling and positioning.
 */
declare const OakTooltip: ({ tooltipPosition, children, tooltip, isOpen, domContainer, ...props }: OakTooltipProps) => React$1.JSX.Element;

type OakFocusIndicatorProps = {
    hoverBackground?: OakUiRoleToken;
    dropShadow?: OakDropShadowToken;
    hoverDropShadow?: OakDropShadowToken;
    activeDropShadow?: OakDropShadowToken;
};
/**
 * Wrap focusable components `<a/>`/`<button/>` and this will add focus styles then the inner element is focused
 */
declare const OakFocusIndicator: any;

type InternalStyledSvgProps = {
    $fill?: ResponsiveValues<OakUiRoleToken>;
    $stroke?: ResponsiveValues<OakUiRoleToken>;
    $strokeWidth?: ResponsiveValues<OakBorderWidthToken>;
};

type OakHandDrawnFocusUnderlineProps = {
    FocusUnderlineColor?: InternalStyledSvgProps["$fill"];
} & SpacingStyleProps & SizeStyleProps;
/**
 * A Drawn FocusUnderline svg inside a flex container
 *
 * use prop FocusUnderlineColor to change the color of the FocusUnderline
 *
 * change the sizeProps of the flex container to change the size and dimentions of the FocusUnderline
 */
declare const OakHandDrawnFocusUnderline: (props: OakHandDrawnFocusUnderlineProps) => React$1.JSX.Element;

type OakAnchorTargetProps = PaddingStyleProps;
/**
 *  * AnchorTarget is a component to enable in-page linking to a particular section
 *
 * Styled `span` component.
 *
 * ## Usage
 *
 * Drop AnchorTarget inside a relative or absolulely positioned element without content, passing
 * it a unique 'id'. Then link it elsewhere using `<a href='#${id}' />`.
 *
 * */
declare const OakAnchorTarget: any;

type InternalLinkProps = {
    /**
     * The icon to display before or after the children.
     */
    iconName?: OakIconProps["iconName"];
    /**
     * Whether the icon should be displayed after the children.
     */
    isTrailingIcon?: boolean;
    /**
     * Displays a loading spinner in place of the icon.
     */
    isLoading?: boolean;
    color: OakUiRoleToken;
    visitedColor: OakUiRoleToken;
    hoverColor: OakUiRoleToken;
    activeColor: OakUiRoleToken;
    disabledColor: OakUiRoleToken;
    textDecoration?: OakTextDecoration;
};

type OakHoverLinkProps = Pick<InternalLinkProps, "iconName" | "isTrailingIcon" | "isLoading"> & {
    iconWidth?: OakAllSpacingToken;
    iconHeight?: OakAllSpacingToken;
};
type OakHoverLinkComponent = <C extends React$1.ElementType = "a">(props: {
    /**
     * This colours the link as disabled, but does not disable the link.
     * It should be used when the link is wrapped in an element which prevents cursor interaction, such as a card
     */
    displayDisabled?: boolean;
} & PolymorphicPropsWithRef<C> & OakHoverLinkProps) => React$1.ReactNode;
/**
 * deprecated - use `<OakLink />` instead
 * @deprecated
 *
 * A link with an optional icon where underline is shown on hover.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 * A linkDisabled prop is also available to disable the link even when it is not a button.
 *
 */
declare const OakHoverLink: OakHoverLinkComponent;

type Variant = "primary" | "secondary";

type OakLinkProps = Pick<InternalLinkProps, "iconName" | "isTrailingIcon" | "isLoading"> & {
    /**
     * Style variant of the OakLink component: "primary" | "secondary"
     *
     * @default "primary"
     */
    variant?: Variant;
} & Pick<TypographyStyleProps, "$font">;
type OakLinkComponent$1 = <C extends React$1.ElementType = "a">(props: PolymorphicPropsWithRef<C> & OakLinkProps) => React$1.ReactNode;
/**
 * A link with an optional icon and loading state.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 */
declare const OakLink: OakLinkComponent$1;

type OakPaginationProps = {
    currentPage: number;
    totalPages: number;
    nextHref?: string;
    prevHref?: string;
    paginationHref: string;
    pageName: string;
    onPageChange: (page: number) => void;
};
declare const OakPagination: ({ totalPages, nextHref, prevHref, paginationHref, pageName, onPageChange, currentPage, }: OakPaginationProps) => React$1.JSX.Element | null;

type Url = string | UrlObject;
type OakPrimaryNavItemProps = {
    href: Url;
    isCurrent?: boolean;
    shallow?: boolean;
    children: ReactNode;
} & OakPrimaryButtonProps & OakPrimaryInvertedButtonProps;
/**
 *
 * A specific implementation of OakPrimaryButton and OakPrimaryInvertedButton rendering
 * relevant view depending on isCurrent prop
 *
 * ⚠️ To be deprecated
 * @deprecated
 */
declare const OakPrimaryNavItem: ({ href, isCurrent, shallow, children, }: OakPrimaryNavItemProps) => React$1.JSX.Element;

type OakPrimaryNavProps = {
    ariaLabel?: string;
    navItems: OakPrimaryNavItemProps[];
};
/**
 * A row of buttons for navigating between different sections
 *
 * ⚠️ To be deprecated
 * @deprecated
 */
declare const OakPrimaryNav: ({ ariaLabel, navItems }: OakPrimaryNavProps) => React$1.JSX.Element;

type OakSecondaryLinkProps = {
    displayDisabled?: boolean;
} & Pick<InternalLinkProps, "iconName" | "isTrailingIcon" | "isLoading">;
type OakLinkComponent = <C extends React$1.ElementType = "a">(props: PolymorphicPropsWithRef<C> & OakSecondaryLinkProps) => React$1.ReactNode;
/**
 * deprecated - use `<OakLink variant="secondary"/>` instead
 * @deprecated
 *
 * A black link with an optional icon and loading state.
 *
 * Defaulting to a `HTMLAnchorElement` this component is polymorphic and can be rendered as a button or any other element.
 *
 */
declare const OakSecondaryLink: OakLinkComponent;

type Tab<T> = {
    label: T;
} & ({
    type: "button";
} | {
    type: "link";
    href: string;
});
type OakTabsProps<T extends string> = {
    sizeVariant: ResponsiveValues<"default" | "compact">;
    colorVariant: "black" | "white";
    /**
     * A list of the tabs to be rendered.
     * Accepts a `label` and a `type` property for each tab. If the type is `link` then a `href` is required.
     */
    tabs: Array<Tab<T>>;
    activeTab: T;
    /**
     * Optional callback fn for the tab buttons.
     *
     */
    onTabClick?: (tab: T, event: Event) => void;
};
declare function OakTabs<T extends string>(props: Readonly<OakTabsProps<T>>): React$1.JSX.Element;

type OakCardProps = {
    /**
     * The heading text of the card.
     */
    heading: string;
    /**
     * The heading level of the card.
     */
    headingLevel?: OakHeadingTag;
    /**
     * The URL that the card links to.
     */
    href: string;
    /**
     * The orientation of the card.
     */
    cardOrientation?: "row" | "column";
    /**
     * The width of the card.
     */
    cardWidth?: OakCombinedSpacingToken;
    /**
     * The source URL for the image to be displayed in the card.
     */
    imageSrc?: string;
    /**
     * The alternative text for the image, used for accessibility.
     */
    imageAlt?: string;
    /**
     * The aspect ratio of the image.
     */
    aspectRatio?: "1/1" | "4/3";
    /**
     * The subcopy text of the card.
     */
    subCopy?: string;
    /**
     * The color of the subcopy text.
     */
    subCopyColor?: OakUiRoleToken;
    /**
     * The name of a tag to be displayed in the card.
     */
    tagName?: string;
    /**
     * The background colour of the tag.
     */
    tagBackground?: OakUiRoleToken;
    /**
     * The text to be displayed next to the link icon in the card.
     */
    linkText?: string;
    /**
     * The name of the icon to be displayed next to the link text in the card.
     */
    linkIconName?: OakIconName;
    /**
     * The background colour of the card on hover.
     */
    hoverBackground?: OakUiRoleToken;
};
/**
 * A highly customisable card component that displays a heading and takes a href at minimum.
 *
 * It can also display an image, subcopy, a tag, and a link with an icon.
 *
 * The card can be oriented in a row or column layout and its width can be adjusted using spacing tokens.
 * The image aspect ratio can be set to either 1:1 or 4:3.
 */
declare const OakCard: ({ heading, headingLevel, href, cardOrientation, cardWidth, imageSrc, imageAlt, aspectRatio, subCopy, subCopyColor, tagName, tagBackground, linkText, linkIconName, hoverBackground, }: OakCardProps) => React$1.JSX.Element;

type OakBreadcrumb = {
    text: string;
    href: string;
};
type OakBreadcrumbWithoutHref = {
    text: string;
};
type OakBreadcrumbsProps = {
    /**
     * The list of breadcrumbs to display in the UI
     */
    breadcrumbs: [...OakBreadcrumb[], OakBreadcrumbWithoutHref];
};
/**
 * The breadcrumb component helps users to understand where they are within a website’s structure and move between levels.
 */
declare const OakBreadcrumbs: ({ breadcrumbs, }: Readonly<OakBreadcrumbsProps>) => React$1.JSX.Element;

type OakDownloadsAccordionProps = {
    /**
     * Text to render in the subheading
     */
    downloadsText: string;
    /**
     * Event handler for select all checkbox
     */
    handleToggleSelectAll: () => void;
    /**
     * State of select all checkbox
     */
    selectAllChecked: boolean;
    /**
     * The content of the accordion
     */
    children: ReactNode;
    /**
     * The id of the accordion
     */
    id: string;
    /**
     * Whether the accordion starts in the open state, defaults to false
     */
    initialOpen?: boolean;
} & FlexStyleProps & OakBoxProps & ColorStyleProps;
/**
 * OakDownloadsAccordion
 *
 */
declare const OakDownloadsAccordion: ({ initialOpen, ...props }: OakDownloadsAccordionProps) => React$1.JSX.Element;

type OakInlineRegistrationBannerProps = {
    onSubmit: (email: string) => Promise<string | undefined>;
    headerText: React$1.ReactNode;
    bodyText: React$1.ReactNode;
} & ColorStyleProps & BorderStyleProps;
declare const OakInlineRegistrationBanner: (props: OakInlineRegistrationBannerProps) => React$1.JSX.Element;

type OakTeacherNotesInlineProps = {
    sanitizedHtml?: string | TrustedHTML;
};
declare const OakTeacherNotesInline: ({ sanitizedHtml, }: OakTeacherNotesInlineProps) => React$1.JSX.Element;

type EditorContainerProps = {
    editorNode: React$1.ReactNode;
    onBoldClick: () => void;
    onBulletListClick: () => void;
    isBold: boolean;
    isBulletList: boolean;
    remainingCharacters: number;
};
type OakTeacherNotesModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onShareClicked: () => void;
    progressSaved: boolean;
    noteShared: boolean;
    error?: boolean;
    termsAndConditionsHref: string;
    shareLinkDisabled?: boolean;
    footer?: React$1.ReactNode;
} & EditorContainerProps;
declare const OakTeacherNotesModal: ({ isOpen, onClose, onShareClicked, progressSaved, noteShared, error, termsAndConditionsHref, shareLinkDisabled, footer, ...rest }: OakTeacherNotesModalProps) => React$1.JSX.Element;

type OakTertiaryOLNavProps = {
    title?: string;
    items: {
        title: string;
        href: string;
    }[];
    ariaLabel?: string;
    anchorTarget?: string;
    onClick?: (event: React$1.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};
declare const OakTertiaryOLNav: ({ items, ariaLabel, title, anchorTarget, onClick, ...rest }: OakTertiaryOLNavProps) => React$1.JSX.Element;

type OakPupilContentGuidance = {
    contentguidanceLabel: string | null;
    contentguidanceDescription: string | null;
    contentguidanceArea: string | null;
};
type OakPupilJourneyContentGuidanceProps = {
    /**
     * If true the modal will be open, if false it will be closed
     */
    isOpen: boolean;
    /**
     * Callback function to be called when the pupil accepts the content guidance
     */
    onAccept: () => void;
    /**
     * Callback function to be called when the pupil declines the content guidance
     */
    onDecline: () => void;
    /**
     * Title of the modal
     */
    title?: string;
    /**
     * An array of objects containing the content guidance label, description and area
     */
    contentGuidance?: OakPupilContentGuidance[] | null;
    /**
     * The level of supervision required for the content
     */
    supervisionLevel?: string | null;
    /**
     * The text to be displayed on the accept button
     */
    acceptText?: string;
    /**
     * The text to be displayed on the decline button
     */
    declineText?: string;
    /**
     * The icon to be displayed on the decline button
     */
    declineIcon?: OakIconName;
};
declare const removedGuidanceDuplicates: (contentGuidance?: OakPupilContentGuidance[] | null) => (string | null)[];
/**
 * This component is used to display content guidance to the pupil before they proceed to the lesson
 *
 * ##Props
 *
 * - **isOpen** \-                  If true the modal will be open, if false it will be closed
 * - **onAccept** \-                Callback function to be called when the pupil accepts the content guidance
 * - **onDecline** \-               Callback function to be called when the pupil declines the content guidance
 * - **contentGuidance** \-         An array of objects containing the content guidance label, description and area
 * - **supervisionLevel** \-        The level of supervision required for the content
 * - **acceptText** \-              The text to be displayed on the accept button
 * - **declineText** \-             The text to be displayed on the decline button
 * - **declineIcon** \-             The icon to be displayed on the decline button
 */
declare const OakPupilJourneyContentGuidance: ({ isOpen, onAccept, onDecline, title, contentGuidance, supervisionLevel, acceptText, declineText, declineIcon, }: OakPupilJourneyContentGuidanceProps) => React$1.JSX.Element;

type OakSpanProps = ColorStyleProps & OpacityStyleProps & MarginStyleProps & PaddingStyleProps & BorderStyleProps & TypographyStyleProps & PositionStyleProps;
/**
 * Span renders a `span` (inline text) component, exposing all the typography props.
 * ## Usage
 * Use this component when you want to apply styles to a piece of inline text.
 */
declare const OakSpan: any;

type OakBulletListProps = {
    listItems: string[];
} & OakSpanProps;
/**
 * An inline bulleted list
 */
declare const OakBulletList: (props: OakBulletListProps) => React$1.JSX.Element;

type OakPupilJourneyHeaderProps = {
    title: string;
    iconName: OakIconProps["iconName"];
    alt?: OakIconProps["alt"];
    iconBackground?: "primary" | "secondary";
    breadcrumbs: OakBulletListProps["listItems"];
    optionalityTitle?: string;
} & FlexStyleProps;
/**
 * This component is the header for the pupil journey;
 *
 * the icon, title and list of items are passed as props and change change depending on which page it is called
 *
 *
 */
declare const OakPupilJourneyHeader: ({ iconBackground, title, iconName, alt, breadcrumbs, optionalityTitle, }: OakPupilJourneyHeaderProps) => React$1.JSX.Element;

type PupilJourneySectionName = "tier-listing" | "examboard-listing" | "unit-listing" | "lesson-listing" | "subject-listing" | "year-listing";
type Phase$1 = "primary" | "secondary";
type OakPupilJourneyLayoutProps = {
    sectionName: PupilJourneySectionName;
    phase?: Phase$1;
    topNavSlot?: ReactNode;
    children: ReactNode;
};
/**
 * Provides overall page layout and colours for the pupil journey
 *
 * Used for the unit, lesson and tiers/programme factor listing pages
 *
 * the sections of the page are passed in as props and children
 */
declare const OakPupilJourneyLayout: ({ sectionName, topNavSlot, phase, children, }: OakPupilJourneyLayoutProps) => React$1.JSX.Element;
declare function getBackgroundUrlForSection(sectionName: PupilJourneySectionName, phase?: Phase$1): string;

type OakPupilJourneyListProps = {
    children: React$1.ReactNode;
    phase: "primary" | "secondary";
    titleSlot?: React$1.ReactNode;
    filterSlot?: React$1.ReactNode;
    subheadingSlot: React$1.ReactNode;
};
/**
 *
 * A styled list container for use with OakPupilJourneyListItems
 *
 *
 */
declare const OakPupilJourneyList: ({ children, phase, titleSlot, subheadingSlot, filterSlot, }: OakPupilJourneyListProps) => React$1.JSX.Element;

type OakPupilJourneyListCounterProps = {
    count: number;
    countHeader: string;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
declare const OakPupilJourneyListCounter: (props: OakPupilJourneyListCounterProps) => React$1.JSX.Element;

type OakPupilJourneyListItemProps<C extends ElementType> = {
    as?: C;
    /**
     * Disable the section preventing navigation to it.
     */
    disabled?: boolean;
    /**
     * shows that a section is unavailable
     */
    unavailable?: boolean;
    index: number;
    title: string;
    numberOfLessons?: number;
} & ComponentPropsWithoutRef<C>;
/**
 * Enables navigation to the given section of a lesson as well as displaying current progress
 */
declare const OakPupilJourneyListItem: <C extends ElementType = "a">(props: OakPupilJourneyListItemProps<C>) => React$1.JSX.Element;

type OakPupilJourneyListItemSubheadingProps = {
    textSlot?: React$1.ReactNode;
} & OakBulletListProps;
/**
 * This component displays a heading for the previous lessons
 *
 *
 * listItems - List of labels to be displayed
 * textSlot? - Can pass if any react node, but <OakPupilJourneyListCounter /> is recommended
 *
 */
declare const OakPupilJourneyListItemSubheading: (props: OakPupilJourneyListItemSubheadingProps) => React$1.JSX.Element;

type OakPupilJourneyOptionalityButtonProps<C extends ElementType> = {
    /**
     * Disable the section preventing navigation to it.
     */
    disabled?: boolean;
    /**
     * shows that a section is unavailable
     */
    unavailable?: boolean;
    title: string;
    numberOfLessons: number;
} & ComponentPropsWithoutRef<C>;
/**
 * Button for units with optionality it is only used as the child of the PupilJourneyOptionailityitem component
 */
declare const OakPupilJourneyOptionalityButton: <C extends ElementType = "a">(props: OakPupilJourneyOptionalityButtonProps<C>) => React$1.JSX.Element;

type OakPupilJourneyOptionalityItemProps = {
    children: React$1.ReactNode;
    index: number;
    title: string;
    unavailable?: boolean;
    disabled?: boolean;
};
/**
 *
 * OakPupilJourneyOptionalityItem is a styled container to be used for units with optionality, OakPupilJourneyOptionalityButton should be used as children
 *
 */
declare const OakPupilJourneyOptionalityItem: (props: OakPupilJourneyOptionalityItemProps) => React$1.JSX.Element;

type OakPupilJourneyProgrammeOptionsProps = {
    children: React$1.ReactNode;
    phase: "primary" | "secondary";
    titleSlot?: React$1.ReactNode;
    optionTitleSlot: React$1.ReactNode;
};
/**
 *
 * A styled list container with a option title to be use with OakPupilJourneyYearButton as the option Buttons
 *
 *
 */
declare const OakPupilJourneyProgrammeOptions: ({ children, phase, titleSlot, optionTitleSlot, }: OakPupilJourneyProgrammeOptionsProps) => React$1.JSX.Element;

type MenuItem = {
    displayText: string;
    value: string;
};
type OakPupilJourneyUnitsFilterProps = {
    menuItems: MenuItem[];
    selected: string;
    onSelected: (arg0: MenuItem) => void;
    onSkipCallback: () => void;
};
/**
 *
 * OakPupilJourneyUnitsFilter component is a radio group of buttons that can be used to filter pupil journey units
 * add the menu items as an array of objects with text and id properties and provide a selected item id, and a callback function to handle the selection event.
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * onSelected: Callback when a menu item is selected, takes the selected item as an argument
 *
 */
declare const OakPupilJourneyUnitsFilter: (props: OakPupilJourneyUnitsFilterProps) => React$1.JSX.Element;

type OakPupilJourneyYearButtonProps = {
    phase: "primary" | "secondary";
} & Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor" | "pv" | "ph" | "font">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * Changes colour according to the phase prop. Can be used as a link or a button.
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakPupilJourneyYearButton: <C extends ElementType = "button">({ phase, element, ...rest }: OakPupilJourneyYearButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type OakQuizHintProps = {
    /**
     * Some content to give as a hint to answer a question
     */
    hint: ReactNode;
    id: string;
    hintToggled?: (props: {
        isOpen: boolean;
    }) => void;
};
/**
 * Presents a button which will show a hint when clicked
 */
declare const OakQuizHint: ({ hint, id, hintToggled }: OakQuizHintProps) => React$1.JSX.Element;

type OakQuizFeedbackProps = {
    /**
     * Feedback for an answer
     * `partially-correct` can be used to feedback on a multi-answer MCQ where some
     * correct options were not selected and/or some incorrect answers were selected
     */
    feedback: "correct" | "incorrect" | "partially-correct";
    /**
     * Some additional content to present with the feedback.
     * This is likely the correct answer(s) to the question or some praise.
     *
     * Only displayed when `feedback` has been applied.
     */
    answerFeedback?: ReactNode;
};
/**
 * Gives feedback after a question has been answered
 */
declare const OakQuizFeedback: ({ feedback, answerFeedback, }: OakQuizFeedbackProps) => React$1.JSX.Element;

type OakLessonBottomNavProps = {
    children?: ReactNode;
    feedback?: OakQuizFeedbackProps["feedback"] | null;
    answerFeedback?: OakQuizFeedbackProps["answerFeedback"];
    hint?: OakQuizHintProps["hint"];
    hintToggled?: (props: {
        isOpen: boolean;
    }) => void;
};
/**
 * Renders feedback for an answer and onward navigation buttons to continue the lesson
 */
declare const OakLessonBottomNav: ({ hint, hintToggled, feedback, answerFeedback, children, }: OakLessonBottomNavProps) => React$1.JSX.Element;

declare const lessonSectionNames: string[];
type LessonSectionName$1 = (typeof lessonSectionNames)[number];
type Phase = "primary" | "secondary";
type OakLessonLayoutProps = {
    lessonSectionName: LessonSectionName$1;
    phase?: Phase;
    celebrate?: boolean;
    topNavSlot: ReactNode;
    bottomNavSlot: ReactNode;
    children: ReactNode;
};
/**
 * Provides overall page layout and colours for the sections of a lesson.
 */
declare const OakLessonLayout: ({ lessonSectionName, phase, celebrate, topNavSlot, bottomNavSlot, children, }: OakLessonLayoutProps) => React$1.JSX.Element;

type BaseOakLessonNavItemProps<C extends ElementType> = {
    as?: C;
    /**
     * Disable the section preventing navigation to it.
     */
    disabled?: boolean;
    /**
     * Display loading state while preserving disabled appearance and behavior.
     */
    isLoading?: boolean;
} & ComponentPropsWithoutRef<C>;
type QuizSectionProps$1 = {
    lessonSectionName: "starter-quiz" | "exit-quiz";
    /**
     * The number of questions in the quiz
     */
    numQuestions: number;
    /**
     * The number of questions answered correctly
     */
    grade: number;
};
type VideoSectionProps$2 = {
    lessonSectionName: "video";
};
type IntroSectionProps$2 = {
    lessonSectionName: "intro";
};
type SectionProps = {
    /**
     * Denotes the progress in the lesson section
     */
    progress: "not-started" | "in-progress" | "complete";
} & (IntroSectionProps$2 | QuizSectionProps$1 | VideoSectionProps$2);
type OakLessonNavItemProps<C extends ElementType> = BaseOakLessonNavItemProps<C> & SectionProps;
/**
 * Enables navigation to the given section of a lesson as well as displaying current progress
 */
declare const OakLessonNavItem: <C extends ElementType = "a">(props: OakLessonNavItemProps<C>) => React$1.JSX.Element;

type LessonSectionName = "intro" | "video";
type BaseOakLessonReviewItemProps$1 = {
    completed: boolean;
};
type VideoSectionProps$1 = {
    lessonSectionName: "video";
};
type IntroSectionProps$1 = {
    lessonSectionName: "intro";
};
type OakLessonReviewIntroVideoProps = BaseOakLessonReviewItemProps$1 & {
    lessonSectionName: LessonSectionName;
} & (IntroSectionProps$1 | VideoSectionProps$1);
declare const OakLessonReviewIntroVideo: (props: OakLessonReviewIntroVideoProps) => React$1.JSX.Element;

type BaseOakLessonReviewItemProps = {
    completed: boolean;
};
type QuizSectionProps = {
    lessonSectionName: "starter-quiz" | "exit-quiz";
    /**
     * The number of questions in the quiz
     */
    numQuestions: number;
    /**
     * The number of questions answered correctly
     */
    grade: number;
};
type VideoSectionProps = {
    lessonSectionName: "video";
};
type IntroSectionProps = {
    lessonSectionName: "intro";
};
type OakLessonReviewItemProps = BaseOakLessonReviewItemProps & (IntroSectionProps | QuizSectionProps | VideoSectionProps);
declare const OakLessonReviewItem: (props: OakLessonReviewItemProps) => React$1.JSX.Element;

type LessonQuizName = "starter-quiz" | "exit-quiz";
type OakLessonReviewQuizProps = {
    completed: boolean;
    lessonSectionName: LessonQuizName;
    /**
     * The number of questions in the quiz
     */
    numQuestions: number;
    /**
     * The number of questions answered correctly
     */
    grade: number;
    /**
     * You MUST use the OakLessonExpandableReviewItem as the container component for this slot
     */
    resultsSlot?: React$1.ReactNode;
};
type OakLessonReviewItemContainerProps = {
    $background?: OakUiRoleToken;
    $borderColor?: OakUiRoleToken;
    children: React$1.ReactNode;
};
declare const ReviewItemContainer: (props: OakLessonReviewItemContainerProps) => React$1.JSX.Element;
type ReviewItemTitleSectionProps = {
    sectionHeader: string;
    completed: boolean;
    summaryForIncomplete: ReactNode;
};
declare const ReviewItemTitleSection: (props: ReviewItemTitleSectionProps) => React$1.JSX.Element;
declare const OakLessonReviewQuiz: (props: OakLessonReviewQuizProps) => React$1.JSX.Element;

type LessonTopNavSectionName = Omit<LessonSectionName$1, "overview" | "review">;
type OakLessonTopNavProps = {
    lessonSectionName: LessonTopNavSectionName;
    /**
     * Slot to render `OakBackLink` or similar
     */
    backLinkSlot: ReactNode;
    heading: ReactNode;
    /**
     * Displayed at the mobile breakpoint where the counter is not rendered.
     * Provides alternative content for the counter/progress in the lesson.
     */
    mobileSummary: ReactNode;
    /**
     * Slot to render `OakQuizCounter` or similar
     */
    counterSlot?: ReactNode;
};
/**
 * Controls for navigating back and displaying progress in a lesson
 */
declare const OakLessonTopNav: ({ lessonSectionName, backLinkSlot, counterSlot, heading, mobileSummary, }: OakLessonTopNavProps) => React$1.JSX.Element;

type OakLessonVideoTranscriptProps = {
    /**
     * The transcript content
     */
    children: ReactNode;
    /**
     * The id of the collapsible content element. This is used to link the button to the content
     */
    id: string;
    /**
     * A control to toggle the video to display sign language
     */
    signLanguageControl?: ReactNode;
    transcriptToggled?: (props: {
        isOpen: boolean;
    }) => void;
};
/**
 * Display a togglable video transcript with a slot to display a sign language control
 */
declare const OakLessonVideoTranscript: ({ children, id, signLanguageControl, transcriptToggled, }: OakLessonVideoTranscriptProps) => React$1.JSX.Element;

type OakHintButtonProps = {
    isOpen: boolean;
    onClick?: MouseEventHandler;
    isLoading?: boolean;
    disabled?: boolean;
    buttonProps?: Partial<InternalShadowRoundButtonProps & HTMLAttributes<Element>>;
};
/**
 *
 * A specific implementation of InternalShadowRoundButton
 *
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakHintButton: (props: OakHintButtonProps) => React$1.JSX.Element;

type OakQuizCheckBoxProps = Omit<BaseCheckBoxProps, "defaultChecked"> & {
    feedback?: "correct" | "incorrect" | null;
    image?: React$1.JSX.Element;
    innerRef?: React$1.RefObject<HTMLInputElement>;
    displayValue?: string | React$1.JSX.Element;
    /**
     * Give the field a highlight to draw attention to it
     */
    isHighlighted?: boolean;
};
/**
 * A checkbox representing the options in a multiple choice question.
 */
declare const OakQuizCheckBox: (props: OakQuizCheckBoxProps) => React$1.JSX.Element;

type OakQuizCounterProps = {
    counter: number;
    total: number;
};
/**
 * A counter representing progress through the questions in a quiz
 */
declare const OakQuizCounter: (props: OakQuizCounterProps) => React$1.JSX.Element;

declare const OakQuizMatchItemId: (id: string) => string;
type DraggableItem = {
    id: string;
    label: ReactNode;
    announcement: string;
};
type DroppableItem = {
    id: string;
    label: ReactNode;
    announcement: string;
};
type Matches = Record<DraggableItem["id"], DraggableItem>;
type OakQuizMatchProps = {
    /**
     * The initial options
     *
     * these are the items that can be dragged into a slot to form a match
     *
     * this cannot be updated on subsequent renders
     */
    initialOptions: DraggableItem[];
    /**
     * The initial slots
     *
     * these are the slots into which an option can be dropped to form a match
     *
     * this cannot be updated on subsequent renders
     */
    initialSlots: DroppableItem[];
    /**
     * Notify the consumer when matches have changed
     */
    onChange?: (matches: Matches) => void;
    /**
     * Highlight the droppable slots
     */
    isHighlighted?: boolean;
};
/**
 * A list of draggable items with matching slots to drop them into.
 *
 * Keyboard navigation is supported with the `tab`, `space` and `arrow` keys
 */
declare const OakQuizMatch: ({ initialOptions, initialSlots, isHighlighted, onChange, }: OakQuizMatchProps) => React$1.JSX.Element;
declare const announcements: Announcements;

type OakQuizOrderItem = {
    id: string;
    label: string;
};
declare const OakQuizOrderitemId: (id: string) => string;
type OakQuizOrderProps = {
    /**
     * The initial order of items
     *
     * this cannot be updated on subsequent renders
     */
    initialItems: OakQuizOrderItem[];
    /**
     * Notified the consumer when the order of items has changed
     */
    onChange?: (items: OakQuizOrderItem[]) => void;
    /**
     * Highlight all items to indicate that they can be interacted with
     */
    isHighlighted?: boolean;
    announcements?: OakQuizOrderItem[];
};
/**
 * A sortable list of items with drag and drop functionality. Items can be dragged over named slots to re-arrange them
 *
 * Keyboard navigation is supported with the `tab`, `space` and `arrow` keys
 */
declare const OakQuizOrder: ({ initialItems, announcements, onChange, isHighlighted, }: OakQuizOrderProps) => React$1.JSX.Element;

type OakQuizPrintableHeaderProps = {
    title: string;
    iconName: OakIconProps["iconName"];
    alt?: OakIconProps["alt"];
    breadcrumbs: OakBulletListProps["listItems"];
    optionalityTitle?: string;
    worksheetDownloaded: boolean;
    workSheetAvailable: boolean;
    videoPercentage: number;
} & FlexStyleProps;
/**
 * This component is the header for the printable view;
 *
 *
 *
 */
declare const OakQuizPrintableHeader: ({ title, iconName, alt, breadcrumbs, worksheetDownloaded, workSheetAvailable, videoPercentage, }: OakQuizPrintableHeaderProps) => React$1.JSX.Element;

type OakQuizPrintableSubHeaderProps = {
    title: string;
    grade: number;
    numQuestions: number;
    attempts?: number;
} & FlexStyleProps;
/**
 * This component is the header for quiz section in the printable view;
 *
 *
 *
 */
declare const OakQuizPrintableSubHeader: ({ title, grade, numQuestions, attempts, }: OakQuizPrintableSubHeaderProps) => React$1.JSX.Element;

type OakQuizRadioButtonProps = OakRadioButtonProps & {
    /**
     * Present the element with answer feedback
     */
    feedback?: "correct" | "incorrect" | null;
    /**
     * An image to display above the label
     */
    image?: JSX.Element;
    /**
     * Give the field a highlight to draw attention to it
     */
    isHighlighted?: boolean;
};
/**
 * A radio button representing the options in a multiple choice question.
 *
 * Use with `OakRadioGroup` to create a group of radio buttons.
 */
declare const OakQuizRadioButton: (props: OakQuizRadioButtonProps) => React$1.JSX.Element;

type InternalQuizResultItemProps = {
    feedbackState?: "correct" | "incorrect" | null;
    standardText?: string;
    boldPrefixText?: string;
    imageURL?: string;
    imageAlt?: string;
};
/**
 *
 * Add the description of the component here and it will appear on the story for the component
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * make sure to add descriptions and types for any callbacks for the component
 *
 * NB. We must export a styled component for it to be inheritable
 */
declare const OakQuizResultItem: ({ standardText, boldPrefixText, feedbackState, imageURL, imageAlt, }: InternalQuizResultItemProps) => React$1.JSX.Element;

type OakQuizTextInputProps = Omit<OakTextInputProps, "validity" | "iconName" | "iconAlt" | "isTrailingIcon"> & {
    /**
     * Alters the appearance of the input to indicate whether or not a correct answer was given.
     * Also sets the input to read-only.
     */
    feedback?: "correct" | "incorrect" | null;
};
/**
 * A text input for a free-text question in a quiz
 */
declare const OakQuizTextInput: ({ feedback, readOnly, ...props }: OakQuizTextInputProps) => React$1.JSX.Element;

type OakUnitListItemProps<element extends ElementType> = {
    unavailable?: boolean;
    index: number;
    title: string;
    yearTitle?: string | null;
    lessonCount: string | null;
    isLegacy: boolean;
    href: string;
    firstItemRef?: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
    onClick?: (event: React$1.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    onSave?: () => void;
    isSaved?: boolean;
    isSaving?: boolean;
    saveButtonId?: string;
    as?: element;
};
/**
 *
 * OakUnitsListItem component used as links for unit cards
 */
declare const OakUnitListItem: <element extends ElementType = "a">(props: OakUnitListItemProps<element>) => React$1.JSX.Element;

type OakUnitListOptionalityItemProps = {
    unavailable?: boolean;
    index: number;
    nullTitle: string;
    yearTitle?: string | null;
    firstItemRef: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
    onSave?: (unitSlug: string) => void;
    getIsSaved?: (unitSlug: string) => boolean;
    getIsSaving?: (unitSlug: string) => boolean;
    optionalityUnits: {
        title: string;
        slug: string;
        href: string;
        lessonCount: string;
        onClick?: (event: React$1.MouseEvent<HTMLElement, MouseEvent>) => void;
        firstItemRef?: MutableRefObject<HTMLAnchorElement | null> | null | undefined;
    }[];
};
/**
 *
 * OakUnitsListOptionalityItem component used as links for unit cards with optionality
 */
declare const OakUnitListOptionalityItem: (props: OakUnitListOptionalityItemProps) => React$1.JSX.Element;

type OakBackLinkProps<C extends ElementType> = {
    as?: C;
    label?: string;
} & ComponentPropsWithoutRef<C>;
/**
 * Used to navigate the user back to the previous page in the app.
 *
 * Polymorphic rendering as any HTML element or component using `as` — defaults to `a`.
 *
 * E.g.
 *
 * * Default (Anchor) `<OakBackLink href="https://www.thenational.academy/" />`
 * * Button `<OakBackLink as="button" onClick={() => goBack(-1)} />`
 *
 */
declare const OakBackLink: <C extends ElementType = "a">({ as, label, ...props }: OakBackLinkProps<C>) => React$1.JSX.Element;

type InternalCardProps = OakFlexProps;

type InternalCardWithBackgroundElementProps = InternalCardProps & {
    backgroundElement: ReactElement;
};

type OakCardWithHandDrawnBorderProps = Omit<InternalCardWithBackgroundElementProps, "backgroundElement"> & {
    fill?: InternalStyledSvgProps["$fill"];
    stroke?: InternalStyledSvgProps["$stroke"];
    strokeWidth?: InternalStyledSvgProps["$strokeWidth"];
};
/**
 * A flexed card with a hand-drawn border
 *
 * An optional `stroke` and `fill` can be applied to change the color of the border
 */
declare const OakCardWithHandDrawnBorder: ({ $pa, fill, stroke, $width, ...props }: OakCardWithHandDrawnBorderProps) => React$1.JSX.Element;

type OakCopyLinkButtonProps = {
    /**
     * Href of the link that should be copied
     */
    href?: string;
};
/**
 * Display copy link button
 */
declare const OakCopyLinkButton: ({ href }: OakCopyLinkButtonProps) => React$1.JSX.Element;

type OakDownloadCardProps = BaseCheckBoxProps & {
    /**
     * The primary title content for the download.
     */
    title: React$1.ReactNode;
    /**
     * Optional file size content shown beneath the title.
     */
    fileSize?: React$1.ReactNode;
    /**
     * The file format or secondary metadata shown beneath the title.
     */
    format: React$1.ReactNode;
    /**
     * The icon used to represent the download type.
     */
    iconName: IconName | IconName[];
    /**
     * If true, renders the selection control as a radio button instead of a checkbox.
     *
     * @default false
     */
    isRadio?: boolean;
};
/**
 * Download cards present a downloadable resource with metadata and a selectable control.
 * ## Usage
 * Use this component when users need to select one or more downloadable resources,
 * such as lesson plans, slide decks, or worksheets.
 * Design document: <https://www.figma.com/design/YcWQMMhHPVVmc47cHHEEAl/Oak-Design-Kit?node-id=14795-5603>
 */
declare const OakDownloadCard: (props: OakDownloadCardProps) => React$1.JSX.Element;

/**
 * Displays instructions for drag and drop functionality
 */
declare const OakDragAndDropInstructions: (props: ComponentPropsWithoutRef<typeof OakFlex>) => React$1.JSX.Element;

type OakDraggableProps = {
    /**
     * Whether the item is currently being dragged
     */
    isDragging?: boolean;
    /**
     * Present the element in a subdued state with hover effects disabled
     */
    isDisabled?: boolean;
    /**
     * Read only
     *
     * Disables hover effects
     */
    isReadOnly?: boolean;
    /**
     * Icon to display
     */
    iconName?: IconName;
    /**
     * Icon color when not being dragged or hovered
     */
    iconColor?: OakUiRoleToken;
    /**
     * The alt text for the icon
     */
    iconAlt?: string;
    /**
     * The background color of the draggable when not being dragged or hovered
     */
    background?: OakUiRoleToken;
    /**
     * The color of the draggable when not being dragged or hovered
     */
    color?: OakUiRoleToken;
};
/**
 * The component has no intrinsic draggable functionality.
 * It is intended to be used with `useDraggable` from `@dnd-kit/core`
 */
declare const OakDraggable: FC<ComponentPropsWithRef<OakDraggableProps & typeof OakBox>>;

type OakDraggableFeedbackProps = ComponentPropsWithoutRef<typeof OakDraggable> & {
    /**
     * Alters the appearance of the element to indicate whether or not it is in a correct state
     */
    feedback: "correct" | "incorrect";
};
/**
 * A draggable element that visually indicates whether or not its state is correct or not
 */
declare const OakDraggableFeedback: ({ feedback, ...props }: OakDraggableFeedbackProps) => React$1.JSX.Element;

type OakDroppableProps = {
    /**
     * Indicates whether a draggable is currently being dragged over the droppable
     */
    isOver?: boolean;
    /**
     * Present the element in a state making it clear that it can be dropped into
     */
    isDisabled?: boolean;
    /**
     * Give the droppable a highlight to draw attention to it
     */
    isHighlighted?: boolean;
    /**
     * A slot for a label to be displayed to the RHS of the droppable
     *
     * useful for giving the user a hint about what to drop
     */
    labelSlot?: ReactNode;
    /**
     * A slot for the draggable that is currently occupying the droppable
     */
    children?: ReactNode;
};
/**
 * A drop zone for a draggable
 *
 * Has no intrinsic drop functionality.
 * It is intended to be used with `useDraggable` from `@dnd-kit/core`
 */
declare const OakDroppable: FC<OakDroppableProps & ComponentPropsWithRef<typeof OakFlex>>;

type OakFilterDrawerProps = {
    /**
     * Called when the clear button is clicked
     */
    clearAllInputs: () => void;
    /**
     * The content of the modal.
     * Use with `<OakModalBody>` for best results.
     */
    children: ReactNode;
    /**
     * Slot for the footer of the modal.
     * Use with `<OakModalFooter>` for best results.
     */
    footerSlot?: ReactNode;
    /**
     * Indicates whether the modal is open or closed
     */
    isOpen: boolean;
    /**
     * Called when the modal is closed
     */
    onClose: () => void;
    /**
     * The DOM container to render the modal portal into.
     *
     * @default document.body
     */
    domContainer?: Element;
    /**
     * Optional z-index override.
     *
     * Defaults to token: `modal-dialog`
     *
     * 🚨 This prop is intended for use by consumers that do not use
     * the internal system of z-index tokens.
     *
     * NB *The modal is rendered inside a portal so it will not respect the stacking context of its parent component*.
     */
    zIndex?: number;
    /**
     * Whether the modal should be anchored to the left side of the screen.
     */
    isLeftHandSide?: boolean;
} & Pick<HTMLAttributes<Element>, "aria-label" | "aria-description" | "aria-labelledby" | "aria-describedby">;
/**
 *
 * Based on the OakModal component, this component is a filter drawer that slides in from the right side of the screen.
 * Designed for mobile and tablet devices
 *
 * ### Callbacks
 * clearAllInputs: used to clear filter options
 *
 */
declare const OakFilterDrawer: ({ isOpen, domContainer, onClose, zIndex, children, clearAllInputs, footerSlot, ...rest }: OakFilterDrawerProps) => React$1.ReactPortal | null;

interface OakFormInputWithLabelsProps {
    /**
     * The label for the input field.
     */
    label: string;
    /**
     * Optional helper text displayed below the label.
     */
    helperText?: string;
    /**
     * Placeholder text for the input field.
     */
    placeholder?: string;
    /**
     * Indicates if the input is invalid (to be used after form submission or validation).
     */
    invalid?: boolean;
    /**
     * Feedback text to display when the input is invalid.
     */
    invalidText?: string;
    /**
     * The value of the input field. Use this in controlled components.
     */
    value?: string;
    /**
     * The initial value of the input field. Use this in controlled components.
     */
    defaultValue?: string;
    /**
     * Disables the input field, preventing user interaction.
     */
    disabled?: boolean;
    /**
     * Optional name of the input field. This is used to identify the field in forms.
     */
    required?: boolean;
    inputName?: string;
    /**
     * Callback function that is called when the input value changes.
     */
    onChange?: React$1.ChangeEventHandler<HTMLInputElement>;
    /**
     * Callback function that is called when the input is focused initially.
     */
    onInitialFocus?: React$1.FocusEventHandler<HTMLInputElement>;
    /**
     * Callback function that is called when the input loses focus.
     */
    onBlur?: React$1.FocusEventHandler<HTMLInputElement>;
}
declare const OakFormInputWithLabels: ({ label, helperText, placeholder, invalid, invalidText, value, inputName, disabled, required, defaultValue, onChange, onInitialFocus, onBlur, }: OakFormInputWithLabelsProps) => React$1.JSX.Element;

type OakHandDrawnCardProps = Omit<InternalCardWithBackgroundElementProps, "backgroundElement"> & {
    fill?: InternalStyledSvgProps["$fill"];
    stroke?: InternalStyledSvgProps["$stroke"];
    strokeWidth?: InternalStyledSvgProps["$strokeWidth"];
};
/**
 * A flexed card with a hand-drawn filled background
 *
 * An optional `stroke` and `strokeWidth` can be applied to give the background a border
 */
declare const OakHandDrawnCard: ({ $pa, fill, stroke, strokeWidth, $width, ...props }: OakHandDrawnCardProps) => React$1.JSX.Element;

type OakHandDrawnBoxWithIconProps = Omit<OakHandDrawnCardProps, "children"> & {
    iconName: OakIconProps["iconName"];
    alt?: OakIconProps["alt"];
    iconColor?: OakIconProps["$colorFilter"];
    iconWidth?: OakIconProps["$width"];
    iconHeight?: OakIconProps["$height"];
};
/**
 * A hand-drawn card with an icon in the center
 */
declare const OakHandDrawnCardWithIcon: ({ iconName, iconColor, iconWidth, iconHeight, alt, $width, $height, $alignItems, $justifyContent, ...props }: OakHandDrawnBoxWithIconProps) => React$1.JSX.Element;

type OakHandDrawnHRProps = {
    hrColor?: InternalStyledSvgProps["$fill"];
} & SpacingStyleProps & SizeStyleProps;
/**
 * A Drawn HR svg inside a flex container
 *
 * use prop hrColor to change the color of the HR
 *
 * change the sizeProps of the flex container to change the size and dimentions of the HR
 */
declare const OakHandDrawnHR: (props: OakHandDrawnHRProps) => React$1.JSX.Element;

type OakInfoButtonProps = {
    onClick: MouseEventHandler;
    isOpen: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    buttonProps?: Partial<InternalShadowRoundButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>;
};
/**
 * Presents an  info icon button with an open and closed state
 *
 * onClick: MouseEventHandler
 *
 */
declare const OakInfoButton: (props: OakInfoButtonProps) => React$1.JSX.Element;

type OakInfoCardProps = {
    children: React$1.ReactNode;
};
type OakCardHeaderprops = {
    iconName: OakIconName;
    tag: OakHeadingTag;
    children: string;
};
declare const OakCardHeader: (props: OakCardHeaderprops) => React$1.JSX.Element;
/**
 *
 * OakLessonInfoCards are created using the custom card either oakLessoninfoCard or oakStaticMessageCard and the content is added as children. And use the oakCardHeader to create the header of the card.
 *
 */
declare const OakLessonInfoCard: (props: OakInfoCardProps) => React$1.JSX.Element;
declare const OakStaticMessageCard: (props: OakInfoCardProps) => React$1.JSX.Element;

type OakLinkCardProps = {
    /**
     * The main content section including header, body, and link.
     */
    mainSection: ReactNode;
    /**
     * The name of the icon to be displayed in the card.
     */
    iconName: OakIconName;
    /**
     * The alternative text for the icon, used for accessibility.
     */
    iconAlt: string;
    /**
     * The color filter applied to the icon.
     */
    iconColor?: OakIconProps["$colorFilter"];
    /**
     * The fill color applied inside the icon.
     */
    iconFill?: InternalStyledSvgProps["$fill"];
    /**
     * The URL that the entire card navigates to when clicked.
     */
    href: string;
    /**
     * Whether to display the "New" promo tag in the top-left corner.
     */
    showNew?: boolean;
    /**
     * Whether to display the card in a narrow layout.
     */
    narrow?: boolean;
    /**
     * Whether to apply a background animation effect.
     */
    hasAnimation?: boolean;
};
/**
 * @deprecated Use `<OakCard />` instead
 *
 * A card component that displays an icon, text content, and an external link.
 *
 * ## Props
 *
 * - **mainSection** - Main content (ReactNode) - Can include OakHeading, OakP, OakLink, etc.
 * - **iconName** - Name of the icon to be displayed
 * - **iconAlt** - Alternative text for the icon (for accessibility)
 * - **iconColor** - Optional color filter for the icon
 * - **iconFill** - Optional fill color for the icon
 * - **href** - Destination URL when the card is clicked
 * - **showNew** - Whether to display the "New" promo tag
 * - **narrow** - Whether to display the card in a narrow layout
 */
declare const OakLinkCard: ({ mainSection, iconName, iconAlt, iconColor, iconFill, href, showNew, hasAnimation, narrow, }: OakLinkCardProps) => React$1.JSX.Element;

type OakSolidBorderAccordionProps = {
    /**
     * The header of the accordion
     */
    header: ReactNode;
    /**
     * Whether the accordion should be open initially
     */
    initialOpen?: boolean;
    /**
     * The content of the accordion
     */
    children: ReactNode;
    /**
     * The id of the accordion
     */
    id: string;
} & FlexStyleProps & SizeStyleProps & SpacingStyleProps;
/**
 * An accordion component that can be used to show/hide content
 */
declare const OakMediaClipListAccordion: ({ header, children, id, initialOpen, ...styleProps }: OakSolidBorderAccordionProps) => React$1.JSX.Element;

type OakOutlineAccordionProps = {
    /**
     * The header of the accordion
     */
    header: ReactNode;
    /**
     * Whether the accordion should be open initially
     */
    initialOpen?: boolean;
    /**
     * The content of the accordion
     */
    children: ReactNode;
    /**
     * The id of the accordion
     */
    id: string;
} & FlexStyleProps & SizeStyleProps & SpacingStyleProps;
/**
 * An accordion component that can be used to show/hide content
 */
declare const OakOutlineAccordion: ({ header, children, id, initialOpen, ...styleProps }: OakOutlineAccordionProps) => React$1.JSX.Element;

type OakPromoTagProps = {
    width?: SizeStyleProps["$width"];
    display?: DisplayStyleProps["$display"];
};
/**
 * Renders a tag with the text "New"
 */
declare const OakPromoTag: (props: OakPromoTagProps) => React$1.JSX.Element;

type TileItem = {
    id: string;
    label: string;
};
declare const isTileItem: (u: unknown) => u is TileItem;
type OakRadioTileProps = {
    tileItem: TileItem;
    isChecked: boolean;
    id: string;
    onChange: (tileItem: TileItem) => void;
};
declare const OakRadioTile: any;

type OakSaveButtonProps = {
    isSaved: boolean;
    isLoading: boolean;
    onSave: () => void;
    unavailable?: boolean;
    saveButtonId?: string;
    title: string;
};
declare const OakSaveButton: (props: OakSaveButtonProps) => React$1.JSX.Element;

type OakSaveCountProps = {
    /**
     * The number of saved items.
     *
     * Setting this will show the count inline with the label.
     */
    count?: number;
    /**
     * The label to display inline with the count.
     */
    label?: string;
    href: string;
    loading: boolean;
};
declare const OakSaveCount: ({ count, href, loading, label, }: OakSaveCountProps) => React$1.JSX.Element;

type OakScaleImageButtonProps = Omit<InternalShadowRectButtonProps, "defaultTextColor" | "hoverTextColor" | "disabledTextColor" | "defaultBackground" | "defaultBorderColor" | "hoverBackground" | "hoverBorderColor" | "disabledBackground" | "disabledBorderColor" | "iconGap" | "pv" | "ph" | "$bblr" | "$btlr" | "width" | "onClick"> & {
    onImageScaleCallback: (event: React$1.MouseEvent<HTMLButtonElement>) => void;
    isExpanded: boolean;
};
/**
 *
 * A specific implementation of InternalRectButton
 *
 * The following callback is available for tracking focus events:
 *
 * ### onImageScaleCallback
 * `onImageScaleCallback: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *ą
 */
declare const OakScaleImageButton: <C extends ElementType = "button">({ onImageScaleCallback, isExpanded, }: OakScaleImageButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type OakSignLanguageButtonProps = {
    /**
     * On click function
     */
    onClick: (event: React$1.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
/**
 * Display a button to toggle sign language
 */
declare const OakSignLanguageButton: ({ onClick, }: OakSignLanguageButtonProps) => React$1.JSX.Element;

type OakTimerProps = {
    timeCode: number;
} & Omit<OakBoxProps, "onClick" | "label">;
declare const formatTimeCode: (seconds: number) => string;
declare const OakTimer: (props: OakTimerProps) => React$1.JSX.Element;

interface Tier {
    tier: string;
    tierSlug: string;
}
interface Subject {
    subject: string;
    subjectSlug: string;
}
type OakDownloadsJourneyChildSubjectTierSelectorProps = {
    tiers?: Tier[];
    childSubjects?: Subject[];
    getTierSubjectValues: (tierSlug: string, childSubjectSlug: string | null) => void;
};
/**
 *
 * The component is used in the Curriculum Downloads journey for KS4 Maths and Science, where a tier
 * must be selected before download (Maths) as well as a child subject (Science).
 *
 * ### Callbacks
 * `getTierSubjectValues(tier, childSubject)`: a callback function to retrieve the selected values
 * once the Next button is pressed to continue on the Downloads journey.
 *
 */
declare const OakDownloadsJourneyChildSubjectTierSelector: any;

type OakCodeRendererProps = {
    string: string;
} & TypographyStyleProps & OakBoxProps;
declare const OakCodeRenderer: ({ string, ...rest }: OakCodeRendererProps) => string | React$1.JSX.Element;

type OakHeaderHeroProps = {
    authorImageSrc?: string;
    authorImageAlt?: string;
    authorName?: string;
    authorTitle?: string;
    heroImageSrc: string;
    heroImageAlt: string;
    headingTitle?: string;
    subHeadingText: string;
    breadcrumbs: ReactElement;
    cmsImage?: ReactElement;
};
/**
 *
 * Oak Heading component with hero image, can be used for blog posts, articles, and other content pages.
 *
 * This Oak component can be passed the OWA breadcrumbs component as a prop. Currently this component does not exist in the component library.
 */
declare const OakHeaderHero: any;

type OakHomepageTabButtonProps = InternalButtonProps & {
    title: string;
    iconName: OakIconName;
    isActive?: boolean;
    showNewIcon?: boolean;
};
declare const OakHomepageTabButton: <C extends ElementType = "button">(props: OakHomepageTabButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type OakInfoProps = {
    /**
     * Some content to give as a hint to answer a question
     */
    hint: ReactNode;
    id: string;
    isLoading?: boolean;
    disabled?: boolean;
    buttonProps?: Partial<InternalShadowRoundButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>;
} & Omit<OakTooltipProps, "children" | "tooltip" | "id">;
/**
 * Presents a button which will show a hint when clicked
 */
declare const OakInfo: (props: OakInfoProps) => React$1.JSX.Element;

type OakListItemProps = {
    unavailable?: boolean;
    index: number;
    title: string;
    isLegacy: boolean;
    firstItemRef?: React$1.MutableRefObject<HTMLDivElement | null> | null | undefined;
    onClick?: (event: React$1.MouseEvent<HTMLElement, MouseEvent>) => void;
    middleSlot?: React$1.ReactNode;
    endSlot?: React$1.ReactNode;
    hoverBgColour?: OakUiRoleToken;
    indexBgColour?: OakUiRoleToken;
    indexHoverBgColour?: OakUiRoleToken;
    indexLegacyBgColour?: OakUiRoleToken;
    expandedContent?: React$1.ReactNode;
    isExpanded?: boolean;
    asRadio?: boolean;
    radioValue?: string;
};
/**
 * * OakListItem component used as links for unit cards
 * * adding asRadio and radioValue props to allow OakListItem to be used as radio buttons within OakUnitsContainer if the OakUnitsContainer is passed a radioGroupName prop. This allows for better accessibility when OakListItem is used in OakUnitsContainer, as the user can select a unit by clicking anywhere on the card, rather than having to click on a specific radio button.
 */
declare const OakListItem: (props: OakListItemProps) => React$1.JSX.Element;

type MuxPlayingState = "standard" | "playing" | "played";
type OakMediaClipProps = {
    thumbnailImage?: string;
    timeCode: number;
    clipName: string;
    learningCycle?: string;
    muxPlayingState: MuxPlayingState;
    onClick: () => void;
    disabled?: boolean;
    imageAltText: string;
    isAudioClip?: boolean;
    element?: "button" | "a";
};
declare const StyledMediaClipImage: any;
declare const OakMediaClip: ({ thumbnailImage, timeCode, clipName, learningCycle, muxPlayingState, onClick, disabled, imageAltText, isAudioClip, element, }: OakMediaClipProps) => React$1.JSX.Element;

type OakMediaClipListProps = {
    lessonTitle: string;
    currentClipCounter: number;
    totalClipCounter: number;
    children: ReactNode;
};
/**
 *
 * OakMediaClipList is a scrollable list of OakMediaClip components with clip counter and the title
 *
 */
declare const OakMediaClipList: ({ lessonTitle, currentClipCounter, totalClipCounter, children, }: OakMediaClipListProps) => React$1.JSX.Element;

type OakMediaClipStackListItemProps = {
    title: string;
    href: string;
    imageUrl?: string;
    imageAltText: string;
    numberOfClips: number;
    isAudioClip: boolean;
    onClick?: () => void;
    rel?: string;
};
declare const OakMediaClipStackListItem: (props: OakMediaClipStackListItemProps) => React$1.JSX.Element;

type MenuItemProps = {
    heading: string;
    subheading?: string;
    href: string;
};
type OakSideMenuNavLinkProps = FlexStyleProps & PaddingStyleProps & {
    item: MenuItemProps;
    isSelected: boolean;
    onClick: () => void;
    hoverBorderColor?: OakUiRoleToken;
    selectedBackground?: OakUiRoleToken;
    selectedHeadingFont?: OakFontToken;
};
/**
 *
 * The OakSideMenuNavLink component is a styled link that represents a navigation item in the side menu.
 * It is designed to be used within the OakSideMenuNav component, but can also be used independently.
 * The following callbacks are available for tracking focus events:
 *
 * ### Callbacks
 * - `onClick`: A callback function that is triggered when the link is clicked.
 *
 * ### Props
 * - `item`: An object containing the heading, subheading, and href of the link.
 * - `isSelected`: A boolean indicating whether the link is currently selected.
 * - `onClick`: A callback function that is triggered when the link is clicked.
 */
declare const OakSideMenuNavLink: any;

type OakSideMenuNavProps = {
    heading: string;
    menuItems: MenuItemProps[];
    anchorTargetId: string;
};
declare const OakSideMenuNav: (props: OakSideMenuNavProps) => React$1.JSX.Element;

type OakSubjectIconProps = Pick<OakHandDrawnBoxWithIconProps, "iconName" | "fill" | "iconColor" | "alt"> & {
    iconName: `subject-${string}`;
    showPromoTag?: boolean;
};
/**
 * A large illuminated hand-drawn box with a subject icon in the center
 *
 * Accepts an optional `showPromoTag` prop to display a "New" tag in the top left corner
 */
declare const OakSubjectIcon: ({ showPromoTag, ...rest }: OakSubjectIconProps) => React$1.JSX.Element;

type OakSubjectIconButtonProps = {
    phase: "primary" | "secondary" | "non-curriculum";
    subjectIconName: OakIconName;
    variant: "vertical" | "horizontal";
    selected?: boolean;
} & Omit<InternalShadowRectButtonProps, "defaultBorderColor" | "defaultBackground" | "defaultTextColor" | "hoverBackground" | "hoverBorderColor" | "hoverTextColor" | "disabledBackground" | "disabledBorderColor" | "disabledTextColor" | "pv" | "ph" | "font">;
/**
 *
 * A specific implementation of InternalRectButton
 *
 * Changes colour according to the phase prop. Can be used as a link or a button.
 * The following callbacks are available for tracking focus events:
 *
 * ### onClick
 * `onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;`
 *
 * ### onHovered
 *  `onHovered?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, duration: number) => void;`<br>
 *  called after a mouseEnter and mouseLeave event has happened
 */
declare const OakSubjectIconButton: <C extends ElementType = "button">({ phase, element, subjectIconName, variant, selected, ...rest }: OakSubjectIconButtonProps & PolymorphicPropsWithoutRef<C>) => React$1.JSX.Element;

type OakVideoTranscriptProps = {
    /**
     * The transcript content
     */
    children: ReactNode;
    /**
     * The id of the collapsible content element. This is used to link the button to the content
     */
    id: string;
    /**
     * A control to toggle sign language button (OakSignLanguageButton)
     */
    signLanguageControl?: ReactNode;
    /**
     * A control to toggle copy link button (OakCopyLinkButton)
     */
    copyLinkControl?: ReactNode;
    /**
     * A flag to control state of a transcript
     */
    transcriptToggled?: (props: {
        isOpen: boolean;
    }) => void;
};
/**
 * Display a togglable video transcript with a slot to display a sign language control
 */
declare const OakVideoTranscript: ({ children, id, signLanguageControl, copyLinkControl, transcriptToggled, }: OakVideoTranscriptProps) => React$1.JSX.Element;

type OakCloudinaryImageProps = Omit<OakImageProps<typeof CldImage>, "src" | "imageProps"> & {
    /**
     * The cloudinary image id or the full cloudinary URL
     *
     * Usually in the format `v1234567890/image.jpg`
     */
    cloudinaryId: string;
};
/**
 * Provides a Cloudinary config to all descendent `OakCloudinaryImage` elements.
 *
 * See https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters
 * for documentation of the config object.
 */
declare const OakCloudinaryConfigProvider: React$1.Provider<any>;
/**
 * OakCloudinaryImage wraps OakImage providing responsive images from Cloudinary
 * based on the `sizes` prop.
 *
 * Cloudinary cloud name can be set globally with `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` or a config
 * can be passed with `OakCloudinaryConfigProvider`.
 *
 * ## To be refactored 🔀
 * This component will be refactored not to be tight to a service like Cloudinary
 */
declare const OakCloudinaryImage: ({ cloudinaryId, unoptimized, ...props }: OakCloudinaryImageProps) => React$1.JSX.Element;

type OakCarouselProps = {
    content: ReactNode[];
    isLooping?: boolean;
    backLabel: string;
    fwdLabel: string;
    containerLabel: string;
};
declare const OakCarousel: ({ content, isLooping, backLabel, fwdLabel, containerLabel, }: OakCarouselProps) => React$1.JSX.Element;

type OakQuoteProps = {
    quote: string;
    color?: OakUiRoleToken;
    authorName?: string;
    authorTitle?: string;
    authorImageSrc?: string;
};
declare const OakQuote: (props: OakQuoteProps) => React$1.JSX.Element;

type ListStyleProps = {
    /**
     * Sets the `list-style` CSS property of the element.
     *
     * Accepts a `list-style` value or a responsive array of `list-style` values.
     */
    $listStyle?: ResponsiveValues<CSSProperties$1["listStyle"]>;
};

type OakLIProps = OakFlexProps & TypographyStyleProps & ListStyleProps & DisplayStyleProps;
/**
 * Styled `li` (list item) component.
 *
 * ## Usage
 *
 * Places where we directly want to style a list item
 *
 **/
declare const oakLIDefaults: {
    $display: string;
};
declare const OakLI: any;

type OakOLProps = MarginStyleProps & ColorStyleProps & TypographyStyleProps;
/**
 * Styled `ol` (ordered list) component.
 *
 * ## Usage
 *
 * Use where we have an ordered list to ensure numbers are styled
 *
 * */
declare const OakOL: any;

type OakPProps = MarginStyleProps & TypographyStyleProps & ColorStyleProps;
/**
 * Styled `p` (paragraph) component.
 * ## Usage
 * In general, using a `p` as a descendant of `<Body>` should suffice.
 * However, if you want different styles for a particular paragraph,
 * you can use this component to apply additional styles.
 */
declare const OakP: any;

type OakTypographyProps = OakBoxProps & TypographyStyleProps;
/**
 * The Typography component sets a typography style context from which children
 * inherit style properties through the cascade.
 * ## Usage
 * This should be the primary component to set a typography context.
 * Use this component whenever you want to style blocks of 'body' text.
 */
declare const OakTypography: any;

type OakULProps = OakBoxProps & OakFlexProps & {
    $reset?: boolean;
};
/**
 * Styled `ul` (unordered list) component.
 *
 * ## Usage
 *
 * Resets browser spacing and other styles, accepts BoxProps' style props.
 *
 * */
declare const OakUL: any;

type UnstyledChevronAccordionCommonProps = {
    /** The header of the accordion. */
    header: ReactNode;
    /** The content of the accordion. */
    content: ReactNode;
    /** Optional subheader to display above the fold. */
    subheader?: ReactNode;
    /** The id of the accordion. */
    id: string;
    /** Aria label for the button when the accordion is open. */
    ariaLabelOpen?: string;
    /** Aria label for the button when the accordion is closed. */
    ariaLabelClose?: string;
} & FlexStyleProps & OakBoxProps & ColorStyleProps;
type UnstyledChevronAccordionUncontrolledProps = {
    /** Whether the accordion should be open initially. Uncontrolled usage only. */
    isInitiallyOpen?: boolean;
    isOpen?: never;
    onOpenChange?: never;
};
type UnstyledChevronAccordionControlledProps = {
    isInitiallyOpen?: never;
    /** Controlled open state. Must be paired with `onOpenChange`. */
    isOpen: boolean;
    /** Called when the user toggles the accordion. Required when `isOpen` is provided. */
    onOpenChange: (open: boolean) => void;
};
type UnstyledChevronAccordionProps = UnstyledChevronAccordionCommonProps & (UnstyledChevronAccordionUncontrolledProps | UnstyledChevronAccordionControlledProps);
/**
 * - UnstyledChevronAccordion has a chevron icon that rotates when the accordion is open.
 * - Unlike InternalChevronAccordion, it has no border effects for hover or focus states.
 * - Only the chevron is interactive so as to allow interactive elements to be placed in the header.
 * - The intention is for these to be added by consuming components as needed.
 * - Can be used as an uncontrolled component (via `isInitiallyOpen`) or as a
 *   controlled component (via `isOpen` + `onOpenChange`).
 */
declare const UnstyledChevronAccordion: (props: UnstyledChevronAccordionProps) => React$1.JSX.Element;

/**
 *
 * Currently this is just for storybook as it is already applied in OWA
 *
 */
declare const OakGlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

type OakThemeProviderProps = {
    theme: OakTheme;
    children: React$1.ReactNode;
};
/**
 *
 * OakThemeProvider wraps Styled Components ThemeProvider allowing the use of the custom type OakTheme.
 *
 */
declare const OakThemeProvider: ({ theme, children, }: OakThemeProviderProps) => React$1.JSX.Element;

/**
 * Installs a mock of IntersectionObserver when it is not present in the environment
 *
 * This is a global mock, so it will affect all tests that run after it is imported.
 */
declare function installMockIntersectionObserver(): void;

/**
 * Installs a mock of ResizeObserver when it is not present in the environment
 *
 * This is a global mock, so it will affect all tests that run after it is imported.
 */
declare function installMockResizeObserver(): void;

declare const rgbToHex: (rgb: string) => string;

declare const useMediaQuery: (device: Device) => boolean;

declare const useMounted: () => boolean;

declare const useIsScrolled: () => {
    isScrolled: boolean;
    ObserveScroll: ({ children }: PropsWithChildren) => React$1.JSX.Element;
};

declare const useBreakpoint: () => Device;

export { HeadingTagComponent, IconDown, IconUp, OakAccordion, OakAnchorTarget, OakAspectRatio, OakBackLink, OakBasicAccordion, OakBox, OakBreadcrumbs, OakBulletList, OakButtonAsRadioGroup, OakButtonWithDropdown, OakCaptionCard, OakCaptionSearch, OakCard, OakCardHeader, OakCardWithHandDrawnBorder, OakCarousel, OakCheckBox, OakCloseButton, OakCloudinaryConfigProvider, OakCloudinaryImage, OakCodeRenderer, OakCollapsibleContent, OakCookieBanner, OakCookieConsent, OakCookieConsentContext, OakCookieConsentProvider, OakCookieSettingsModal, OakCopyLinkButton, OakDownloadCard, OakDownloadsAccordion, OakDownloadsJourneyChildSubjectTierSelector, OakDragAndDropInstructions, OakDraggable, OakDraggableFeedback, OakDroppable, OakFieldError, OakFieldset, OakFilterDrawer, OakFlex, OakFocusIndicator, OakForm, OakFormInput, OakFormInputWithLabels, OakGlobalStyle, OakGrid, OakGridArea, OakHandDrawnCard, OakHandDrawnCardWithIcon, OakHandDrawnFocusUnderline, OakHandDrawnHR, OakHeaderHero, OakHeading, OakHintButton, OakHomepageTabButton, OakHoverLink, OakIcon, OakImage, OakInfo, OakInfoButton, OakInformativeModal, OakInformativeModalBody, OakInformativeModalBorderColor, OakInformativeModalFooter, OakInlineBanner, OakInlineRegistrationBanner, OakJauntyAngleLabel, OakKbd, OakLI, OakLabel, OakLeftAlignedButton, OakLessonBottomNav, OakLessonInfoCard, OakLessonLayout, OakLessonNavItem, OakLessonReviewIntroVideo, OakLessonReviewItem, OakLessonReviewQuiz, OakLessonTopNav, OakLessonVideoTranscript, OakLink, OakLinkCard, OakListItem, OakLoadingSpinner, OakMaxWidth, OakMediaClip, OakMediaClipList, OakMediaClipListAccordion, OakMediaClipStackListItem, OakModalCenter, OakModalCenterBody, OakMultilineText, OakOL, OakOptGroup, OakOption, OakOutlineAccordion, OakP, OakPagination, OakPrimaryButton, OakPrimaryInvertedButton, OakPrimaryNav, OakPrimaryNavItem, OakPromoTag, OakPupilJourneyContentGuidance, OakPupilJourneyHeader, OakPupilJourneyLayout, OakPupilJourneyList, OakPupilJourneyListCounter, OakPupilJourneyListItem, OakPupilJourneyListItemSubheading, OakPupilJourneyOptionalityButton, OakPupilJourneyOptionalityItem, OakPupilJourneyProgrammeOptions, OakPupilJourneyUnitsFilter, OakPupilJourneyYearButton, OakQuizCheckBox, OakQuizCounter, OakQuizFeedback, OakQuizHint, OakQuizMatch, OakQuizMatchItemId, OakQuizOrder, OakQuizOrderitemId, OakQuizPrintableHeader, OakQuizPrintableSubHeader, OakQuizRadioButton, OakQuizResultItem, OakQuizTextInput, OakQuote, OakRadioAsButton, OakRadioButton, OakRadioGroup, OakRadioTile, OakRoundIcon, OakSaveButton, OakSaveCount, OakScaleImageButton, OakScreenReader, OakSearchFilterCheckBox, OakSecondaryButton, OakSecondaryButtonAsRadio, OakSecondaryButtonWithDropdown, OakSecondaryLink, OakSelect, OakSideMenuNav, OakSideMenuNavLink, OakSignLanguageButton, OakSmallPrimaryButton, OakSmallPrimaryInvertedButton, OakSmallSecondaryButton, OakSmallSecondaryButtonWithDropdown, OakSmallSecondaryToggleButton, OakSmallTertiaryInvertedButton, OakSpan, OakStaticMessageCard, OakSubjectIcon, OakSubjectIconButton, OakSvg, OakTabs, OakTagFunctional, OakTeacherNotesInline, OakTeacherNotesModal, OakTertiaryButton, OakTertiaryInvertedButton, OakTertiaryOLNav, OakTextArea, OakTextInput, OakThemeProvider, OakTimer, OakToast, OakTooltip, OakTypography, OakUL, OakUnitListItem, OakUnitListOptionalityItem, OakVideoTranscript, RadioContext, ReviewItemContainer, ReviewItemTitleSection, StyledMediaClipImage, UnstyledChevronAccordion, announcements, bannerTypes, bannerVariants, colorSchemes, formatTimeCode, generateOakIconURL, getBackgroundUrlForSection, getBreakpoint, getDefaultContextState, getMediaQuery, installMockIntersectionObserver, installMockResizeObserver, isTileItem, isValidIconName, lessonSectionNames, oakAllSpacingTokens, oakBorderRadiusTokens, oakBorderWidthTokens, oakBoxCss, oakColorTokens, oakDarkTheme, oakDefaultTheme, oakDropShadowTokens, oakFlexCss, oakFontSizeTokens, oakFontTokens, oakHeadingTags, oakIconNames, oakLIDefaults, oakOpacityTokens, oakPlaceholder, oakSpaceBetweenTokens, oakTransitionTokens, oakUiRoleTokens, oakZIndexTokens, parseBorder, parseBorderRadius, parseColor, parseColorFilter, parseDropShadow, parseFontSize, parseFontWeight, parseLetterSpacing, parseLineHeight, parseOpacity, parseSpacing, parseTransitions, parseZIndex, placeholderStyles, removedGuidanceDuplicates, responsiveStyle, rgbToHex, useBreakpoint, useCookieConsent, useDevice, useIsScrolled, useMediaQuery, useMounted };
export type { BannerTypes, BreakpointName, Consent, Device, InternalQuizResultItemProps, LessonSectionName$1 as LessonSectionName, MenuItemProps, OakAccordionProps, OakAllSpacingToken, OakAnchorTargetProps, OakAspectRatioProps, OakBackLinkProps, OakBasicAccordionProps, OakBorderRadiusToken, OakBorderWidthToken, OakBoxProps, OakBreadcrumb, OakBreadcrumbWithoutHref, OakBreadcrumbsProps, OakBulletListProps, OakButtonWithDropdownProps, OakCaptionCardProps, OakCaptionSearchProps, OakCardHeaderprops, OakCardProps, OakCardWithHandDrawnBorderProps, OakCarouselProps, OakCheckBoxProps, OakCloseButtonProps, OakCloudinaryImageProps, OakCodeRendererProps, OakCollapsibleContentProps, OakColorFilterToken, OakColorToken, OakCombinedSpacingToken, OakCookieBannerProps, OakCookieConsentProps, OakCookieSettingsModalProps, OakDownloadCardProps, OakDownloadsAccordionProps, OakDownloadsJourneyChildSubjectTierSelectorProps, OakDropShadowToken, OakDroppableProps, OakFieldErrorProps, OakFieldsetProps, OakFlexProps, OakFocusIndicatorProps, OakFontSizeToken, OakFontToken, OakFormInputProps, OakFormInputWithLabelsProps, OakFormProps, OakGridAreaProps, OakGridProps, OakHandDrawnBoxWithIconProps, OakHandDrawnCardProps, OakHandDrawnFocusUnderlineProps, OakHandDrawnHRProps, OakHeaderHeroProps, OakHeadingProps, OakHeadingTag, OakHintButtonProps, OakHomepageTabButtonProps, OakHoverLinkProps, OakIconName, OakIconProps, OakImageProps, OakInfoButtonProps, OakInfoCardProps, OakInfoProps, OakInformativeModalBodyProps, OakInformativeModalCloseAction, OakInformativeModalFooterProps, OakInformativeModalProps, OakInlineBannerProps, OakInlineBannerTypes, OakInlineBannerVariantProps, OakInlineBannerVariants, OakInlineRegistrationBannerProps, OakJauntyAngleLabelProps, OakKbdProps, OakLIProps, OakLabelProps, OakLeftAlignedButtonProps, OakLessonBottomNavProps, OakLessonLayoutProps, OakLessonNavItemProps, OakLessonReviewIntroVideoProps, OakLessonReviewItemProps, OakLessonTopNavProps, OakLinkCardProps, OakLinkProps, OakListItemProps, OakLoadingSpinnerProps, OakMediaClipListProps, OakMediaClipProps, OakMediaClipStackListItemProps, OakModalCenterBodyProps, OakModalCenterProps, OakMultilineTextProps, OakOLProps, OakOpacityToken, OakOptGroupProps, OakOptionProps, OakOutlineAccordionProps, OakPProps, OakPaginationProps, OakPrimaryButtonProps, OakPrimaryInvertedButtonProps, OakPrimaryNavItemProps, OakPrimaryNavProps, OakPromoTagProps, OakPupilContentGuidance, OakPupilJourneyContentGuidanceProps, OakPupilJourneyHeaderProps, OakPupilJourneyLayoutProps, OakPupilJourneyListItemSubheadingProps, OakPupilJourneyListProps, OakPupilJourneyOptionalityItemProps, OakPupilJourneyProgrammeOptionsProps, OakPupilJourneyUnitsFilterProps, OakPupilJourneyYearButtonProps, OakQuizCheckBoxProps, OakQuizCounterProps, OakQuizFeedbackProps, OakQuizHintProps, OakQuizMatchProps, OakQuizOrderProps, OakQuizPrintableHeaderProps, OakQuizPrintableSubHeaderProps, OakQuizRadioButtonProps, OakQuoteProps, OakRadioAsButtonProps, OakRadioGroupProps, OakRadioTileProps, OakRoundIconProps, OakSaveButtonProps, OakSaveCountProps, OakScaleImageButtonProps, OakSearchFilterCheckBoxProps, OakSecondaryButtonAsRadioProps, OakSecondaryButtonProps, OakSecondaryButtonWithDropdownProps, OakSecondaryLinkProps, OakSelectProps, OakSideMenuNavLinkProps, OakSideMenuNavProps, OakSmallPrimaryButtonProps, OakSmallPrimaryInvertedButtonProps, OakSmallSecondaryButtonProps, OakSmallSecondaryButtonWithDropdownProps, OakSmallSecondaryToggleButtonProps, OakSmallTertiaryInvertedButtonProps, OakSolidBorderAccordionProps, OakSpaceBetweenToken, OakSpanProps, OakSubjectIconButtonProps, OakSubjectIconProps, OakSvgNames, OakSvgProps, OakTabsProps, OakTagFunctionalProps, OakTeacherNotesInlineProps, OakTeacherNotesModalProps, OakTertiaryOLNavProps, OakTextAreaProps, OakTextInputProps, OakTheme, OakThemeProviderProps, OakTimerProps, OakToastProps, OakTooltipProps, OakTransitionToken, OakTypographyProps, OakULProps, OakUiRoleToken, OakUnitListItemProps, OakUnitListOptionalityItemProps, OakZIndexToken, Phase$1 as Phase, PolicyConsent, PupilJourneySectionName, Subject, Tier, TileItem, UnstyledChevronAccordionProps };
