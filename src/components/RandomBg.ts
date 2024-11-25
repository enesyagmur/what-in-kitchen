const backgroundImages = [
  import("../assets/home-images/homebg3.png"),
  import("../assets/home-images/homebg4.png"),
  import("../assets/home-images/homebg5.png"),
  import("../assets/home-images/homebg6.png"),
  import("../assets/home-images/homebg7.png"),
];

const getRandomImage = async () => {
  const images = await Promise.all(backgroundImages);
  const image = images[Math.floor(Math.random() * images.length)];
  return image.default;
};

export default getRandomImage;
