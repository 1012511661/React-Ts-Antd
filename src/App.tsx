import React from 'react';
// import './App.css';
import './styles/index.scss';
import Button from './components/Button/button';
import HelloWarp from './components/hello';

const App: React.FC = () => {
    return (
        <div className="App">
            <HelloWarp message="hello world"/>
            <Button>默认</Button>
            <Button btnType='default'>Default</Button>
            <Button btnType='default' size='lg'>Danger -- Large</Button>
            <Button disabled>disabled</Button>
            <Button btnType='link' size='lg' href="http://www.baidu.com">Link</Button>
        </div>
    );
};

export default App;
