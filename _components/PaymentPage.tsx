import PaymentForm from './PaymentForm';
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PlanInfo {
  name: string;
  price: number;
}

const plansData: Record<string, PlanInfo> = {
  basic: { name: "Basic", price: 29 },
  pro: { name: "Pro", price: 79 },
  enterprise: { name: "Enterprise", price: 199 },
};

interface PaymentPageProps {
  selectedPlan: PlanInfo | null;
}

export default function PaymentPage({ selectedPlan }: PaymentPageProps) {
  return (
    <section className="min-h-screen py-16 bg-linear-to-r from-black via-red-500/35  to-black text-white p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <Link href="/#pricing" prefetch={true}>
          <div className="flex items-center gap-2 text-red-500 hover:text-red-400 cursor-pointer mb-8">
            <ArrowLeft size={20} />
            <span>Back to Pricing</span>
          </div>
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
          Complete Your Payment
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Secure payment for your gym membership
        </p>

        {/* Payment Card */}
        <div className="bg-[#1a1a1a] rounded-lg p-8 border-2 border-red-950">
          <PaymentForm selectedPlan={selectedPlan} />
        </div>
      </div>
    </section>
  );
}
