import React from 'react';
import Like from './Like'; // Asegúrate de importar el componente correctamente
import { render, fireEvent, screen } from '@testing-library/react';

describe('Like Component', () => {
  test('debe mostrar "Likes: 0" por defecto', () => {
    render(<Like />);
    expect(screen.getByText('Likes: 0')).toBeInTheDocument();
  });

  test('debe incrementar el número de likes al hacer clic en el botón Like', () => {
    render(<Like />);
    const likeButton = screen.getByText('Like');

    fireEvent.click(likeButton);
    expect(screen.getByText('Likes: 1')).toBeInTheDocument();
  });

  test('debe decrementar el número de likes al hacer clic en el botón Dislike', () => {
    render(<Like />);
    const dislikeButton = screen.getByText('Dislike');
    
    // Hacemos clic en Like primero para tener al menos un like
    fireEvent.click(screen.getByText('Like'));
    expect(screen.getByText('Likes: 1')).toBeInTheDocument();

    fireEvent.click(dislikeButton);
    expect(screen.getByText('Likes: 0')).toBeInTheDocument();
  });
});
