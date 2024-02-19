import logo from './logo.svg';
import './App.css';
import FunctionComponenet from './components/functionComponant';
import FunctionState from './components/FunctionState';
import IncreCounterFunction from './components/IncreCounterFunction';
import ClassComponent from './components/classComponants';
import PostList from './components/PostList';
// import { UserProvider } from './components/UserContext';
// import CompD from './components/CompD';
// import PersonErrorBoundary from './components/PersonErrorBoundary';
// import Person from './components/Person';
// import ClassState from './components/ClassState';
// import TextBox from './components/TextBox';
// import Mahesh from './components/Mahesh';
// import PortRoot from './components/PortRoot';
// import PortalComp from './components/PortalComp';
// import InputFocus from './components/InputFocus';
// import Focus from './components/Focus';
 import ParentComp from './components/ParentComp';

import Information from './components/information'
import RegularComp from './components/RegularComp';
import Parent from './components/Parent';
// import Mahesh from './components/Mahesh'
import Fragment from './components/Fragment';
import Table from './components/Table';
import Destrucutre from './components/Destructure';
import DestrucutreClass from './components/DestructureClass';
import InputFeild from './components/InputFeild';
import Focus from './components/Focus';
import Props from './components/Props';
import ConditionalRendering from './components/ConditionalRendering';
import Greeting from './components/Greeting';
import ClassState from './components/ClassState';
import Mahesh from './components/Mahesh';
import InputFocus from './components/InputFocus';
import StyleSheetDemo from './components/StyleSheetDemo';
import Arrowfunction from './components/Arrowfunction';
import Counter from './components/Counter';
import EventExample from './components/EventExample';
import ObjectExample from './components/PersonList';
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';
import MemoComponent from './components/MemoComponent';
import ReactForceUpdate from './components/ReactForceUpdate';
import ReactList from './components/ReactList';
import PersonErrorBoundary from './components/PersonErrorBoundary';
import Vaibhav from './components/Vaibhav';

import { Component } from 'react';
import Comments from './ReactApp/Comments';




function App() {
  return (
    
     <div className="App">
      <h1>REACT</h1>

      {/* <UserProvider value="Mahesh">
      <CompD/>
      </UserProvider> */}
      {/* <FunctionComponenet something='MAHESH'/> */}
      {/* <ClassComponent /> */}
      {/* <Information name='MAHESH'  native='mumbai'>
        </Information> */}
      {/* <Table/> */}
      {/* <Destrucutre/> */}
      {/* <DestrucutreClass/> */}
      {/* <Focus/> */}
      {/* <Props/> */}
      {/* <Props my name='javatpoint' /> */}
{/*      
       <Comments/>   
       <Comment/> */}
       
      
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    
       {/* <ClassComponent myname='mahesh'/>  */}
      {/* <ConditionalRendering/>
      <Mahesh/> */}
      {/* <InputFocus/> */}
      {/* <Focus/> */}
      {/* <StyleSheetDemo/> */}
      {/* <LifecycleA/> */}
      {/* <Vaibhav/> */}
     
      {/* <Table/> */}
      {/* <ParentComp/> */}
      {/* <RegularComp/> */}
      {/* <ParentComp/> */}
      {/* <MemoComponent/> */}
      {/* <Focus/>    */}
      {/* <Arrowfunction/> */}
      {/* <ClassState/> */}
      {/* <Greeting/> */}
      {/* <Counter/> */}
      {/* <FunctionState/> */}
      {/* <PersonList/> */}
      {/* <Parent/> */}
      {/* <PostList/> */}
      {/* <IncreCounterFunction/> */}
      {/* <ClassState/> */}
 
      
      
     {/* <PersonErrorBoundary>
     <PersonErrorBoundary>
        <person name= 'Ramesh'/>
      </PersonErrorBoundary>
        
        <PersonErrorBoundary>
          <Person name= 'Suresh'/>
        </PersonErrorBoundary>

        <PersonErrorBoundary>
          <person name= 'Mahesh'/>
        </PersonErrorBoundary> 
     </PersonErrorBoundary> */}
        {/* <Destrucutre name ='mahesh'/> */}
     {/* <RegularComp/> */}
     {/* <Mahesh/> */}
     {/* <FunctionState/> */}
     {/* <FunctionComponenet/> */}
     {/* <ConditionalRendering/> */}
     {/* <EventExample/> */}
     {/* <ObjectExample/> */}
     {/* <PortRoot/> */}
     {/* <PortalComp/> */}
     {/* <ClassComponent/> */}
     {/* <Table/> */}
     
     {/* <Focus/> */}
     {/* <InputFocus/> */}
     {/* <ParentComp/> */}
    
     {/* <Fragment/> */}
     {/* < Nav/> */}
     {/* <IncreCounterFunction/> */}
     {/* <ReactForceUpdate/> */}
     {/* <ReactList/> */}
      
    {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello world
    //     </p>
    //     <p1>
    //       Mahesh
    //     </p1>
    //   </header> */}
     </div>
  );
}

export default App;
