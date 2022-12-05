import * as yup from 'yup';
import { EPlanFrequency } from '../../../types';

export default yup.object({
  name: yup.string().required('This field is required'),
  emailAddress: yup
    .string()
    .email('This must be a valid email')
    .required('This field is required'),
  phoneNumber: yup.string().required('This field is required'),
  planId: yup.string().required(),
  frequency: yup
    .mixed<EPlanFrequency>()
    .oneOf(Object.values(EPlanFrequency))
    .required(),
  features: yup.array().required(),
});
