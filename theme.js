import { yellow as theme } from 'mdx-deck/themes'

export default {
  ...theme,
  colors: {
    // background: '#3b3c38',
    background: '#fff',
    // text: '#f5da55',
    text: '#000',
    code: '#f5da55',
    // link: '#f5da55',
    link: '#000',
    preBackground: '#f5da55',
    pre: '#000'
  },
  blockquote: {
    fontWeight: 400
  },
  pre: {
    fontSize: '1.2rem'
  },
  heading: {
    textTransform: 'capitalize'
  }
}
