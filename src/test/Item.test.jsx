import {describe, expect, it} from "vitest";
import Item from "../components/Item.jsx";
import {render,screen} from "@testing-library/react";

describe("Item", function() {
    it("renders correctly", function() {
        const testBook = {
            id: 1,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            publication_year: 1960,
            genre: ["Fiction", "Classic"],
            description: "A classic novel depicting racial injustice in the American South.",
            url: "https://fakeimg.pl/667x1000/cc6600"
        };

        render(<Item {...testBook} />);
        screen.debug();

        expect(screen.getByText("To Kill a Mockingbird")).toBeInTheDocument();
        expect(screen.getByText("To Kill a Mockingbird")).toHaveAttribute(
            "href",
            "https://fakeimg.pl/667x1000/cc6600"
        );
        expect(screen.getByRole('checkbox')).toBeInTheDocument();


    })
})