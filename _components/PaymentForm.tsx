"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface PlanInfo {
  name: string;
  price: number;
}

interface PaymentFormProps {
  selectedPlan: PlanInfo | null;
}

export default function PaymentForm({ selectedPlan }: PaymentFormProps) {
  const [loading, setLoading] = useState(false);

  const paymentCheck = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      plan: selectedPlan?.name,
      cardNumber: formData.get("cardNumber"),
      name: formData.get("cardName"),
      phone: formData.get("phone"),
      expiryDate: formData.get("expiryDate"),
      cvv: formData.get("cvv"),
      email: formData.get("email"),
    };

    console.log("Sending payment request:", payload);

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status);

      let text = "";
      let data: any = {};

      try {
        text = await response.text();
        console.log("Got response text:", text);

        if (text) {
          console.log("Attempting to parse:", text);
          data = JSON.parse(text);
          console.log("Parse successful, data is now:", data);
        }
      } catch (err) {
        console.error("Error reading/parsing response:", err);
        toast.error("Server error. Please try again.");
        return;
      }

      if (!response.ok) {
        const errorMsg = data?.error || "Payment failed. Please try again.";
        console.log("Setting error message:", errorMsg);
        toast.error(errorMsg);
        return;
      }

      toast.success("Payment successful! Thank you for your purchase.");
      // Reset form after success
      try {
        const formElement = e.currentTarget;
        if (formElement) {
          formElement.reset();
        }
      } catch (resetErr) {
        console.warn("Could not reset form:", resetErr);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again.";
      toast.error(errorMessage);
      console.error("Payment error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {selectedPlan ? (
        <>
          {/* Selected Plan Info */}
          <div className="mb-8 pb-8 border-b border-red-700">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm mb-1">Selected Plan</p>
                <h2 className="text-2xl font-bold">{selectedPlan.name} Plan</h2>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm mb-1">Monthly Price</p>
                <p className="text-3xl font-bold text-red-500">
                  ${selectedPlan.price}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <form onSubmit={paymentCheck} className="space-y-5">
            <input type="hidden" name="plan" value={selectedPlan.name} />

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full bg-[#1a1a1a] border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="+201 234 567 890"
                className="w-full bg-[#1a1a1a] border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                required
              />
            </div>

            {/* Cardholder Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Cardholder Name
              </label>
              <input
                type="text"
                name="cardName"
                placeholder="John Doe"
                className="w-full bg-[#1a1a1a] border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                required
              />
            </div>

            {/* Card Number */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                placeholder="5245 4646 5245 4646"
                maxLength={19}
                className="w-full bg-[#1a1a1a] border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                required
              />
            </div>

            {/* Expiry Date and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full bg-[#1a1a1a] border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="123"
                  maxLength={3}
                  className="w-full bg-[#1a1a1a] border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {/* Success Message */}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 rounded mt-8"
            >
              {loading ? "Processing..." : `Pay $${selectedPlan.price}`}
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Your payment is secure and encrypted
            </p>
          </form>
        </>
      ) : (
        <p className="text-gray-400">
          No plan selected. Please go back and select a plan.
        </p>
      )}
    </>
  );
}
