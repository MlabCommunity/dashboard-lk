export const createImage = (url: string) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.src = url;
  });

export const getCroppedImg = async (imageSrc: string, pixelCrop: any) => {
  // const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return null;
  }

  const data = ctx.getImageData(
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height
  );

  ctx.putImageData(data, 0, 0);

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // return canvas.toDataURL("image/jpeg");
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    canvas.toBlob((file: any) => {
      resolve(URL.createObjectURL(file));
      console.log(file);
    });
  });
};
