import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const htmlRoot=document.getElementById("root");
const root=ReactDOM.createRoot(htmlRoot);

const Appcomponent = ()=>{
    return(
        <>
        <Header/>
        <Body/>
        </>
    )
}
root.render(<Appcomponent/>);









