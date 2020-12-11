import React from "react";

interface IHelloProps {
    message: string
}

// 写法 1
// const Hello = (props: IHelloProps) => {
//     return <h3>{props.message} </h3>
// };
// 写法 2
// const Hello: React.FunctionComponent<IHelloProps> = props => {
//     return <h3>{props.message} </h3>
// };
// 写法 2 缩写
const Hello: React.FC<IHelloProps> = props => {
    return <h3>{props.message} </h3>
};
export default Hello;
