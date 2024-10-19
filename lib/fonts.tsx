import localFont from 'next/font/local'

const EFCircular = localFont({
  src: [
    {
      path: '../lib/fonts/EFCIRCULAR-LIGHT.OTF', 
      weight: '300',
      style: 'normal',
    },
    {
      path: '../lib/fonts/EFCIRCULAR-BOOK.OTF',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../lib/fonts/EFCIRCULAR-MEDIUM.OTF',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../lib/fonts/EFCIRCULAR-BOLD.OTF',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../lib/fonts/EFCIRCULAR-BLACK.OTF',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-efcircular',
})

export { EFCircular }
