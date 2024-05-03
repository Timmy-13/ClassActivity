import React, { useState } from 'react';

export default function Bookdata() {
    const books = [
        {
            name: "To Kill a Mockingbird",
            date_of_publish: "July 11, 1960",
            description: "A novel by Harper Lee, set in the American South during the 1930s. It explores themes of racial injustice and moral growth.",
            genre: "Fiction",
            status: "Available"
        },
        {
            name: "1984",
            date_of_publish: "June 8, 1949",
            description: "A dystopian novel by George Orwell, depicting a totalitarian regime that suppresses individuality and free thought.",
            genre: "Science Fiction",
            status: "Available"
        },
        {
            name: "The Great Gatsby",
            date_of_publish: "April 10, 1925",
            description: "A novel by F. Scott Fitzgerald, set in the Jazz Age of the 1920s. It explores themes of decadence, idealism, and social upheaval.",
            genre: "Literary Fiction",
            status: "Available"
        },
        {
            name: "Pride and Prejudice",
            date_of_publish: "January 28, 1813",
            description: "A romantic novel by Jane Austen, exploring issues of marriage, class, and reputation in early 19th-century England.",
            genre: "Romance",
            status: "Available"
        },
        {
            name: "The Catcher in the Rye",
            date_of_publish: "July 16, 1951",
            description: "A novel by J.D. Salinger, narrated by a teenager who rebels against the 'phoniness' of adult society.",
            genre: "Literary Fiction",
            status: "Available"
        },
        {
            name: "The Lord of the Rings",
            date_of_publish: "July 29, 1954",
            description: "A fantasy epic by J.R.R. Tolkien, following the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
            genre: "Fantasy",
            status: "Available"
        },
        {
            name: "Harry Potter and the Philosopher's Stone",
            date_of_publish: "June 26, 1997",
            description: "The first book in the Harry Potter series by J.K. Rowling, following the adventures of a young wizard, Harry Potter, and his friends at Hogwarts School of Witchcraft and Wizardry.",
            genre: "Fantasy",
            status: "Available"
        },
        {
            name: "Moby-Dick",
            date_of_publish: "October 18, 1851",
            description: "A novel by Herman Melville, telling the story of Ishmael's voyage aboard the whaling ship Pequod, led by the obsessive Captain Ahab in pursuit of the white whale, Moby Dick.",
            genre: "Adventure",
            status: "Available"
        },
        {
            name: "The Hobbit",
            date_of_publish: "September 21, 1937",
            description: "A fantasy novel by J.R.R. Tolkien, serving as a prelude to his epic trilogy, The Lord of the Rings, and following the adventures of Bilbo Baggins.",
            genre: "Fantasy",
            status: "Available"
        },
        {
            name: "The Picture of Dorian Gray",
            date_of_publish: "June 20, 1890",
            description: "A novel by Oscar Wilde, depicting the moral degradation of a young man named Dorian Gray after he sells his soul in exchange for eternal youth and beauty.",
            genre: "Gothic Fiction",
            status: "Available"
        }
    ];
    
    

    const [isListView, setIsListView] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = books.filter(
        book => book.name.toLowerCase().includes(searchTerm.toLowerCase()) || book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="text-3xl font-bold">Book List</h1>
                <button
                    onClick={() => setIsListView(!isListView)}
                    className="btn btn-primary"
                >
                    Switch to {isListView ? 'Grid View' : 'List View'}
                </button>
            </div>
            <input
                type="text"
                placeholder="Search Book..."
                onChange={e => setSearchTerm(e.target.value)}
                className="form-control mb-3"
            />
            {isListView ? (
                <table className="table table-bordered">
                    <thead className="bg-gray-200">
                        <tr>
                            <th>Name</th>
                            <th>Date of Publish</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBooks.map((book, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                <td className='p-3'>{book.name}</td>
                                <td className='p-3'>{book.date_of_publish}</td>
                                <td className='p-3'>{book.description}</td>
                                <td className='p-3'>{book.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {filteredBooks.map((book, index) => (
                        <div key={index} className="col mb-4">
                            <div className="p-4 border rounded bg-white shadow-md">
                                <div className="fw-bold mb-2">{book.name}</div>
                                <div>{book.genre}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
