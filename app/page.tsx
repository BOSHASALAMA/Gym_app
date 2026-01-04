import { Hero } from "@/_components/Hero";
import dynamic from "next/dynamic";

const Training = dynamic(() => import("@/_components/Training"),{
  loading: () => (
    <div className="min-h-150 bg-gray-900/50 animate-pulse rounded-lg" />),
    ssr: true,
});
const Offers = dynamic(() => import("@/_components/Offers"),{
  loading: () => (
    <div className="min-h-150 bg-gray-900/50 animate-pulse rounded-lg" />),
    ssr: true,
});
const Programms = dynamic(() => import("@/_components/Programms"),{
  loading: () => (
    <div className="min-h-150 bg-gray-900/50 animate-pulse rounded-lg" />),
    ssr: true,
});
const Pricing = dynamic(() => import("@/_components/Pricing"),{
  loading: () => (
    <div className="min-h-150 bg-gray-900/50 animate-pulse rounded-lg" />),
    ssr: true,
});
const CrossFit = dynamic(() => import("@/_components/CrossFit"),{
  loading: () => (
    <div className="min-h-150 bg-gray-900/50 animate-pulse rounded-lg" />),
    ssr: true,
});
const Exercises = dynamic(() => import("@/_components/Exercises"),{
  loading: () => (
    <div className="min-h-150 bg-gray-900/50 animate-pulse rounded-lg" />),
    ssr: true,
});
const Classtime = dynamic(() => import("@/_components/Classtime"),{
  loading: () => (
    <div className="min-h-150 bg-gray-900/50 animate-pulse rounded-lg" />),
    ssr: true,
});
const Contact = dynamic(() => import("@/_components/Contact"),{
  loading: () => (
    <div className="min-h-150 bg-gray-900/50 animate-pulse rounded-lg" />),
    ssr: true,
});

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Training />
      <Offers />
      <CrossFit />
      <Programms />
      <Classtime />
      <Exercises />
      <Pricing />
      <Contact />
    </div>
  );
}
