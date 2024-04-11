
import './App.css';
import TMN_ClassComp from './components/TMN_ClassComp';
import TMN_FuncDemo from './components/TMN_FuncDemo';

function App() {
  // Khai bao bien doi tuong 
  const users = {
    userName:"K22CNT3",
    password:"214",
    fistName:"Tran Minh",
    lastName:"Nam",
  }

  // Khai bao doi tuong ham
  function formatName(user){
    return<h2>Xin Chao, {user.fistName} {user.lastName}</h2>;
  }
  return (
    <div className="App">
      {/* Bieu thuc jsx */}
      <div>
         <p> FullName: {users.fullName}</p>
         {formatName(users)}
      </div>

      {/* Su dung functiono components */}
      <div>
        <TMN_FuncDemo />
        {/* Su dung Func_Comp co props */}
        <TMN_FuncDemo userName="TMN" fullName="Tran Minh Nam" age="20" />
      </div>

      {/* Su dung class component */}
      <div>
        {/* dung khong su dung props */}
        <TMN_ClassComp />
        {/* Su dung props */}
        <TMN_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs"/>
        <TMN_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs 1"/>
        <TMN_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs 2"/>
        <TMN_ClassComp company="Fit-NTU - K22CNT3" course="ReactJs 3"/>
      </div>
    </div>
  );
}

export default App;
