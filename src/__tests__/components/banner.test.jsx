import { render, screen } from '@testing-library/react';
import Banner from '../../components/banner';

describe('Banner Component', () => {
  it('deve renderizar o título corretamente', () => {
    render(<Banner />);
    expect(screen.getByText(/bem-vindo/i)).toBeInTheDocument();
  });
});

