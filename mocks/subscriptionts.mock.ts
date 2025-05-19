import { Cycles } from "@/constants/enums";
import { Subscription } from "@/constants/interfaces";

export const subscriptionMock: Subscription[] = [
    {
      uuid: 'uuid1',
      name: 'Spotify',
      price: '9.99',
      icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111624.png',
      iconColor: '',
      textColor: 'white',
      backgroundColor: '#000000',
      startDate: new Date(),
      cycle: Cycles.monthly
    },
    {
      uuid: 'uuid2',
      name: 'Netflix',
      price: '12.99',
      icon: 'https://cdn-icons-png.flaticon.com/512/732/732228.png',
      iconColor: '',
      textColor: 'black',
      backgroundColor: '#FFFFFF',
      startDate: new Date(),
      cycle: Cycles.monthly
    },
    {
      uuid: 'uuid3',
      name: 'Youtube Premium',
      price: '12.99',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/1200px-YouTube_Premium_logo.svg.png',
      iconColor: '',
      textColor: 'black',
      backgroundColor: '#FFFFFF',
      startDate: new Date(),
      cycle: Cycles.monthly
    },
    {
    uuid: 'uuid4-aws',
    name: 'AWS Prime',
    price: '14.99',
    icon: 'https://cdn-icons-png.flaticon.com/512/873/873107.png',
    iconColor: '#FF9900',
    textColor: 'white',
    backgroundColor: '#232F3E',
    startDate: new Date(),
    cycle: Cycles.annual
  },
  {
    uuid: 'uuid5-disney',
    name: 'Disney+',
    price: '7.99',
    icon: 'https://cdn-icons-png.flaticon.com/512/3670/3670304.png',
    iconColor: '',
    textColor: 'white',
    backgroundColor: '#0063E5',
    startDate: new Date(),
    cycle: Cycles.monthly
  },
  {
    uuid: 'uuid6-dropbox',
    name: 'Dropbox Pro',
    price: '19.99',
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732226.png',
    iconColor: '',
    textColor: 'white',
    backgroundColor: '#0061FF',
    startDate: new Date(),
    cycle: Cycles.annual
  },
  {
    uuid: 'uuid7-figma',
    name: 'Figma Professional',
    price: '15.00',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
    iconColor: '',
    textColor: 'white',
    backgroundColor: '#A259FF',
    startDate: new Date(),
    cycle: Cycles.monthly
  },
  {
    uuid: 'uuid8-zoom',
    name: 'Zoom Pro',
    price: '14.99',
    icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969084.png',
    iconColor: '',
    textColor: 'white',
    backgroundColor: '#2D8CFF',
    startDate: new Date(),
    cycle: Cycles.monthly
  },
  {
    uuid: 'uuid9-notion',
    name: 'Notion Plus',
    price: '8.00',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968517.png',
    iconColor: '',
    textColor: 'black',
    backgroundColor: '#FFFFFF',
    startDate: new Date(),
    cycle: Cycles.monthly
  },
  {
    uuid: 'uuid10-twitch',
    name: 'Twitch Turbo',
    price: '8.99',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968819.png',
    iconColor: '',
    textColor: 'purple',
    backgroundColor: 'white',
    startDate: new Date(),
    cycle: Cycles.monthly
  }
  ];