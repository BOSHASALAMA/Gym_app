"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Trash2, Mail, Phone, Package, Search, Filter } from "lucide-react";

export default function Page() {
  return (
    <ProtectedPage>
      <AdminOrdersTable />
    </ProtectedPage>
  );
}

function AdminOrdersTable() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPlan, setFilterPlan] = useState("all");
  const [loading, setLoading] = useState(true);

  const payDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/payment");
      const data = await res.json();
      setOrders(data.data || []);
      setFilteredOrders(data.data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    payDetails();
  }, []);

  useEffect(() => {
    let filtered = [...orders];

    // Filter by plan
    if (filterPlan !== "all") {
      filtered = filtered.filter(
        (order: any) => order.plan?.toLowerCase() === filterPlan.toLowerCase()
      );
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase().trim();
      filtered = filtered.filter((order: any) => {
        const email = (order.email || "").toString().toLowerCase();
        const phone = (order.phone || "").toString();
        const plan = (order.plan || "").toString().toLowerCase();

        return (
          email.includes(search) ||
          phone.includes(search) ||
          plan.includes(search)
        );
      });
    }

    setFilteredOrders(filtered);
  }, [searchTerm, filterPlan, orders]);

  const removeOrder = async (orderId: number) => {
    try {
      const res = await fetch(`/api/payment?id=${orderId}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.ok) {
        setOrders(orders.filter((order: any) => order.id !== orderId));
        toast.success("Order confirmed successfully");
      } else {
        toast.error(data.error || "Failed to confirm order");
      }
    } catch (error) {
      console.error("Error removing order:", error);
      toast.error("Failed to confirm order");
    }
  };

  const getPlanBadgeColor = (plan: string) => {
    const colors: Record<string, string> = {
      basic: "bg-blue-500/20 text-blue-400 border-blue-500/50",
      pro: "bg-purple-500/20 text-purple-400 border-purple-500/50",
      enterprise: "bg-amber-500/20 text-amber-400 border-amber-500/50",
    };
    return (
      colors[plan.toLowerCase()] ||
      "bg-gray-500/20 text-gray-400 border-gray-500/50"
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-red-950 to-black py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Order Management
          </h1>
          <p className="text-gray-400">Manage and confirm customer orders</p>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by email, phone, or plan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-black/40 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={filterPlan}
              onChange={(e) => setFilterPlan(e.target.value)}
              className="pl-10 pr-8 py-3 bg-black/40 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none cursor-pointer min-w-37.5"
            >
              <option value="all">All Plans</option>
              <option value="basic">Basic</option>
              <option value="pro">Pro</option>
              <option value="enterprise">Enterprise</option>
            </select>
          </div>
        </div>

        <div className="mb-4 text-gray-400">
          Showing {filteredOrders.length} of {orders.length} orders
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-red-900/20 border-b border-gray-800">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                      Plan
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                      Phone
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-12 text-center text-gray-400"
                      >
                        No orders found
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((order: any) => (
                      <tr
                        key={order.id}
                        className="border-b border-gray-800 hover:bg-red-900/10 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getPlanBadgeColor(
                              order.plan
                            )}`}
                          >
                            <Package className="w-4 h-4" />
                            {order.plan}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-gray-300">
                            <Mail className="w-4 h-4 text-gray-500" />
                            {order.email}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-gray-300">
                            <Phone className="w-4 h-4 text-gray-500" />
                            {order.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => removeOrder(order.id)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
                          >
                            <Trash2 className="w-4 h-4" />
                            Confirm
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {filteredOrders.length === 0 ? (
                <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-8 text-center text-gray-400">
                  No orders found
                </div>
              ) : (
                filteredOrders.map((order: any) => (
                  <div
                    key={order.id}
                    className="bg-black/40 backdrop-blur-sm rounded-lg border border-gray-800 p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getPlanBadgeColor(
                          order.plan
                        )}`}
                      >
                        <Package className="w-4 h-4" />
                        {order.plan}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="break-all">{order.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <Phone className="w-4 h-4 text-gray-500" />
                        {order.phone}
                      </div>
                    </div>

                    <button
                      onClick={() => removeOrder(order.id)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
                    >
                      <Trash2 className="w-4 h-4" />
                      Confirm Order
                    </button>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setUserRole(null);
      return;
    }
    const fetchUserRole = async () => {
      if (user?.id && user?.primaryEmailAddress?.emailAddress) {
        try {
          const response = await fetch("/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: user.id,
              email: user.primaryEmailAddress.emailAddress,
              name: user.fullName,
            }),
          });
          const data = await response.json();
          setUserRole(data.role);
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      }
    };
    fetchUserRole();
  }, [user]);

  const isAdmin = userRole === "admin";

  if (!user || !isAdmin) {
    return (
      <div className="text-white py-32 text-center h-screen md:text-3xl">
        Access Denied. Admins only.
      </div>
    );
  }

  return <>{children}</>;
};
