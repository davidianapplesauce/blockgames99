const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_WSdWFGnziN3seRIBWTt6NOOd'
  : 'pk_test_GzQpZThy6SQrcA0x3MwtJv22';

export default STRIPE_PUBLISHABLE;
