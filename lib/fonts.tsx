import localFont from 'next/font/local'

const EFCircular = localFont({
  src: [
    {
      path: '/fonts/EFCIRCULAR-LIGHT.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/EFCIRCULAR-BOOK.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/EFCIRCULAR-MEDIUM.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/EFCIRCULAR-BOLD.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/EFCIRCULAR-BLACK.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-efcircular'
})

export { EFCircular }