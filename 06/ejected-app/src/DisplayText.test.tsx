import { render, fireEvent, cleanup, wait } from "@testing-library/react";
import DisplayText from "./DisplayText";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Test DisplayText", () => {
  const userFullName = "Testy McTestFace";

  const getUserFullNameMock = (
    username: string
  ): [Promise<string>, jest.Mock<Promise<string>, [string]>] => {
    const promise = new Promise<string>((res, rej) => {
      res(userFullName);
    });

    const getUserFullName = jest.fn(
      async (username: string): Promise<string> => {
        return promise;
      }
    );

    return [promise, getUserFullName];
  };

  it("renders without crashing", () => {
    const username = "testuser";
    const [promise, getUserFullName] = getUserFullNameMock(username);

    const { baseElement } = render(
      <DisplayText getUserFullName={getUserFullName} />
    );

    // console.log(baseElement.innerHTML);
    expect(baseElement).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const username = "testuser";
    const [promise, getUserFullName] = getUserFullNameMock(username);

    const { baseElement } = render(
      <DisplayText getUserFullName={getUserFullName} />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("receives input text", () => {
    const username = "testuser";
    const [promise, getUserFullName] = getUserFullNameMock(username);

    const { getByTestId } = render(
      <DisplayText getUserFullName={getUserFullName} />
    );
    const input = getByTestId("user-input");
    fireEvent.change(input, { target: { value: username } });
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(username);
  });

  it("shows welcome message", async () => {
    const username = "testuser";
    const [promise, getUserFullName] = getUserFullNameMock(username);

    const msg = `Welcome to React testing, ${userFullName}`;

    const { getByTestId } = render(
      <DisplayText getUserFullName={getUserFullName} />
    );
    const input = getByTestId("user-input");
    const label = getByTestId("final-msg");
    fireEvent.change(input, { target: { value: username } });
    const btn = getByTestId("input-submit");
    fireEvent.click(btn);

    expect(label).toBeInTheDocument();
    await wait(() => promise);
    expect(label.innerHTML).toBe(msg);
  });
});
