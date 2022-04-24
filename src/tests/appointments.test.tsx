import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { Appointments } from '../pages/Appointments';
import { render, screen } from '../utils/test.utils';

describe('Simple working test', () => {
  it('should render the title Agendamentos', () => {
    render(<Appointments />);

    expect(screen.getByText('Agendamentos')).toBeInTheDocument();
  });

  it('should render button Novo Agendamento', () => {
    render(<Appointments />);

    expect(screen.getByText('Novo Agendamento')).toBeInTheDocument();
  });
});
