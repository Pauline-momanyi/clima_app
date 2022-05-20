import React from "react";
import Nav from "../layout/Nav";
import Categories from "./Categories";
import Header from "./Header";
import QuestionList from "./QuestionList";

function Main() {
  return (
    <main>
      <div className="sm:mx-10">
        <Nav />
        <div className="flex mt-2 mx-2">
          <Categories />
          <div>
            <Header />
            <QuestionList />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
