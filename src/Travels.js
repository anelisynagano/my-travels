import React from 'react';
import Travel from './Travel';

const travels = [
    {
        destination: "Belém Tower",
        country: "Portugal",
        photo: "https://i.imgur.com/Vuqcy0z.jpg",
        distance: "10km"
    },
    {
        destination: "Golden Gate Bridge",
        country: "USA",
        photo: "https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Golden_Gate_Bridge_and_San_Francisco_at_sunset.jpg/300px-Golden_Gate_Bridge_and_San_Francisco_at_sunset.jpg",
        distance: "5000km"
    },
    {
        destination: "Brandenburg Gate",
        country: "Germany",
        photo: "https://www.berlin.de/binaries/asset/image_assets/3984879/source/1488186173/624x468/",
        distance: "1500km"
    },
    {
        destination: "Mount Fuji",
        country: "Japan",
        photo: "https://www.telegraph.co.uk/content/dam/Travel/2018/April/mt-fuji-GettyImages-938096592.jpg?imwidth=1400",
        distance: "5500km"
    },
    {
        destination: "Avenida Paulista",
        country: "Brazil",
        photo: "https://saopaulosemmesmice.com.br/wp-content/uploads/2018/05/o-que-fazer-na-avenida-paulista-sp-01.jpg",
        distance: "2000km"
    },
]


const Travels = () => (
    <div>
      {travels.map((travels) => (
        <Travel key = {travels.destination}
            destination = {travels.destination}
            country = {travels.country}
            photo = {travels.photo} 
            distance = {travels.distance}/>
      ))}
    </div>
  );
  
export default Travels;
