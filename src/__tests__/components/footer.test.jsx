import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';

describe('Footer Component', () => {
  it('deve exibir o texto de copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/todos os direitos reservados/i)).toBeInTheDocument();
  });
});

