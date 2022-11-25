import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Posts from "../components/Posts";
import store from "../redux/configureStore";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Posts />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});