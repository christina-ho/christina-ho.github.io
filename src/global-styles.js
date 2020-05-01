import { createGlobalStyle } from 'styled-components';

const mainFont = 'Muli';

export const theme = {
  display: {
    desktop: 900,
    tablet: 600,
    phone: 480,
  },
  colors: {
    logo: '#4881ea',
    black: '#383838',
    gray: '#606060',
    white: '#ffffff',
  },
  text: {
    headline: {
      type: 'p',
      style: {
        fontSize: '2rem',
        fontFamily: mainFont,
        marginBottom: '15px',
        fontWeight: '600',
      },
    },
    subHeadline: {
      type: 'p',
      style: {
        fontSize: '1.8rem',
        fontFamily: mainFont,
        marginBottom: '15px',
      },
    },
    nav: {
      type: 'p',
      style: {
        fontSize: '0.8rem',
        fontFamily: mainFont,
        border: '1px solid #383838',
        borderRadius: '5px',
        padding: '2px 15px',
      },
    },
    title: {
      type: 'p',
      style: {
        fontSize: '1.5rem',
        fontFamily: mainFont,
      },
    },
    subtitle: {
      type: 'p',
      style: {
        fontSize: '2.5rem',
        fontFamily: mainFont,
        fontWeight: 'bold',
      },
    },
    body: {
      type: 'p',
      style: {
        fontSize: '1.2rem',
        fontFamily: mainFont,
      },
    },
    boldBody: {
      type: 'p',
      style: {
        fontSize: '1.2rem',
        fontFamily: mainFont,
        fontWeight: 'bold',
      },
    },
    subscript: {
      type: 'span',
      style: {
        fontSize: '0.7rem',
        fontFamily: mainFont,
      },
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: whitesmoke;
  }
  .ReactCollapse--collapse {
    transition: height 500ms;
  }
`;
