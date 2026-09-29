// Every page on the site. Add a new page here + a matching views/pages/<view>.ejs
module.exports = [
  {
    path: '/',
    view: 'index',
    title: 'Mini Girly Games — Fun mini games for girls',
    description: 'Mini Girly Games is a colorful collection of mini games for girls — makeover, nail salon, cupcakes, doodles and more. Launching soon on the App Store and Google Play.',
  },
  {
    path: '/contact',
    view: 'contact',
    title: 'Contact Us — Mini Girly Games',
    description: 'Get in touch with the Mini Girly Games team at Stand Digital DOO.',
  },
  {
    path: '/terms',
    view: 'terms',
    title: 'Terms & Conditions — Mini Girly Games',
    description: 'Terms and Conditions for the Mini Girly Games app by Stand Digital DOO.',
  },
  {
    path: '/privacy',
    view: 'privacy',
    title: 'Privacy Policy — Mini Girly Games',
    description: 'Privacy Policy for the Mini Girly Games app by Stand Digital DOO.',
  },
];
