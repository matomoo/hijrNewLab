import React from 'react';
import { shallow, render } from 'enzyme';

// import appStore from '../../../stores/appStore';
import HomeUser from '../HomeUser';

// test for the container page in dom
describe('rendering test', () => {
  const screen = shallow(
    <HomeUser />,
    // <HomeUser store={appStore} />,
  );
  it('HomeUser has to match the snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
});
