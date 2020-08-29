import * as rerender from "react-test-renderer";
import React from "react";
import Icon from "../icon";

describe("测试Icon组件", () => {
  it("Icon render", () => {
    const jsonOfIcon = rerender.create(<Icon name="home" />).toJSON();
    expect(jsonOfIcon).toMatchInlineSnapshot(`
      <svg
        className="xinchen-icon"
      >
        <use
          xlinkHref="#home"
        />
      </svg>
    `);
  });
});
