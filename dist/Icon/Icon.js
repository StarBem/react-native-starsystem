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
import React from 'react';
import { Platform, TouchableHighlight, View, StyleSheet, TouchableNativeFeedback, } from 'react-native';
import Color from 'color';
import getIconType from '../helpers/getIconType';
import getIconStyle from '../helpers/getIconStyle';
export const Icon = (_a) => {
    var _b, _c, _d;
    var { type = 'material', name, size = 24, color: colorProp, iconStyle, iconProps, underlayColor = 'transparent', reverse = false, raised = false, containerStyle, reverseColor: reverseColorProp, disabled = false, disabledStyle, onPress, Component = onPress
        ? Platform.select({
            android: TouchableNativeFeedback,
            default: TouchableHighlight,
        })
        : View, solid = false, brand = false, theme } = _a, attributes = __rest(_a, ["type", "name", "size", "color", "iconStyle", "iconProps", "underlayColor", "reverse", "raised", "containerStyle", "reverseColor", "disabled", "disabledStyle", "onPress", "Component", "solid", "brand", "theme"]);
    const color = colorProp || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.black);
    const reverseColor = reverseColorProp || ((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.white);
    const IconComponent = getIconType(type);
    const iconSpecificStyle = getIconStyle(type, { solid, brand });
    const getBackgroundColor = React.useMemo(() => {
        var _a;
        if (reverse) {
            return color;
        }
        return raised ? (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.white : 'transparent';
    }, [color, raised, reverse, (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.white]);
    const buttonStyles = React.useMemo(() => ({
        borderRadius: size + 4,
        height: size * 2 + 4,
        width: size * 2 + 4,
    }), [size]);
    if (Platform.OS === 'android' && !attributes.background) {
        if (Platform.Version >= 21) {
            attributes.background = TouchableNativeFeedback.Ripple(Color(color).alpha(0.2).rgb().string(), true);
        }
    }
    return (<View style={StyleSheet.flatten([
        styles.container,
        (reverse || raised) && styles.button,
        (reverse || raised) && buttonStyles,
        raised && styles.raised,
        iconStyle && iconStyle.borderRadius
            ? {
                borderRadius: iconStyle.borderRadius,
            }
            : {},
        containerStyle && containerStyle,
    ])} testID="STAR__ICON__CONTAINER">
      <Component {...attributes} {...(onPress && {
        onPress,
        disabled,
        underlayColor: reverse ? color : underlayColor,
        activeOpacity: 0.3,
        accessibilityRole: 'button',
    })} testID="STAR__ICON__CONTAINER_ACTION">
        <View style={StyleSheet.flatten([
        (reverse || raised) && buttonStyles,
        {
            backgroundColor: getBackgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
        },
        disabled && styles.disabled,
        disabled && disabledStyle,
    ])} testID="STAR__ICON">
          <IconComponent testID="STAR__ICON__Component" style={StyleSheet.flatten([
        { backgroundColor: 'transparent' },
        iconStyle && iconStyle,
    ])} size={size} name={name} color={reverse ? reverseColor : color} {...iconSpecificStyle} {...iconProps}/>
        </View>
      </Component>
    </View>);
};
const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    button: {
        margin: 7,
    },
    raised: Object.assign({}, Platform.select({
        android: {
            elevation: 2,
        },
        default: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
        },
    })),
    disabled: {
        backgroundColor: '#D1D5D8',
    },
});
Icon.displayName = 'Icon';
