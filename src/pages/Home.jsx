import s from "./Page.module.scss";

import { ProductShowcase } from "../components/ProductShowcase";
import { About } from "../components/About";
import { CategoryShowcase } from "../components/CategoryShowcase";
import { DonationCard } from "../components/DonationCard";

export const Home = () => {
  return (
    <section className={s.page}>
      <ProductShowcase />
      <About />
      <CategoryShowcase/>
      <DonationCard/>
    </section>
  );
};
