import React, { FC } from "react";
import { Button } from "antd";
import { hot } from "react-hot-loader";

import classes from "./App.less";

const App: FC = () => {
  return (
    <div className={classes.container}>
      <Button type="primary">click</Button>
    </div>
  );
};

export default hot(module)(App);
