/*
* @Author: yongwenhao
* @Date: 2020-12-16 14:10:56
* @describe:  progress 进度条
*/
import React, {useState} from 'react';
import {ThemeProps} from '../Icon/icon';

export interface ProgressProps {
    percent: number // 进度
    strokeHeight?: number
    showText?: boolean //时候显示进度
    style?: React.CSSProperties
    theme?: ThemeProps
}

const Progress: React.FC<ProgressProps> = (props) => {
    const {percent, strokeHeight, showText, style, theme} = props;
    const [num, setNum] = useState(percent);
    const handleProgress = () => {
        if (num) {
            setTimeout(() => {
                let _num = Number((Math.random() * 100).toFixed());
                setNum(_num);
            }, 500);
        }
    };
    return (
        <>
            <div className="progress-bar" style={style}>
                <div className="progress-bar-outer" style={{height: `${strokeHeight}px`}}>
                    <div
                        className={`progress-bar-inner color-${theme}`}
                        style={{width: `${num}%`}}
                    >
                        {showText && <span className="inner-text">{`${num}%`}</span>}
                    </div>
                </div>
            </div>
            <button onClick={handleProgress}>
                改变进度
            </button>
        </>
    );
};
Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: 'primary',
};
export default Progress;
