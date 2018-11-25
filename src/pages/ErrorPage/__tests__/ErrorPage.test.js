import * as React from 'react';
import { ErrorPage } from '../ErrorPage';
import { mount } from 'enzyme';

describe('ErrorPage', () => {
  it('should render component', () => {
    const MountedErrorPage = mount(
      <ErrorPage />,
    );
    const expected = MountedErrorPage.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
