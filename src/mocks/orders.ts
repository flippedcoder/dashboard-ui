import { Order, OrderStatus } from '../screens/UserInfo/UserInfo.State'

export const orderResponseData: Order[] = [
  {
    id: 'db4be77c-cd14-441a-8ae1-35e0c037a842',
    productName: 'Fancy soap',
    status: OrderStatus.Shipped,
    orderedDate: '06/24/2025',
    deliveryDate: '06/27/2025',
    totalAmount: 400,
    hasBeenReviewed: true,
  },
  {
    id: 'db4be37c-cd14-441a-8ae1-35e0c037a842',
    productName: 'Fancy oils',
    status: OrderStatus.Pending,
    orderedDate: '06/24/2025',
    deliveryDate: '06/27/2025',
    totalAmount: 200,
    hasBeenReviewed: false,
  },
  {
    id: 'db4be77c-cd14-441a-8pe1-35e0c037a842',
    productName: 'Dog stuff',
    status: OrderStatus.Shipped,
    orderedDate: '06/24/2025',
    deliveryDate: '06/27/2025',
    totalAmount: 40,
    hasBeenReviewed: false,
  },
  {
    id: 'lb4be77c-cd14-441a-8pe1-35e0c037a842',
    productName: 'Grape soda',
    status: OrderStatus.OutOfStock,
    orderedDate: '06/24/2025',
    deliveryDate: '06/27/2025',
    totalAmount: 0,
    hasBeenReviewed: false,
  },
  {
    id: 'db4be70q-cd14-441a-8pe1-35e0c037a842',
    productName: 'Sound equipment',
    status: OrderStatus.Shipped,
    orderedDate: '06/24/2025',
    deliveryDate: '06/27/2025',
    totalAmount: 30,
    hasBeenReviewed: true,
  },
  {
    id: 'db4be77c-cd14-319k-8pe1-35e0c037a842',
    productName: 'Sno-cone machine',
    status: OrderStatus.Pending,
    orderedDate: '06/24/2025',
    deliveryDate: '06/27/2025',
    totalAmount: 400,
    hasBeenReviewed: false,
  },
]
