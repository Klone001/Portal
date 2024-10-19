import localFont from 'next/font/local'

const EFCircular = localFont({
  src: [
    {
      path: '../public/fonts/EFCircular-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/EFCircular-Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/EFCircular-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/EFCircular-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/EFCircular-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-efcircular'
})

export { EFCircular }