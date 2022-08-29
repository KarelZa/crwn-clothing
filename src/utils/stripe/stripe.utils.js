import { loadStripe } from '@stripe/stripe-js'; // to assign instance

export const striplePromise = loadStripe(process.env.REACT_APP_STRIPLE_PUBLISHABLE_KEY);
