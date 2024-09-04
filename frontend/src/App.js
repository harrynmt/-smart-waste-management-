// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import WasteBin from './components/WasteBin';

// function App() {
//     return (
//         <div>
//             <h1>Smart Waste Management System</h1>
//             <WasteBin fillLevel={75} />
//         </div>
//     );
// }

// export default App;

import React from 'react';
import WasteBin from './components/WasteBin';
import './styles.css';


function App() {
    return (
        <div>
            <h1>Smart Waste Management</h1>
            <WasteBin />
        </div>
    );
}

export default App;

