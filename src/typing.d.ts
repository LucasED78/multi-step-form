import Stripe from 'stripe';

declare type Plan = Stripe.Product & {
  pricing: Record<EPlanFrequency, Stripe.Price>;
};

declare interface ISubscriptionForm {
  step: number;
  name?: string;
  emailAddress?: string;
  phoneNumber?: string;
  frequency?: EPlanFrequency;
  features?: EFeature[];
  planId?: string;
}
