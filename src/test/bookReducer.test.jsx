import {describe, expect, it} from "vitest";
import {bookReducer} from "../pages/BooksView.jsx";

describe('Test de la fonction bookReducer', () => {
    it('Affectation de livres', () => {
        const books = [
            {
                id: 1,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                publication_year: 1960,
                genre: [
                    "Fiction",
                    "Classic"
                ],
                description: "A classic novel depicting racial injustice in the American South.",
                cover_image: "https://fakeimg.pl/667x1000/cc6600"
            },
            {
                id: 2,
                title: "1984",
                author: "George Orwell",
                publication_year: 1949,
                genre: [
                    "Dystopian",
                    "Science Fiction"
                ],
                description: "A dystopian novel portraying a totalitarian society.",
                cover_image: "https://fakeimg.pl/667x1000/cc6600"
            }
        ];

        const action = {type: "SET_BOOKS", payload: books};
        const initialState = [];

        const newState = bookReducer(initialState, action);

        const expectedState = [
            {
                id: 1,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                publication_year: 1960,
                genre: [
                    "Fiction",
                    "Classic"
                ],
                description: "A classic novel depicting racial injustice in the American South.",
                cover_image: "https://fakeimg.pl/667x1000/cc6600"
            },
            {
                id: 2,
                title: "1985",
                author: "George Orwell",
                publication_year: 1949,
                genre: [
                    "Dystopian",
                    "Science Fiction"
                ],
                description: "A dystopian novel portraying a totalitarian society.",
                cover_image: "https://fakeimg.pl/667x1000/cc6600"
            }
        ];

        expect(newState).toStrictEqual(expectedState);
    })
})