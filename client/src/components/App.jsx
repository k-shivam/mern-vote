import React from 'react';
import api from '../services/api';

//const App = () => <div>App works</div>;

class App extends React.Component {
   componentDidMount(){
    const result = api.call('post', 'auth/login',{
        username :'username',
        password :'password'
    });
    console.log(result);
}

    render(){
        return <div>App works</div>;
    }
}
export default App;

