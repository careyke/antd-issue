import React, { FC } from "react";
import { Breadcrumb } from "antd";

import classes from "./App.less";

const App: FC = () => {
  return (
    <div className={classes.container}>
      <Breadcrumb>
        <Breadcrumb.Item>1</Breadcrumb.Item>
        <Breadcrumb.Item>2</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default App;
