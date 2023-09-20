
import './App.css';

import React, { Component } from 'react';
// import Modal from "./components/Modal";

import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login  from "./components/login";
import Home from "./components/home";
import Navigation from "./components/navigation";
import Logout from './components/logout';

function App() {
  return (
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </Router>

  );
}
export default App;

const postItems = [
  {
    id: 20,
    title: "Go to Market",
    author: "admin",
    body: "Buy ingredients to prepare dinner",
    active: true,
  },
  {
    id: 21,
    title: "Study",
    author: "admin",
    body: "Read Algebra and History textbook for the upcoming test",
    active: true,
  },
  {
    id: 22,
    title: "Sammy's books",
    author: "admin",
    body: "Go to library to return Sammy's books",
    active: true,
  },
  {
    id: 23,
    title: "Article",
    author: "admin",
    body: "Write article on how to use Django with React",
    active: true
  },
];








// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       postItems: postItems,
//     };
//   }

//   renderItems = () => {
//     // const { viewCompleted } = this.state;
//     const newItems = this.state.postItems.filter(
//       (item) => item.active === true
//     );
  
//     return newItems.map((item) => (
//       <li
//         key={item.id}
//         className="list-group-item d-flex justify-content-between align-items-center"
//       >
//         <span
//           className={`todo-title mr-2`}
//           title={item.description}
//         >
//           {item.title}
//         </span>
//         <span>
//           <button
//             className="btn btn-secondary mr-2"
//           >
//             Read
//           </button>
//         </span>
//       </li>
//     ));
//   };

//   render() {
//     return (
//       <main className="container">
//         <h1 className="text-white text-uppercase text-center my-4">My Blog</h1>
//         <div className="row">
//           <div className="col-md-6 col-sm-10 mx-auto p-0">
//             <div className="card p-3">
//               <ul className="list-group list-group-flush border-top-0">
//                 {this.renderItems()}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//     );
//   }
// }




// export default App;
