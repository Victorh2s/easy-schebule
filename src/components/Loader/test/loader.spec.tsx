import { IsLoader } from '..';
import { renderTheme } from '../../../styles/themes/render-themes';

it('should match to snapshot', () => {
  const { container } = renderTheme(<IsLoader />);

  expect(container).toMatchSnapshot();
});
