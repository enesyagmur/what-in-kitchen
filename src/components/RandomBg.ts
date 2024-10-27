const backgroundImages = [
  import("../assets/homebg3.png"),
  import("../assets/homebg4.png"),
  import("../assets/homebg5.png"),
  import("../assets/homebg6.png"),
  import("../assets/homebg7.png"),
];

const getRandomImage = async () => {
  const images = await Promise.all(backgroundImages);
  const image = images[Math.floor(Math.random() * images.length)];
  return image.default;
};

export default getRandomImage;
