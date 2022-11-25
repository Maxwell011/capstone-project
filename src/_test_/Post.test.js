import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import Post from "../components/Post";
import store from "../redux/configureStore";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Post />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
