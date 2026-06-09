export type ImageProps = {
  name: string;
  resolution: {
    w: number;
    h: number;
  };
  ratio: '16:9' | '3:2' | '1:1' | '2:1' | '1:2' | '2:3' | '9:16';
  color?: string;
};
