import localFont from 'next/font/local'

const EFCircular = localFont({
  src: [
    {
      path: '../public/fonts/EFCIRCULAR-LIGHT.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-efcircular'
})

export { EFCircular }