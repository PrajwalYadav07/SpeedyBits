import React from 'react'
import Events from '../Components/Events';
import Gallery from '../Components/Gallery';
import Book from '../Components/Book';

const EventPage = () => {
    return (
        <>
            <div style={{ paddingTop: "90px" }}></div>
            <Events />
            <Book />
            <Gallery />
        </>
    )
}
export default EventPage;