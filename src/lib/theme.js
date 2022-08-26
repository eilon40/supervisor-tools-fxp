import { extendTheme } from '@chakra-ui/react';

const styles = {
    global: {
        body: {
            bg: '#FAFAFA',
            color: 'fxpDark',
        },
    },
};

const colors = {
    fxpBlue: '#3399ff',
    fxpDark: '#3e3e3e',
    fxpGold: '#daa520',
    fxpRed: '#ff0000',
    fxpSup: '#0000ff',
};

const components = {
    Link: {
        baseStyle: {
            '&:hover': {
                textDecoration: 'none',
                transition: '400ms ease-in-out all',
                color: 'fxpBlue',
            },
        },
    },
    Heading: {
        variants: {
            'normal-h': {
                color: 'fxpDark',
                fontSize: '2rem',
                textShadow: '2px 2px 5px #00000044',
            },
            'sub-h': {
                color: 'fxpBlue',
                fontSize: '.8em',
                fontWeight: 'normal',
            },
            'fields-h': {
                fontSize: '1.5em',
                marginBottom: '1em',
            },
        },
    },
    Button: {
        variants: {
            'next-btn': {
                bg: 'fxpBlue',
                color: '#fafafa',
                _hover: {
                    bg: 'blue.400',
                },
                margin: '1.5em 0',
            },
            'prev-btn': {
                bg: 'blue.600',
                color: '#fafafa',
                _hover: {
                    bg: 'blue.700',
                },
                margin: '1.5em 0',
            },
            'menu-btn': {
                color: '#fafafa',
                bg: '#333333',
                _hover: {
                    bg: 'fxpBlue',
                },
                _active: {
                    bg: 'fxpBlue',
                },
            },
        },
        defaultProps: {
            size: 'sm',
        },
    },
};

const theme = extendTheme({ styles, components, colors });

export default theme;
