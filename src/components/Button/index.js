import { Link } from 'react-router-dom';

import classnames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classnames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    green = false,
    orange = false,
    outline = false,
    text = false,
    disabled = false,
    small = false,
    medium = false,
    large = false,
    rounded = false,
    login = false,
    btnClose = false,
    bar = false,
    leftIcon,
    RightIcon,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    //remove event listeners when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] !== 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        orange,
        primary,
        green,
        outline,
        text,
        rounded,
        disabled,
        bar,
        small,
        medium,
        large,
        btnClose,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
        </Comp>
    );
}

export default Button;
