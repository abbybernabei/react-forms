import React from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForms";
import Authenticate from "./components/Authenticate";

export default function App() {
  return (
    <div>
      <SignUpForm />
      <Authenticate />
    </div>
  );
}
