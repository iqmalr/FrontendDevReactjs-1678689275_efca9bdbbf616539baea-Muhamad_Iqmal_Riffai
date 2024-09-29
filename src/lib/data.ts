export type Restaurant = {
  restaurantsId: string;
  name: string;
  averageRating: number;
  currentOpenStatusText: string;
  squareImgUrl: string;
  priceTag: string;
  parentGeoName: string;
  establishmentTypeAndCuisineTags: string;
};

// const initialData: Restaurant[] = [
//   {
//     restaurantsId: "001",
//     name: "Rumah makan padang Pagi Sore",
//     averageRating: 4.5,
//     currentOpenStatusText: "Open",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$$",
//     parentGeoName: "Padang",
//     // establishmentTypeAndCuisineTags: []
//   },
//   {
//     restaurantsId: "002",
//     name: "Rumah makan soto sejahtera",
//     averageRating: 4,
//     currentOpenStatusText: "Closed",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$$$$",
//     parentGeoName: "Semarang",
//   },
//   {
//     restaurantsId: "003",
//     name: "Warung Nasi Uduk Ibu Onah",
//     averageRating: 4.3,
//     currentOpenStatusText: "Open",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$",
//     parentGeoName: "Jakarta",
//   },
//   {
//     restaurantsId: "66992c8ca79bde7486000016",
//     name: "Betsy",
//     averageRating: 1.1,
//     currentOpenStatusText: "Closed",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$",
//     parentGeoName: "JAPAN",
//   },
//   {
//     restaurantsId: "66992c8cc36e810211de91ef",
//     name: "Perkins",
//     averageRating: 1.5,
//     currentOpenStatusText: "Open",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$$$$",
//     parentGeoName: "JAPAN",
//   },
//   {
//     restaurantsId: "66992c8c62cb94b9470b655e",
//     name: "Hicks",
//     averageRating: 3.7,
//     currentOpenStatusText: "Open",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$$$",
//     parentGeoName: "CHINESE",
//   },
//   {
//     restaurantsId: "66992c8cf38e3be171fcc9d7",
//     name: "Selena",
//     averageRating: 0.7,
//     currentOpenStatusText: "Closed",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$",
//     parentGeoName: "CHINESE",
//   },
//   {
//     restaurantsId: "66992c8c3b8602c542a44184",
//     name: "Margaret",
//     averageRating: 3.8,
//     currentOpenStatusText: "Open",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$",
//     parentGeoName: "CHINESE",
//   },
//   {
//     restaurantsId: "66992c8c5f73850f8c8c856f",
//     name: "Alvarado",
//     averageRating: 2.2,
//     currentOpenStatusText: "Open",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$",
//     parentGeoName: "CHINESE",
//   },
//   {
//     restaurantsId: "66992c8c7fe1638afc6dd9d6",
//     name: "Angel",
//     averageRating: 2.6,
//     currentOpenStatusText: "Open",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$",
//     parentGeoName: "JAPAN",
//   },
//   {
//     restaurantsId: "66992c8cb7a5e4600b22fbcd",
//     name: "Todd",
//     averageRating: 4.9,
//     currentOpenStatusText: "Open",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$$$",
//     parentGeoName: "JAPAN",
//   },
//   {
//     restaurantsId: "66992c8cd5d3eab9bddd4fb2",
//     name: "Hutchinson",
//     averageRating: 0.8,
//     currentOpenStatusText: "Closed",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$",
//     parentGeoName: "SEAFOOD",
//   },
//   {
//     restaurantsId: "66992c8c496a971cc8745b9a",
//     name: "Nicole",
//     averageRating: 2.8,
//     currentOpenStatusText: "Closed",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$",
//     parentGeoName: "THAI",
//   },
//   {
//     restaurantsId: "66992c8cb3ed32223464f464",
//     name: "Ruthie",
//     averageRating: 1,
//     currentOpenStatusText: "Open",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$$$",
//     parentGeoName: "CHINESE",
//   },
//   {
//     restaurantsId: "66992c8c8417a71390d18e2c",
//     name: "Trudy",
//     averageRating: 3.8,
//     currentOpenStatusText: "Closed",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$$$$",
//     parentGeoName: "JAPAN",
//   },
//   {
//     restaurantsId: "66992c8c54b50ebccd748bf2",
//     name: "Meredith",
//     averageRating: 1.6,
//     currentOpenStatusText: "Open",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$$$",
//     parentGeoName: "CHINESE",
//   },
//   {
//     restaurantsId: "66992c8c45a03c00bac1ee1e",
//     name: "Dalton",
//     averageRating: 1.9,
//     currentOpenStatusText: "Closed",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$",
//     parentGeoName: "CHINESE",
//   },
//   {
//     restaurantsId: "66992c8c3c3a8750feac60a6",
//     name: "Leonor",
//     averageRating: 1.3,
//     currentOpenStatusText: "Closed",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$$$$",
//     parentGeoName: "SEAFOOD",
//   },
//   {
//     restaurantsId: "66992c8ca2d6cf7735925de4",
//     name: "Perry",
//     averageRating: 3.2,
//     currentOpenStatusText: "Closed",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$$$",
//     parentGeoName: "SEAFOOD",
//   },
//   {
//     restaurantsId: "66992c8c7dfc5fe5229bf251",
//     name: "Owens",
//     averageRating: 3.8,
//     currentOpenStatusText: "Open",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$",
//     parentGeoName: "JAPAN",
//   },
//   {
//     restaurantsId: "66992c8c870d8bb60094975b",
//     name: "Dixon",
//     averageRating: 4.1,
//     currentOpenStatusText: "Closed",
//     squareImgUrl: ImageRestaurant,
//     priceTag: "$$$",
//     parentGeoName: "CHINESE",
//   },
// ];

// const additionalData: Restaurant[] = Array.from({ length: 58 }, (_, index) => {
//   const id = index + 4;
//   const priceOptions = ["$$$$", "$$$", "$$", "$"];
//   const randomPrice =
//     priceOptions[Math.floor(Math.random() * priceOptions.length)];
//   return {
//     restaurantsId: String(id).padStart(3, "0"),
//     name: `Restaurant ${id}`,
//     averageRating: parseFloat((Math.random() * 5).toFixed(1)),
//     currentOpenStatusText: Math.random() > 0.5 ? "Open" : "Closed",
//     squareImgUrl: ImageRestaurant,
//     priceTag: randomPrice,
//     parentGeoName: `City ${id}`,
//   };
// });

// export const data: Restaurant[] = [...initialData, ...additionalData];
// export const data: Restaurant[] = [...initialData];
