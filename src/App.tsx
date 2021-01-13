import React, {createContext, useState} from 'react';
import './App.css';
import './styles/index.scss';
import Button from './components/Button/button'; // button
import Alert from './components/Alert/alert'; // Alert
import Menu from './components/Menu/menu'; // Menu
import MenuItem from './components/Menu/menuItem'; //MenuItem
import SubMenu from './components/Menu/subMenu'; //SunMenu
import Transition from './components/Transition/transition'; // Transition
import Progress from './components/Progress/progress'; // 进度
import HelloWarp from './components/hello';
import Icon from './components/Icon/icon';
import Input from './components/Input/input';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);
// input 父子响应 回调 Start
type ChangeCallback = (value: string) => void;

interface IInputContent {
	value: string,
	onChange?: ChangeCallback
}
// input 父子响应 回调 End
export const InputContext = createContext<IInputContent>({value: '默认值不会改变'});

const App: React.FC = () => {
	const [show, setShow] = useState(false);
	// input 父子响应 Start
	const [value, setValue] = useState('默认值会改变');
	const handleChange = (value: string) => {
		setValue(value);
	};
	const passedContext: IInputContent = {
		value: value || ' ',
		onChange: handleChange
	};
	// input 父子响应 End
	return (
		<div className="App">
			<Icon icon="angle-down" className="arrow-icon"/>
			<HelloWarp message="hello world"/>
			<h3>Button</h3>
			<Button>默认</Button>
			<Button btnType='default'>Default</Button>
			<Button btnType='default' size='lg'>Danger -- Large</Button>
			<Button disabled>disabled</Button>
			<Button btnType='link' size='lg' href="http://www.baidu.com">Link</Button>
			<h3>Alert</h3>
			<Alert onClose={(e) => alert(e)}></Alert>
			<Alert type="success" description="成功"></Alert>
			<Alert type="danger" description="失败"></Alert>
			<Alert type="warning" closable={false} description="警告"></Alert>
			<Alert title="标题" description="自定义描述"></Alert>
			<h3>Menu 纵向可以设置默认展开,使用单击切换选择；横向没有设置默认展开，鼠标移入移出切换选择</h3>
			<Menu
				defaultIndex="1"
				// mode="vertical"
				// defaultOpenSubMenus={['2']}
				onSelect={(index) => {
					console.log(index);
				}}
			>
				<MenuItem>cool link 1</MenuItem>
				<MenuItem>cool link 2</MenuItem>
				<SubMenu title="dropdown">
					<MenuItem>dropdown 1</MenuItem>
					<MenuItem>dropdown 2</MenuItem>
					<MenuItem>dropdown 3</MenuItem>
				</SubMenu>
				<MenuItem>cool link 3</MenuItem>
				<MenuItem disabled>cool link 4</MenuItem>
			</Menu>
			<h3></h3>
			<Button size='lg' onClick={() => {
				setShow(!show);
			}}>toggle</Button>
			<Transition
				in={show}
				timeout={300}
				animation={'zoom-in-left'}>
				<div>
					<p>1</p>
					<p>2</p>
				</div>
			</Transition>
			<Transition
				in={show}
				timeout={300}
				animation={'zoom-in-left'}
				wrapper>
				<Button btnType='primary' size='lg'>Button</Button>
			</Transition>
			<h3>Progress</h3>
			<Progress percent={18}></Progress>
			<Progress percent={18} theme='danger'></Progress>
			<Progress percent={18} showText={false} theme='secondary'></Progress>
			<h3>Input</h3>
			<h6>父子未响应</h6>
			<Input size='sm' onChange={(e) => {
				console.log(e, 'onChange');
			}} onBlur={(e) => {
				console.log(e, 'onBlur');
			}} onFocus={(e) => {
				console.log(e, 'onFocus');
			}}></Input>
			<InputContext.Provider value={passedContext}>
				<Input value={passedContext.value}></Input>
			</InputContext.Provider>
		</div>
	);
};

export default App;
