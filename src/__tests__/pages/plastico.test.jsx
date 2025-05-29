import { render, screen } from '@testing-library/react';
import PlasticoPage from '../../Pages/plastico';

describe('Página Plástico', () => {
  it('deve conter informações sobre reciclagem de plástico', () => {
    render(<PlasticoPage />);
    expect(screen.getByText(/reciclagem de plástico/i)).toBeInTheDocument();
  });
});

