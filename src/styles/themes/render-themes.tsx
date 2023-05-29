import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './default';
import { BrowserRouter } from 'react-router-dom';

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>{' '}
    </BrowserRouter>
  );
};
