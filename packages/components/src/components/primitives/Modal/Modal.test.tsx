import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Modal } from './';
import 'jest-styled-components';

describe('Modal', () => {
  it('should render modal when isOpen is true', () => {
    render(<Modal isOpen>foo</Modal>);
    screen.getByTestId('modal');
  });
  it('should not render modal when isOpen is false', () => {
    render(<Modal isOpen={false}>foo</Modal>);
    const component = screen.queryByTestId('modal');
    expect(component).not.toBeInTheDocument();
  });
  it('should render close button', () => {
    render(<Modal isOpen showCloseButton />);
    screen.getByTestId('close-button');
  });
  it('should render children', () => {
    render(<Modal isOpen>content</Modal>);
    screen.getByText('content');
  });
  it('should close modal when on close clicked', () => {
    render(
      <Modal isOpen showCloseButton>
        content
      </Modal>
    );
    const icon = screen.getByTestId('close-button');
    const modal = screen.getByTestId('modal');
    fireEvent.click(icon);
    expect(modal).not.toBeInTheDocument();
  });
  it('should call onClose when closed', () => {
    const mockOnClose = jest.fn();
    render(
      <Modal isOpen showCloseButton onClose={mockOnClose}>
        content
      </Modal>
    );
    const icon = screen.getByTestId('close-button');
    fireEvent.click(icon);
    expect(mockOnClose).toBeCalledTimes(1);
  });
  it('should render custom CSS class', () => {
    render(
      <Modal isOpen customCss="color: violet">
        content
      </Modal>
    );
    const modal = screen.getByText('content');
    expect(modal).toHaveStyleRule('color', 'violet', {
      modifier: '&',
    });
  });
  it('should render custom class', () => {
    render(
      <Modal isOpen className="foo">
        content
      </Modal>
    );
    const modal = screen.getByText('content');
    expect(modal).toHaveClass('foo');
  });
  it('should render custom CSS class on overlay', () => {
    render(
      <Modal isOpen overlayCustomCss="color: violet">
        content
      </Modal>
    );
    const overlay = screen.getByText('content').parentNode;
    expect(overlay).toHaveStyleRule('color', 'violet', {
      modifier: '&',
    });
  });
  it('should render custom class on overlay', () => {
    render(
      <Modal isOpen overlayClassName="foo">
        content
      </Modal>
    );
    const overlay = screen.getByText('content').parentNode;
    expect(overlay).toHaveClass('foo');
  });
});
