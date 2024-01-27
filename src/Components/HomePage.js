import React, { useEffect, useState } from 'react'

const HomePage = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(()=> {
        fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
        .then(res => res.json())
        .then(data => {    
                setBooks(data.items)
                console.log(data.items)
            }
            )
            .catch(error => console.log(error))
    }, [])
    
   

    return (
        <div className='home'>
            <div className='book-hero-section'> 
            {
                books.map((book, index) => {
                    return (
                        <div className='book-div' key={index}>
                            <img src={book.volumeInfo.imageLinks.thumbnail} />
                            <div className='title-div'>
                                <h1 id='book-title'>{book.volumeInfo.title}</h1>
                                <p id='book-description'>{book.volumeInfo.description}</p>
                                <button id='read-btn'>Now Read!</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default HomePage