import { render, screen } from '@testing-library/react';
import Heather from '../../components/heather';

describe('Heather Component', () => {
  it('deve conter o menu de navegação', () => {
    render(<Heather />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});

