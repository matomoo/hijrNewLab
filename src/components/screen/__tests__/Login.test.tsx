import React from 'react';
import { shallow, render } from 'enzyme';

// import appStore from '../../../stores/appStore';
import Login from '../Login';

// test for the container page in dom
describe('rendering test', () => {
  const screen = shallow(
    <Login />,
    // <Login store={appStore} />,
  );
  it('Login has to match the snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
});
