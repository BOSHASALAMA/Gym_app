import PaymentPage from '@/_components/PaymentPage';

export const metadata = {
  title: 'Complete Your Payment - Gym Membership',
  description: 'Secure payment page to complete your gym membership subscription',
};

const plansData: Record<string, { name: string; price: number }> = {
  basic: { name: "Basic", price: 29 },
  pro: { name: "Pro", price: 79 },
  enterprise: { name: "Enterprise", price: 199 },
};

interface PaymentPageRouteProps {
  searchParams?: Promise<{
    plan?: string;
  }>;
}

export default async function Payment({ searchParams }: PaymentPageRouteProps) {
  const params = await searchParams;
  let selectedPlan = null;

  if (params && params.plan) {
    const planParam = params.plan.toLowerCase().trim();
    if (planParam in plansData) {
      selectedPlan = plansData[planParam as keyof typeof plansData];
    }
  }

  return <PaymentPage selectedPlan={selectedPlan} />;
}
