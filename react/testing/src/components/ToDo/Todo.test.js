import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import ToDo from "./index";

describe("Todo test", () => {
    let button, input;

    beforeEach(() => {
        render(<ToDo />);
        button = screen.getByText("Click");
        input = screen.getByLabelText("Text");
    });

    test("default itemler render edilmeli", () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    });

    test("input ve button dokumna da var mi", () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test("inputa metin girilip butona tiklandiginda metin listelenmeli", () => {
        const name = "Mehmet";
        act(() => {
            userEvent.type(input, name);
            userEvent.click(button);
        });
        expect(screen.getByText(name)).toBeInTheDocument();
    });
});