const productsData = [
  {
    id: 1,
    name: 'react',
    title: 'React shirt',
    basePrice: 20,
    colors: ['blue', 'red', 'green'],
    sizes: [
      { name: 'S', additionalPrice: 0 },
      { name: 'M', additionalPrice: 5 },
      { name: 'L', additionalPrice: 6 },
      { name: 'XL', additionalPrice: 8 }
    ]
  },
  {
    id: 2,
    name: 'kodilla',
    title: 'Kodilla shirt',
    basePrice: 25,
    colors: ['white', 'black', 'red'],
    sizes: [
      { name: 'S', additionalPrice: 0 },
      { name: 'M', additionalPrice: 2 },
      { name: 'L', additionalPrice: 3 },
      { name: 'XL', additionalPrice: 4 }
    ]
  },
  {
    id: 3,
    name: 'kodilla',
    title: 'Kodilla shirt Extra',
    basePrice: 30,
    colors: ['black', 'red'],
    sizes: [
      { name: 'XS', additionalPrice: 0 },
      { name: 'S', additionalPrice: 2 },
      { name: 'M', additionalPrice: 4 },
      { name: 'L', additionalPrice: 6 },
      { name: 'XL', additionalPrice: 8 },
      { name: 'XXL', additionalPrice: 10 }
    ]
  }
];

export default productsData;