import * as React from 'react';
import { WelcomePage } from '../WelcomePage';
import { mount } from 'enzyme';

describe('WelcomePage', () => {
  it('should render component', () => {
    const MountedWelcomePage = mount(
      <WelcomePage />,
    );
    const expected = MountedWelcomePage.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
