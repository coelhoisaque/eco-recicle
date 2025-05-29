import { render, screen } from '@testing-library/react';
import PapelPage from '../../Pages/papel';

describe('Página Papel', () => {
  it('deve conter informações sobre reciclagem de papel', () => {
    render(<PapelPage />);
    expect(screen.getByText(/reciclagem de papel/i)).toBeInTheDocument();
  });
});

