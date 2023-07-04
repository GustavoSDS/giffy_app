import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';


describe('unit test for App', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Giffy App/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('search form could be used', async () => {
    render(<App />);
    const input = await screen.findAllByRole('textbox');
    const button = await screen.findAllByRole('button');
    
    fireEvent.change(input[0], { target: { value: 'dog' } })
    
    expect(input[0].value).toBe('dog');
    expect(button[0]).toBeVisible();
  });
  
  test('search title in form', async () => {
    render(<App />);

    const buttonText = 'Search GIF';
    const input = await screen.findAllByRole('textbox');
    fireEvent.change(input[0], { target: { value: 'Matrix' } })
    
    const submitButton = await screen.findByText(buttonText);
    fireEvent.click(submitButton);
    // await act(async () => {
    //   const submitButton = await screen.findByText(buttonText);
    //   userEvent.click(submitButton);
    // });
    const title = await screen.findByText(/Matrix/i, {}, { timeout: 1500 });    
    
    // const title = await screen.findByText(/MATRIX/i);
    expect(title).toBeInTheDocument();
  });

  test('search button-search in App', async () => {
    render(<App />);
    
    const buttonText = 'Search GIF';
    const submitButton = await screen.findByText(buttonText);
  
    expect(submitButton.tagName).toBe('BUTTON');
    expect(submitButton).toHaveAttribute('type', 'submit');
  
    expect(submitButton).toBeInTheDocument(); 
    expect(submitButton).toBeVisible();
  });


})
