import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26
    }
    // this.nextYear = this.nextYear.bind(this);
    // this.nextYear = () => {
    //   this.setState(state => ({
    //       years: ++state.years
    //   }))
    // }
  }

  // state = {
  //   years: 26
  // }

  // nextYear = () => {
  //   this.setState(state => ({
  //       years: ++state.years
  //   }))
  // }

  // nextYear() {
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years - {years}</h1>
        <a href={link}>My profile</a>
      </>
    );
  }
}


// function WhoAmI({name, surname, link}) {
//   return (
//     <>
//       <h1>My name is {name}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </>
//     // <React.Fragment>
//     //   <h1>My name is , surname - </h1>
//     //   <a href="/">My profile</a>
//     // </React.Fragment>
//   );
// }

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Ivan" surname="Smith" link="vk.com"/>
      <WhoAmI name="Alex" surname="Shepard" link="facebook.com"/>

    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <All/>
  </React.StrictMode>,
  document.getElementById('root')
);


// const Header = () => {
//   return <h2>Hello World!</h2>
// }

// const Field = () => {
//   const holder = "Enter here";
//   const styledField = {
//     width: '300px',
//   };
//   return <input 
//     style={styledField}
//     type="text" 
//     placeholder={holder} 
//     autoComplete=""
//     className="first"
//     htmlFor=""
//   />
// }

// const Btn = () => {
//   const text = "Log in";
//   const logged = false;

//   return <button>{logged ? "Log out" : text}</button>
// }

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Field />
//       <Btn />
//     </div>
//   )
// }