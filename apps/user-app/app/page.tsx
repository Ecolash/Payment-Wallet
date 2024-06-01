"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import HomeScreen from "../components/HomeScreen";
import { PrimaryFeatures } from "../components/AboutSection";
import { Team } from "../components/TeamsSection";
import { ReviewSection } from "../components/ReviewSection";
import { Footer } from "../components/Footer";
import { CTA } from "../components/CTA";
import { Header } from "../components/Header";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <div className="overflow-x-hidden">
      <Header session={session} />
      <HomeScreen session={session} />
      <PrimaryFeatures />
      <Team />
      <ReviewSection />
      <CTA session={session} />
      <Footer />
    </div>
  );
}
