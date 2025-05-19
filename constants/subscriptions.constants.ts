import { DropdownItem } from "./interfaces";

export const CYCLES_OPTIONS: DropdownItem[] = [
  { label: 'weekly', value: 'weekly' },
  { label: 'monthly', value: 'monthly' },
  { label: 'quarterly', value: 'quarterly' },
  { label: 'biannual', value: 'biannual' },
  { label: 'annual', value: 'annual' },];

export const REMINDER_OPTIONS: DropdownItem[] = [
  { label: '1 day before', value: '1' },
  { label: '2 days before', value: '2' },
  { label: '3 days before', value: '3' },
  { label: '4 days before', value: '4' },
  { label: '5 days before', value: '5' },
  { label: '6 days before', value: '6' },
  { label: '1 week before', value: '7' },
  { label: '2 weeks before', value: '14' },
  { label: '3 weeks before', value: '21' },
  { label: '1 month before', value: '28' },
]
