import '@testing-library/jest-dom';
import { describe, test, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Card } from '../index';

describe('Card component', () => {
  test('renders title correctly', () => {
    const title = 'Test Title';
    const openModalMock = vi.fn();
    const updateTaskMock = vi.fn();
    const deleteTaskMock = vi.fn();

    const { getByText } = render(
      <Card
        title={title}
        openModal={openModalMock}
        updateTask={updateTaskMock}
        deleteTask={deleteTaskMock}
      />
    );
    expect(getByText(title)).toBeInTheDocument();
  });

  test('calls openModal when title is clicked', () => {
    const openModalMock = vi.fn();
    const updateTaskMock = vi.fn();
    const deleteTaskMock = vi.fn();
    const { getByText } = render(
      <Card
        title="Test Title"
        openModal={openModalMock}
        updateTask={updateTaskMock}
        deleteTask={deleteTaskMock}
      />
    );
    fireEvent.click(getByText('Test Title'));
    expect(openModalMock).toHaveBeenCalled();
  });

  test('calls updateTask when Pen icon is clicked', () => {
    const openModalMock = vi.fn();
    const updateTaskMock = vi.fn();
    const deleteTaskMock = vi.fn();
    const { getByLabelText } = render(
      <Card
        title="Test Title"
        openModal={openModalMock}
        updateTask={updateTaskMock}
        deleteTask={deleteTaskMock}
      />
    );
    fireEvent.click(getByLabelText('pen-icon'));
    expect(updateTaskMock).toHaveBeenCalled();
  });

  test('calls deleteTask when Trash icon is clicked', () => {
    const openModalMock = vi.fn();
    const updateTaskMock = vi.fn();
    const deleteTaskMock = vi.fn();
    const { getByLabelText } = render(
      <Card
        title="Test Title"
        openModal={openModalMock}
        updateTask={updateTaskMock}
        deleteTask={deleteTaskMock}
      />
    );
    fireEvent.click(getByLabelText('trash-icon'));
    expect(deleteTaskMock).toHaveBeenCalled();
  });

  test('should match to snapshot', () => {
    const openModalMock = vi.fn();
    const updateTaskMock = vi.fn();
    const deleteTaskMock = vi.fn();
    const { container } = render(
      <Card
        title="Test Title"
        openModal={openModalMock}
        updateTask={updateTaskMock}
        deleteTask={deleteTaskMock}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
