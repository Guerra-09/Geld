import { Cycles } from "./enums";

export interface Subscription {
  uuid?: string,
  name: string,
  price: string,
  icon: string,
  // iconColor: string,
  backgroundColor: string,
  textColor: string,
  startDate: string, // Date?
  endDate?: string, // Date?
  cycle: Cycles,
  notes: string,
  reminderEnabled: boolean,
  reminderTime: string, // enum de reminder dates
  disabled: boolean 
};

export interface DropdownItem {
  label: string;
  value: string;
}
