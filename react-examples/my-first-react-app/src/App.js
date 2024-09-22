import React from "react";
import ClassAppExample from "./components/ClassAppExample";
import FunctionComponentExample from "./components/FunctionComponentExample";
import Greeting from "./components/Greeting";
import ActionButton from "./components/ActionButton";
import NumberList from "./components/NumberList";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import NameAlert from "./components/NameAlert";
import UserInfo from "./components/UserInfo";
import StyleComponent from "./components/StyleComponent";
import ArraysState from "./components/ArraysState";

class FirstApp extends React.Component {
  render() {
    return (
      <div>
        {/* <ClassAppExample />
        <FunctionComponentExample />
        <Greeting />
        <ActionButton />
        <NumberList />
        <Counter />
        <Toggle /> <br></br>
        <NameAlert /> 
        <UserInfo />
        <StyleComponent />
        <ArraysState />
        */}

        <NumberList />
      </div>
    );
  }
}

export default FirstApp;
