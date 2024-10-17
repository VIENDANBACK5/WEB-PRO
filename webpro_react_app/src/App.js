import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// function Hello(props) {
//   return <div>Hello, {props.name}!</div>;
// }

// class Welcome extends React.Component{
//   render() {
//     return <div>Welcome {this.props.name}</div>
//   }
// }

// class Aim extends React.Component{
//   render() {
//   return <div button="click"> {this.props.name}</div>
//   }
// }




// function App() { 
//   const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

//   // Hàm xử lý sự kiện khi nhấn button
//   const handleClick = (item) => {
//     alert(`You clicked on ${item}`);
//   };
//   return (
//     <div className='mywork'>
//       <header className='mywork-header'>
//         <h1>My Work <img src='https://th.bing.com/th/id/OIP.LRakoaNcUmktDNaG0Te8CwHaIM?w=190&h=210&c=7&r=0&o=5&dpr=1.1&pid=1.7' height={40}></img> </h1>
//       </header>

//       <Aim name="Hoc lap trinh Web voi React"/>
//       <Aim name="gui mai nop bai tap ve nha"/>
//       <Aim name="Hoc tu vung tieng anh moi ngay"/>
//       <Aim name="Viet tieu luan mon Triet hoc"/>
//       <div>
//       {items.map((item, index) => (
//         <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//           <span style={{ marginRight: '10px' }}>{item}</span>
//           <button onClick={() => handleClick(item)}>Click Me</button>
//         </div>
//       ))}
//       </div>
//     </div>
    
    
function App(){
  const [job ,setJob] = useState('')
  const [jobs,setJobs] = useState([])

  console.log(job);

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]) // kh nhạp thì bảo lưu thằng cũ banegf cách tạo mảng mới giữu cũ , thêm thg mới : job

    setJob('') // sau kh ADD, auto làm mới ADD

   // muốn focus dsach đó lại có thể dùng hook  }

   // chạy làn lượt nên luôn trễ 1 bước
   console.log(jobs);

  }

  return (
    <div style={{ padding: 32}}>
      <input 
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
           <li key={index}>{job}</li>
          ))}
      </ul>
    </div>  
  )
}
    

     


  // <div>
    //  <div className='infor'>
    //   <Hello name="Nagnjdnjfnfmrke"/>
    //   <Hello name="Nagnfgfnjfnfmrke"/>
    //   <Hello name="Nagfgnfmrke"/>
    //   <Hello name="Nagnjdnrke"/>
    //   <Welcome name="jddkkfnkdn"/>
    //  </div>
    // </div>
  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

//   );
// }





export default App;

