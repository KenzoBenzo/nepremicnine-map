export type Property = {
  title: string;
  images: [string];
  location: {
    neighborhood: string;
    longitude: number;
    latitude: number;
    address: {
      street: string;
      city: string;
      postalCode: number;
    };
  };
  totalPrice: number;
  pricePerMeterSq: number;
  plotSize: number;
  floorSize: number;
  bedRooms: number;
  bathRooms: number;
};
