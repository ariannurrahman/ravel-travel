export const TOKEN_KEY = 'RAVEL_TRAVEL_COOKIE';

export const toastErrorStyle = {
  background: '#E5111E',
  color: 'white',
  fontSize: '32px',
  width: 'fit-content',
  height: '134px',
  whiteSpace: 'nowrap',
  alignText: 'center',
  fontWeight: 600,
  borderRadius: 22,
};

export const toastSuccessStyle = {
  background: '#33E164',
  color: 'white',
  fontSize: '32px',
  width: 'fit-content',
  height: '134px',
  whiteSpace: 'nowrap',
  alignText: 'center',
  fontWeight: 600,
  borderRadius: 22,
};

export const ROUTE = [
  {
    label: 'Home',
    href: '/',
    key: 'home',
    attr: 'h-nav-home',
  },
  {
    label: 'Tempat Lain',
    href: '/pencarian',
    key: 'other-place',
    attr: 'h-nav-other-place',
  },
  {
    label: 'Testimoni',
    href: '/ulasan',
    key: 'testimony',
    attr: 'h-nav-testimoni',
  },
];

const BASE_URL = 'https://ravel-service-xxhcefyn2a-et.a.run.app';
const VERSIONING = '/api/v1';
export const API_URL = BASE_URL + VERSIONING;
