/*
* @Author: Author
* @Date: 2020-12-16 13:25:34
* @describe: Alert 组件
*/
import React, {useState} from 'react';
import ClassNames from 'classnames';
// 类型
export type AlertType = 'success' | 'default' | 'danger' | 'warning';

interface AlertProps {
    className?: string,
    title?: string,
    description?: string,
    type?: AlertType,
    closable?: Boolean,
    onClose?: React.MouseEventHandler<HTMLButtonElement> // 事件处理函数类型<按钮>
}

const Alert: React.FC<AlertProps> = (props) => {
    const {className, title, description = '默认描述', type, closable, onClose} = props;
    const [closed, setClosed] = useState(false);
    const classStyle = ClassNames('alert', className, {
        [`alert-${type}`]: type
    });
    // 按钮事件
    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (onClose) {
            onClose(e);
        }
        setClosed(true);
    };
    // 是否渲染按钮
    const closeIcon = closable ? (<button onClick={handleClose} className='alert-close'>
        <span className='alert-icon'>X</span>
    </button>) : null;
    return (
        !closed ? <div className={classStyle}>
            <span className="alert-title">{title}</span>
            <span className="alert-desc">{description}</span>
            {closeIcon}
        </div> : <div>没有Alert</div>
    );
};
Alert.defaultProps = {
    type: 'default',
    closable: true
};
export default Alert;
