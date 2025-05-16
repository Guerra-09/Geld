import { Cycles } from "./enums";

export interface Subscription {
  uuid: string,
  name: string,
  price: string,
  icon: string,
  iconColor: string,
  backgroundColor: string,
  textColor: string,
  startDate: Date,
  endDate?: Date,
  cycle: Cycles
};
