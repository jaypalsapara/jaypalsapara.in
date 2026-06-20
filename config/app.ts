export const ENV = process.env.NEXT_PUBLIC_APP_ENV ?? 'production';

export const isProduction = ENV === 'production';
