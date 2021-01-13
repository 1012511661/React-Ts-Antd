/*
* @Author: Author
* @Date: 2021-01-13 11:27:31
* @describe: input
*/
import React, {ReactElement, InputHTMLAttributes, ChangeEvent, FocusEventHandler, useContext} from 'react';
import ClassNames from 'classnames';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon/icon';
import {InputContext} from '../../App';

type InputSize = 'lg' | 'sm'

// Omit用来忽略InputHTMLAttributes里的size
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
	value?: string | ReadonlyArray<string> | number;
	/**设置 Input 的禁用 */
	disabled?: boolean
	/**设置 Input 的尺寸 */
	size?: InputSize
	/**设置 Input 的图标 */
	icon?: IconProp
	/**在 Input 之前放置元素 */
	prepend?: string | ReactElement
	/**在 Input 之后放置元素 */
	append?: string | ReactElement
	onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

export const Input: React.FC<InputProps> = props => {
	const context = useContext(InputContext);
	const {disabled, size, icon, prepend, append, className, style, placeholder = '请输入内容', ...restProps} = props;
	const classes = ClassNames('input-wrapper', className, {
		[`input-size-${size}`]: size,
		'is-disabled': disabled,
		'input-group': prepend || append,
		'input-group-append': !!append,
		'input-group-prepend': !!prepend
	});

	// value没传值时默认为空字符串
	const fixControlledValue = (value: any) => {
		if (typeof value === 'undefined' || value === null) {
			return '';
		}
		return value;
	};

	// value和defaultValue不能同时存在
	if ('value' in props) {
		delete restProps.defaultValue;
		restProps.value = fixControlledValue(restProps.value);
	}
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (context.onChange && e.target.value) {
			context.onChange(e.target.value);
		}
	};

	return (
		<div className={classes} style={style}>
			{prepend && <div className="in-input-group-prepend">{prepend}</div>}
			{icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
			<input
				placeholder={placeholder}
				className="input-inner"
				disabled={disabled}
				onChange={handleChange}
				value={context.value}
				// 注释后父级传的默认值不会接受，使用<InputContext.Provider> 包裹的会接受
				{...restProps}
			/>
			{append && <div className="in-input-group-append">{append}</div>}
		</div>
	);
};
Input.defaultProps = {
	size: 'sm',
};
export default Input;
