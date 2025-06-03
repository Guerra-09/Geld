import { SubscriptionFormData } from '../constants/interfaces';

export interface ValidationError {
  field: keyof SubscriptionFormData;
  message: string;
}

export function validateSubscriptionForm(data: SubscriptionFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name?.trim()) {
    errors.push({
      field: 'name',
      message: 'Name is required',
    });
  }

  if (!data.price?.trim()) {
    errors.push({
      field: 'price',
      message: 'Price is required',
    });
  } else if (isNaN(Number(data.price)) || Number(data.price) < 0) {
    errors.push({
      field: 'price',
      message: 'Price must be a valid number',
    });
  }

  if (!data.startDate) {
    errors.push({
      field: 'startDate',
      message: 'Start date is required',
    });
  }

  if (data.endDate && new Date(data.endDate) <= new Date(data.startDate)) {
    errors.push({
      field: 'endDate',
      message: 'End date must be after start date',
    });
  }

  return errors;
}
