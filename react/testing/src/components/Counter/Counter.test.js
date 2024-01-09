import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Counter from "./index";

test("increase btn", () => {
    render(<Counter />);
    const count = screen.getByText("0");
    const increaseBtn = screen.getByText("Increase");
    
    act(() => {
        userEvent.click(increaseBtn);
    })
    expect(count).toHaveTextContent("1");
})

test("decrease btn", () => {
    render(<Counter />);
    const count = screen.getByText("0");
    const decreaseBtn = screen.getByText("Decrease");

    act(() => {
        userEvent.click(decreaseBtn);
    });
    expect(count).toHaveTextContent("-1");
})