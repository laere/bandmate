import React from "react";
import ContentHeader from "components/dashboard/ContentHeader";
import ContentBody from "components/dashboard/ContentBody";

const Content = () => {
  return (
    <div className="content">
      <ContentHeader header="My Education" button="Add Education" />
      <ContentBody />
    </div>
  );
};

export default Content;
