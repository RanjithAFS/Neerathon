import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./components/NotFound";
//once the pageNum is decided
//we generate page
const generatePage = (pageName) => {
  const component = () => require(`./pages/${pageName}`).default;
  try {
    return React.createElement(component());
  } catch (err) {
    return <NotFound />;
  }
};
const PageRender = () => {
  //reciving the parameter from App.js and storing in variables
  const { page, id } = useParams();
  //checking if only page parameter or both id,paramater are there
  //aacording to that we are setting the pageNum variable
  let pageNam = "";
  if (id) {
    pageNam = `${page}/[id]`;
  } else {
    pageNam = `${page}`;
  }
  console.log(pageNam);
  return generatePage(pageNam);
};
export default PageRender;
