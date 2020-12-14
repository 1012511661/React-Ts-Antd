import React from 'react';
// import './App.css';
import './styles/index.scss';
import Button from './components/Button/button'; // button
import Menu from './components/Menu/menu'; // Menu
import MenuItem from "./components/Menu/menuItem"; //MenuItem
import SubMenu from './components/Menu/subMenu';
import HelloWarp from './components/hello';

const App: React.FC = () => {
    return (
        <div className="App">
            <HelloWarp message="hello world"/>
            <h3>Button</h3>
            <Button>默认</Button>
            <Button btnType='default'>Default</Button>
            <Button btnType='default' size='lg'>Danger -- Large</Button>
            <Button disabled>disabled</Button>
            <Button btnType='link' size='lg' href="http://www.baidu.com">Link</Button>
            <h3>Menu</h3>
            {/*<Menu defaultIndex={'0'}>*/}
            {/*    <MenuItem index={"0"}>1111</MenuItem>*/}
            {/*    <MenuItem index={"1"}>22222</MenuItem>*/}
            {/*    <MenuItem index={"2"}>3333</MenuItem>*/}
            {/*</Menu>*/}
            <Menu
                defaultIndex="0"
                // mode="vertical"
                defaultOpenSubMenus={['2']}
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
                <MenuItem disabled>cool link 3</MenuItem>
                <MenuItem>cool link 4</MenuItem>
            </Menu>
        </div>
    );
};

export default App;
