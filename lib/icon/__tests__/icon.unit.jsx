import * as rerender from "react-test-renderer";
import React from "react";
import { mount } from "enzyme";
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
  it("can click", () => {
    const fn = jest.fn();
    const component = mount(<Icon onClick={fn} />);
    component.find("svg").simulate("click");
    expect(fn).toBeCalled();
  });
});
