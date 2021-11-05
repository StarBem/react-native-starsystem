var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, useEffect } from 'react';
import { View, Text, TouchableNativeFeedback, TouchableOpacity, ActivityIndicator, Platform, StyleSheet, } from 'react-native';
import Color from 'color';
import { renderNode, color } from '../helpers';
import { colors } from '../config';
import Icon from '../Icon';
const defaultLoadingProps = (type, theme) => {
    var _a;
    return ({
        color: type === 'solid' ? 'white' : (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.primary,
        size: 'small',
    });
};
export const Button = (_a) => {
    var _b, _c, _d, _e, _f, _g, _h;
    var { TouchableComponent, containerStyle, onPress = () => console.log('Please attach a method to this component'), buttonStyle, type = 'solid', loading = false, loadingStyle, loadingProps: passedLoadingProps, title = '', titleProps, titleStyle: passedTitleStyle, icon, iconContainerStyle, iconRight = false, disabled = false, disabledStyle, disabledTitleStyle, raised = false, linearGradientProps, ViewComponent = View, theme, iconPosition = 'left', variant, textColor } = _a, attributes = __rest(_a, ["TouchableComponent", "containerStyle", "onPress", "buttonStyle", "type", "loading", "loadingStyle", "loadingProps", "title", "titleProps", "titleStyle", "icon", "iconContainerStyle", "iconRight", "disabled", "disabledStyle", "disabledTitleStyle", "raised", "linearGradientProps", "ViewComponent", "theme", "iconPosition", "variant", "textColor"]);
    useEffect(() => {
        if (linearGradientProps && !ViewComponent) {
            console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
        }
    });
    const handleOnPress = useCallback(evt => {
        if (!loading && !disabled) {
            onPress(evt);
        }
    }, [loading, onPress, disabled]);
    const TouchableComponentInternal = TouchableComponent ||
        Platform.select({
            android: linearGradientProps ? TouchableOpacity : TouchableNativeFeedback,
            default: TouchableOpacity,
        });
    const titleStyle = StyleSheet.flatten([
        {
            color: type === 'solid'
                ? (textColor && colors[textColor]) || 'white'
                : (variant && colors[variant]) || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary),
        },
        styles.title,
        passedTitleStyle,
        disabled && {
            color: textColor
                ? colors[textColor]
                : color((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.white).darken(0.3).string(),
        },
        disabled && disabledTitleStyle,
    ]);
    const background = Platform.OS === 'android' && Platform.Version >= 21
        ? TouchableNativeFeedback.Ripple(Color((_d = titleStyle === null || titleStyle === void 0 ? void 0 : titleStyle.color) === null || _d === void 0 ? void 0 : _d.toString()).alpha(0.32).rgb().string(), true)
        : undefined;
    const loadingProps = Object.assign(Object.assign({}, defaultLoadingProps(type, theme)), passedLoadingProps);
    const accessibilityState = {
        disabled: !!disabled,
        busy: !!loading,
    };
    const positionStyle = {
        top: 'column',
        bottom: 'column-reverse',
        left: 'row',
        right: 'row-reverse',
    };
    return (<View style={[
        styles.container,
        {
            borderRadius: 8 || styles.container.borderRadius,
        },
        containerStyle,
        raised && !disabled && type !== 'clear' && styles.raised,
    ]} testID="STAR_BUTTON_WRAPPER">
      <TouchableComponentInternal onPress={handleOnPress} delayPressIn={0} activeOpacity={0.3} accessibilityRole="button" accessibilityState={accessibilityState} disabled={disabled} background={background} {...attributes}>
        <ViewComponent {...linearGradientProps} style={StyleSheet.flatten([
        styles.button,
        styles.buttonOrientation,
        {
            flexDirection: positionStyle[iconRight ? 'right' : iconPosition] || 'row',
        },
        {
            backgroundColor: type === 'solid'
                ? (variant && colors[variant]) || ((_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.primary)
                : 'transparent',
            borderColor: variant ? colors[variant] : (_f = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _f === void 0 ? void 0 : _f.primary,
            borderWidth: type === 'outline' ? StyleSheet.hairlineWidth : 0,
        },
        buttonStyle,
        disabled &&
            type === 'solid' && {
            backgroundColor: variant
                ? colors[variant]
                : (_g = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _g === void 0 ? void 0 : _g.disabled,
            opacity: 0.7,
        },
        disabled &&
            type === 'outline' && {
            borderColor: color((_h = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _h === void 0 ? void 0 : _h.disabled)
                .darken(0.3)
                .string(),
        },
        disabled && disabledStyle,
    ])}>
          {loading && (<ActivityIndicator style={StyleSheet.flatten([styles.loading, loadingStyle])} color={loadingProps.color} size={loadingProps.size} {...loadingProps}/>)}
          {!loading &&
        icon &&
        renderNode(Icon, icon, {
            containerStyle: StyleSheet.flatten([
                styles.iconContainer,
                iconContainerStyle,
            ]),
        })}

          {!loading &&
        !!title &&
        renderNode(Text, title, Object.assign({ style: titleStyle }, titleProps))}
        </ViewComponent>
      </TouchableComponentInternal>
    </View>);
};
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 8,
        height: 48,
    },
    buttonOrientation: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 8,
    },
    container: {
        overflow: 'hidden',
        borderRadius: 8,
    },
    title: Object.assign({ fontSize: 16, textAlign: 'center', paddingVertical: 1 }, Platform.select({
        android: {
            fontFamily: 'sans-serif-medium',
        },
        default: {
            fontSize: 16,
        },
    })),
    iconContainer: {
        marginHorizontal: 5,
    },
    raised: Object.assign({ backgroundColor: '#fff', overflow: 'visible' }, Platform.select({
        android: {
            elevation: 4,
        },
        default: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
        },
    })),
    loading: {
        marginVertical: 2,
    },
});
Button.displayName = 'Button';
