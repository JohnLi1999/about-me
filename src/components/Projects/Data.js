import cupcakeShopImg from '../../assets/cupcake-shop.png';
import closetImg from '../../assets/closet.png';
import eventBookingImg from '../../assets/event-booking.png';
import {
  CUPCAKE_SHOP_GITHUB_LINK,
  CLOSET_GITHUB_LINK,
  EVENT_BOOKING_GITHUB_LINK,
} from '../../constants';

export const projects = [
  {
    description:
      'An online cupcake shop, with the support for administrators as well',
    img: cupcakeShopImg,
    link: CUPCAKE_SHOP_GITHUB_LINK,
    tags: ['Spring Frameworks', 'React', 'MySQL'],
    title: 'Cupcake shop',
  },
  {
    description: 'An mobile app that provides user outfit suggestions',
    img: closetImg,
    link: CLOSET_GITHUB_LINK,
    tags: ['Node.js', 'MongoDB', 'Java'],
    title: 'Closet',
  },
  {
    description: 'A practice application with GraphQL API design',
    img: eventBookingImg,
    link: EVENT_BOOKING_GITHUB_LINK,
    tags: ['GraphQL', 'Node.js', 'MongoDB'],
    title: 'Event Booking',
  },
];
