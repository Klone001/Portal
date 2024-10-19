import localFont from 'next/font/local'

const EFCircular = localFont({
  src: [
    {
      path: '../public/fonts/EFCIRCULAR-LIGHT.OTF',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/EFCIRCULAR-BOOK.OTF',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/EFCIRCULAR-MEDIUM.OTF',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/EFCIRCULAR-BOLD.OTF',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/EFCIRCULAR-BLACK.OTF',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-efcircular'
})

export { EFCircular }