import TodoList from "./TodoList";
import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

test("Löytyykö napit", () => {
    render(<TodoList />);
    const Lisää = screen.getByText(/Lisää/);
    const Poista = screen.getByText(/Poista/);
    const Tyhjenna = screen.getByText(/Tyhjennä/);
    expect(Lisää, Poista, Tyhjenna).toBeInTheDocument();
});


test('Toimiiko lisäys', () => {
    render(<TodoList />);
    const descInput = screen.getByLabelText('Kuvaus');
    const prioritySelect = screen.getByTestId('priority');
    const dateInput = screen.getByLabelText('Päivämäärä');
    const addButton = screen.getByText('Lisää');

    fireEvent.change(descInput, { target: { value: 'Testaamista' } });
    fireEvent.change(prioritySelect, { target: { value: 'Keskitaso' } });
    fireEvent.change(dateInput, { target: { value: '26.03.2024' } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText('Testaamista');
    expect(todoItem).toBeInTheDocument();
});

test('Toimiiko tyhjennys', () => {
    render(<TodoList />);
    const clearButton = screen.getByText('Tyhjennä');
    fireEvent.click(clearButton);

    const todoItem = (screen.queryByText('Testaamista'));
    expect(todoItem).not.toBeInTheDocument();
});