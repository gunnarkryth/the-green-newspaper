import s from "./Page.module.scss";

import { ProductShowcase } from "../components/ProductShowcase/ProductShowcase";
import { About } from "../components/About/About";
import { CategoryShowcase } from "../components/CategoryShowcase/CategoryShowcase";
import { DonationCard } from "../components/DonationCard/DonationCard";

export const Home = () => {
  return (
    <section className={s.page}>
      <ProductShowcase />
      <About />
      <CategoryShowcase />
      <DonationCard />
    </section>
  );
};
