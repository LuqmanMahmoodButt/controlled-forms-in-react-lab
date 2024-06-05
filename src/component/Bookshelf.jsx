import React from "react";
import '../App.css'

const Bookshelf = () => {

    const [books, setBooks] = React.useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion King', author: 'C.S. Lewis' },
    ])


    const [currentBook, setCurrentBook] = React.useState({
        title: "",
        author: ""
    })

    const handleChange = (e) => {

        const newCurrentBook = structuredClone(currentBook)
        newCurrentBook[e.target.title] = e.target.value
        setCurrentBook(newCurrentBook)
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        const newBook = structuredClone(books)
        newBook.push(currentBook)
        setBooks(newBook)

        setCurrentBook({
            title: '',
            author: ''
        })

    }


    // function handleReset (){
    //     setBooks([])
    // }




    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Book Title"
                        type="text"
                        name='title'
                        onChange={handleChange}
                    // value={currentBook.title} 
                    />
                    <input
                        placeholder="Book Author"
                        type="text"
                        name="author"
                        onChange={handleChange}
                    // value={currentBook.author}
                    />
                    <button>
                        Add Book
                    </button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((item, index) => {
                    return <li className="bookCard" key={index}>
                        Book Name: {item.title}<br />
                        Author: {item.author}</li>
                })}</div>
        </div>
    )

}

export default Bookshelf
