import { DefaultTheme } from 'styled-components';

export const LightTheme: DefaultTheme = {
  defaultWidth: {
    xxs: 34,
    xs: 94,
    small: 106,
    medium: 148,
    large: 184,
    xl: 276,
    xxl: 432,
    full: '100%',
  },

  defaultHeight: 34,

  color: {
    background: '#F5F5F5',
    surface: '#FFFFFF',
    border: '#DEDEDF',
    borderActive: '#000000',

    disabled: '#F8F8F8',
    disabledButton: '#E0E1E2',
    disabledText: '#AAAAAA',
    disabledSelect: '#E0E1E2',

    placeholderText: '#CCCCCC',

    text: '#333333',

    checkboxBorder: '#D4D4D4',

    point: '#0072CE',
    point2: '#63A2AD',

    tabBackground: '#e5e5e5',
    tabText: '#5A5A5A',

    accordionBackground: '#F4F4F4',
    accordionBackgroundBlue: '#EDF4FA',
    scrollbar: '#DFDFDF',

    tableHeaderText: '#788590',
    tableHeaderBackground: '#DDEDFA',
    tableBackground: '#F4FAFF',
    tableHoverBackground: '#DEFCFF',

    error: '#D60303',
    warning: '#d7c75d',
    arrow: '#333',

    guideBoxText: '#63a2ad',
    guideBoxBackground: '#ecf9fc',
    guideBoxFoldText: '#9BA9AC',

    darkmodeHoverButton: '#FFF367',
    darkmodeHoverBackground: '#2C2D32',

    // box: '#FFFFFF',
    // boxCategory: '#F5F5F5',
    // tableCategory: '#f2f6fc',
    // select: '#DEFCFF',
    // point: '#0072CE',
    // point2: '#63A2AD',

    // mainFont: '#333333',
    // fontDisable: '#65748D',
    // placeholder: '#CCCCCC',

    // borderDefault: '#DDDDDD',
    // borderActive: '#333333',
  },
};

export const DarkTheme: DefaultTheme = {
  defaultWidth: {
    xxs: 34,
    xs: 94,
    small: 106,
    medium: 148,
    large: 184,
    xl: 276,
    xxl: 432,
    full: '100%',
  },

  defaultHeight: 34,

  color: {
    background: '#181920',
    surface: '#2C2D32',
    border: '#42424A',
    borderActive: '#F2F3F9',

    disabled: '#35363B',
    disabledButton: '#36373F',
    disabledText: '#777777',
    disabledSelect: '#36373F',

    placeholderText: '#CCCCCC',

    text: '#B5B5BD',

    checkboxBorder: '#747474',

    point: '#4585FF',
    point2: '#83CAD3',

    tabBackground: '#25262E',
    tabText: '#5A5A5A',

    accordionBackground: '#36373F',
    accordionBackgroundBlue: '#3B3C43',
    scrollbar: '#3B3C41',

    tableHeaderText: '#C6C7CD',
    tableHeaderBackground: '#494A51',
    tableBackground: '#36373F',
    tableHoverBackground: '#304674',

    error: '#FF5C5C',
    warning: '#ffe850',
    arrow: '#AAA',

    guideBoxText: '#92C8D1',
    guideBoxBackground: '#36373E',
    guideBoxFoldText: '#71A1AB',

    darkmodeHoverButton: '#0072CE',
    darkmodeHoverBackground: '#F2F3F9',
  },
};
