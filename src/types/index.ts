export enum ESubscriptionSteps {
  PersonalInfo = 1,
  PlanSelector = 2,
  FeaturesPicker = 3,
  Summary = 4,
}

export enum EPlanFrequency {
  Monthly = 'monthly',
  Yearly = 'yearly',
}

export enum EFeature {
  OnlineService = 'Online Service',
  LargerStorage = 'Large Storage',
  CustomizableProfile = 'Customizable Profile',
}

export const features: Record<EFeature, Record<EPlanFrequency, number>> = {
  [EFeature.OnlineService]: {
    [EPlanFrequency.Monthly]: 1,
    [EPlanFrequency.Yearly]: 10,
  },
  [EFeature.LargerStorage]: {
    [EPlanFrequency.Monthly]: 2,
    [EPlanFrequency.Yearly]: 20,
  },
  [EFeature.CustomizableProfile]: {
    [EPlanFrequency.Monthly]: 2,
    [EPlanFrequency.Yearly]: 20,
  },
};

export const featuresDescription: Record<EFeature, string> = {
  [EFeature.OnlineService]: 'Access to multiplayer games',
  [EFeature.LargerStorage]: 'Extra 1TB of cloud save',
  [EFeature.CustomizableProfile]: 'Custom theme on your profile',
};
