/*
* @Author: yongwenhao
* @Date: 2020-12-11 15:55:29
* @describe: 按钮
*/

import React from 'react';
import ClassNames from 'classnames';


// 尺寸
export type ButtonSize = 'lg' | 'sm'
// 类型
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}

// 把自己制定的和 React自带的 Buttons/a 交叉起来
// 交叉类型 &  多种类型的集合，联合对象将具有所联合类型的所有成员
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>; // button
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>; // a 标签
// Partial 的作用就是将传入的属性变为可选
// 使用原因 因为 button/ a 有的默认参数不一定两个都有
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
// *********************************
//Partial
// interface IUser {
//   name: string
//   age: number
// }
// type optional = Partial<IUser>
// // optional的结果如下
// type optional = {
//     name?: string | undefined;
//     age?: number | undefined;
//     department?: string | undefined;
// }
// 所有参数默认变为可选参数
// *********************************

const Button: React.FC<ButtonProps> = (props) => {
    const {btnType, size, disabled, children, href, className, ...restProps} = props;
    const classStyle = ClassNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disable: btnType === 'link' && disabled,
    });
    if (btnType === 'link' && href) {
        return (
            <a className={classStyle} href={href} {...restProps}>
                {children}
            </a>
        );
    } else {
        return (
            <button className={classStyle} disabled={disabled} {...restProps} >
                {children}
            </button>
        );
    }
};

Button.defaultProps = {
    disabled: false,
    btnType: 'default',
};
export default Button;
