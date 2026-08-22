export interface Treatment {
  id: string;
  title: string;
  planDuration: string;
  status: 'Active' | 'Pending' | 'Not Approved';
  medication: string;
  startDate: string;
  duration: string;
  renewalDate: string;
  progressPercentage: number;
}

export interface Order {
  id: string;
  status: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
  items: OrderItem[];
}

export interface OrderItem {
  name: string;
  quantity: number;
  price: string;
}

export interface Prescription {
  id: string;
  medication: string;
  dosage: string;
  prescribedBy: string;
  dateIssued: string;
  status: 'Active' | 'Expired' | 'Pending';
}

export interface ProfileData {
  treatment: Treatment | null;
  orders: Order[];
  prescriptions: Prescription[];
}

const USE_MOCK = (process.env.NEXT_PUBLIC_PROFILE_MODE || 'mock') === 'mock';

const MOCK_TREATMENT: Treatment = {
  id: '1',
  title: 'Weight Loss Program',
  planDuration: '12 months plan',
  status: 'Active',
  medication: 'Semaglutide 0.5mg',
  startDate: 'Jan 15, 2025',
  duration: '6 Months',
  renewalDate: 'Jul 15, 2025',
  progressPercentage: 33,
};

const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    status: 'Shipped',
    trackingNumber: '9400 1111 2222',
    estimatedDelivery: 'Jul 30, 2026',
    items: [
      { name: 'Semaglutide 0.5mg', quantity: 1, price: '$200' },
    ],
  },
];

const MOCK_PRESCRIPTIONS: Prescription[] = [
  {
    id: 'RX-001',
    medication: 'Semaglutide 0.5mg',
    dosage: '0.5mg weekly',
    prescribedBy: 'Dr. Smith',
    dateIssued: 'Jan 15, 2025',
    status: 'Active',
  },
];

export class ProfileService {
  static async getProfile(): Promise<ProfileData> {
    if (USE_MOCK) {
      return {
        treatment: MOCK_TREATMENT,
        orders: MOCK_ORDERS,
        prescriptions: MOCK_PRESCRIPTIONS,
      };
    }

    throw new Error('ProfileService.getProfile not implemented');
  }

  static async getTreatment(): Promise<Treatment | null> {
    if (USE_MOCK) {
      return MOCK_TREATMENT;
    }

    throw new Error('ProfileService.getTreatment not implemented');
  }

  static async getOrders(): Promise<Order[]> {
    if (USE_MOCK) {
      return MOCK_ORDERS;
    }

    throw new Error('ProfileService.getOrders not implemented');
  }

  static async getPrescriptions(): Promise<Prescription[]> {
    if (USE_MOCK) {
      return MOCK_PRESCRIPTIONS;
    }

    throw new Error('ProfileService.getPrescriptions not implemented');
  }
}
