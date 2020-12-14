/*
* @Author: Author
* @Date: 2020-12-14 13:17:57
* @describe: MenuItem
*/
import React, {useContext} from 'react';
import ClassName from 'classnames';
import {MenuContext} from './menu';

export interface MenuItemProps {
    index?: string,
    disabled?: boolean,
    className?: string,
    style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
    const {index, disabled, className, style, children} = props;
    const context = useContext(MenuContext);
    const classStyle = ClassName('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });
    const handleClick = () => {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index);
        }
    };
    return (
        <li className={classStyle}
            style={style}
            onClick={handleClick}>
            {children}
        </li>
    );
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
