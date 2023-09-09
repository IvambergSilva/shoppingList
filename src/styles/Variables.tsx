export const Product = {
    purple_light: '#A881E6',
    purple: '#7450AC',
    purple_dark: '$purple_dark'
}

export const Base = {
    gray_100: '#FBF9FE',
    gray_200: '#AFABB6',
    gray_300: '#252529',
    gray_400: '#17171A',
    gray_500: '#111112',
    gray_600: '#',
}

export const Feedback = {
    success_light: '#4E995E',
    success: '#2F723D',
}
export const Support = {
    pink: '#DB5BBF',
    orange: '#E07B67',
    yellow: '#BB9F3A',
    green: '#8CAD51',
    blue: '#7B94CB',
    pink_dark: '#251622',
    orange_dark: '#261A17',
    yellow_dark: '#211E12',
    green_dark: '#1C2015',
    blue_dark: '#1C2015'
}

function createTextStyle(size: string, lineHeight: string, weight: string) {
    return { size, lineHeight, weight }
}

export const PrimaryHeading = createTextStyle('2.4rem', '100%', '700')
export const SecundaryHeading = createTextStyle('1.4rem', '130%', '700')
export const Button = createTextStyle('1.4rem', '130%', '600')
export const Tag = createTextStyle('1.2rem', '130%', '600')
export const Body = createTextStyle('1.2rem', '130%', '400')
