import { typings } from '../../../../shared/lib/typings'

export const inputsConfig = [
  {
    name: 'firstName',
    label: typings.firstName,
    required: true,
  },
  {
    name: 'lastName',
    label: typings.lastName,
    required: true,
  },
  {
    name: 'companyName',
    label: typings.companyName,
    required: false,
    cols: 2,
  },
  {
    name: 'country',
    label: typings.country,
    required: true,
    cols: 2,
  },
  {
    name: 'streetAddress',
    label: typings.streetAddress,
    required: true,
    autoComplete: 'address-line1',
  },
  {
    name: 'appartment',
    label: typings.appartment,
    required: false,
    autoComplete: 'address-line2',
  },
  {
    name: 'city',
    label: typings.city,
    required: true,
    cols: 2,
    autoComplete: 'address-level2',
  },
  {
    name: 'county',
    label: typings.county,
    required: false,
    cols: 2,
    autoComplete: 'county',
  },
  {
    name: 'postcode',
    label: typings.postcode,
    required: true,
    cols: 2,
    autoComplete: 'postal-code',
  },
  {
    name: 'phone',
    label: typings.phone,
    required: true,
    cols: 2,
    autoComplete: 'tel',
  },
  {
    name: 'email',
    label: typings.emailAddress,
    required: true,
    cols: 2,
    autoComplete: 'email',
    type: 'email',
  },
]

export const differentAddressInputs = [
  {
    name: 'firstName-alt',
    label: typings.firstName,
    required: true,
  },
  {
    name: 'lastName-alt',
    label: typings.lastName,
    required: true,
  },
  {
    name: 'companyName-alt',
    label: typings.companyName,
    required: false,
    cols: 2,
  },
  {
    name: 'country-alt',
    label: typings.country,
    required: true,
    cols: 2,
  },
  {
    name: 'streetAddress-alt',
    label: typings.streetAddress,
    required: true,
    autoComplete: 'address-line1',
  },
  {
    name: 'appartment-alt',
    label: typings.appartment,
    required: false,
    autoComplete: 'address-line2',
  },
  {
    name: 'city-alt',
    label: typings.city,
    required: true,
    cols: 2,
    autoComplete: 'address-level2',
  },
  {
    name: 'postcode-alt',
    label: typings.postcode,
    required: true,
    cols: 2,
    autoComplete: 'postal-code',
  },
]
