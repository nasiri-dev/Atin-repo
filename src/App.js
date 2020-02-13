import React, { Component } from 'react';
import './App.css';
import Users from '../components/Users';

class App extends Component {
 
  render() {
    return (
      <div>
       
        
            <thead>
                <tr>        
                    <th>آدرس گیت هاب</th>
                    <th>نام کاربری</th>                    
                    <th>آیدی</th> 
                    <th>تصویر</th>        
                </tr>
            </thead>          
        
        <Users />
      </div>
      
    );
  }
}

export default App;