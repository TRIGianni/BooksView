
import {describe, expect, it, vi} from "vitest";
import {fireEvent,render,screen} from "@testing-library/react";
import Search from "../components/Search.jsx";

describe("Tester la zone de texte", () => {
    it("Tester l'appel de la fonction callback", () => {
        const handleSearchMock = vi.fn();

        render(<Search callback={handleSearchMock} />);

        fireEvent.change(screen.getByRole('textbox'), {
            target: {
                value: "Redux",
            }
        })
        expect(handleSearchMock).toHaveBeenCalled();
    })
})