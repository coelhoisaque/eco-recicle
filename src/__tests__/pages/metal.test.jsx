import { render, screen } from '@testing-library/react';
import MetalPage from '../../Pages/metal';

describe('Página Metal', () => {
  it('deve conter informações sobre reciclagem de metal', () => {
    render(<MetalPage />);
    expect(screen.getByText(/reciclagem de metais/i)).toBeInTheDocument();
  });
});

