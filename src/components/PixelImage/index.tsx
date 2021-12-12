import React, {
  FC,
  useRef,
  useEffect,
  memo,
} from 'react';

import PixelImagePropTypes from './PixelImagePropTypes';

const PixelImage: FC<PixelImagePropTypes> = ({
  src,
  width,
  height,
  blur = 50,
  scale = 0.01,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const pixelImage = () => {
    if (!imageRef?.current || !canvasRef?.current) return;

    const maxBlur = 100;
    const realBlur = blur % maxBlur;
    const currentBlur = realBlur === 0 ? 1 : maxBlur - realBlur;

    const currentScale = currentBlur * scale;

    const { current: canvas } = canvasRef;
    const { current: image } = imageRef;

    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext('2d');

    if (ctx) {
      const widthScale = canvas.width * currentScale;
      const heighthScale = canvas.height * currentScale;

      ctx.imageSmoothingEnabled = false;

      ctx.drawImage(image, 0, 0, widthScale, heighthScale);
      ctx.drawImage(canvas, 0, 0, widthScale, heighthScale, 0, 0, image.width, image.height);

      image.style.display = 'none';
      canvas.style.display = 'inherit';
    }
  };

  useEffect(() => {
    pixelImage();
  }, [width, height, blur, scale]);

  return (
    <>
      <img
        ref={imageRef}
        aria-hidden
        alt="pixel-image"
        src={src}
        width={width}
        height={height}
        className="pixel-image"
        style={{
          objectFit: 'fill',
        }}
        onLoad={pixelImage}
      />
      <canvas
        ref={canvasRef}
        className="pixel-image"
        style={{
          display: 'non',
        }}
      />
    </>
  );
};

export default memo(PixelImage);
