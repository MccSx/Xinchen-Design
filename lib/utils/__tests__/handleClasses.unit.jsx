import handleClasses from "../handleClasses";

describe("handleClasses函数", () => {
  it("接受一个classname", () => {
    const result = handleClasses("a");
    expect(result).toEqual("a");
  });
  it("接受两个classname", () => {
    const result = handleClasses("a", "b");
    expect(result).toEqual("a b");
  });
  it("不接收参数", () => {
    const result = handleClasses();
    expect(result).toEqual("");
  });
  it("接受undefined参数", () => {
    const result = handleClasses("a", undefined);
    expect(result).toEqual("a");
  });
  it("接受多个classname及多个奇怪参数", () => {
    const result = handleClasses("a", undefined, null, "", "b");
    expect(result).toEqual("a b");
  });
});
