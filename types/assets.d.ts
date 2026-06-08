export type ImageProps = {
  name: string;
  resolution: {
    w: number;
    h: number;
  };
  ratio: '16:9' | '3:2';
  color?: string;
};
