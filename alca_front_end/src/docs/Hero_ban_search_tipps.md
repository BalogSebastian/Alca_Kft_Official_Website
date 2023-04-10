const handleSearch = () => {
switch (searchTerm.toLowerCase()) {
case 'aran':
history.push('/furniture_pages/KitchenAran');
break;
case 'nobiliat':
history.push('/furniture_pages/KitchenNobiliat');
break;
default:
// ha nem egyezik semmilyen kulcsszóval, akkor ne csinálj semmit
break;
}
};

    // const handleSearch = () => {
    //   // Az `searchTerm` alapján meghatározzuk az útvonalat
    //   // és átirányítjuk a felhasználót erre az útvonalra
    //   let url;
    //   if (searchTerm === 'Aran') {
    //     url = '/furniture_pages/FurnitureAran';
    //   } else if (searchTerm === 'Nobilia') {
    //     url = '/furniture_pages/FurnitureNobilia';
    //   }
    //   if (url) {
    //     window.open(url,'_blank')
    //   }
    // };

// const handleSearch = () => {
// if (searchTerm === 'Aran') {
// history.push('/furniture_pages/FurnitureAran');
// } else if (searchTerm === 'Nobilia') {
// history.push('/furniture_pages/FurnitureNobilia.jsx');
// }
// };

    // const handleSearch = () => {
    //   // Az `searchTerm` alapján meghatározzuk az útvonalat
    //   // és átirányítjuk a felhasználót erre az útvonalra
    //   let url;
    //   if (searchTerm === 'Aran') {
    //     url = '/furniture_pages/FurnitureAran';
    //   } else if (searchTerm === 'Nobilia') {
    //     url = '/furniture_pages/FurnitureNobilia';
    //   }
    //   if (url) {
    //     window.open(url,'_blank')
    //   }
    // };

    // const handleSearch = () => {
    //   if (searchTerm === 'Aran') {
    //     history.push('/furniture_pages/FurnitureAran');
    //   } else if (searchTerm === 'Nobilia') {
    //     history.push('/furniture_pages/FurnitureNobilia.jsx');
    //   }
    // };
