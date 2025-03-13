import { DonationCard } from "./DonationCard";
import s from "./DonationsShowcase.module.scss";

export const DonationsCard = () => {
  return (
    <section className={s.donationsShowcase}>
      <DonationCard
        image={"/assets/images/banner_image2.jpg"}
        title={"Donationer til Dato"}
        body={"Sammen med dig har vi siden starten indsamlet:"}
        amountDonated={"452.231,50 kr"}
      />
      <DonationCard
        image={"/assets/images/banner_image3.jpg"}
        title={"Donationer til Dato"}
        body={"Sammen med dig har vi siden starten indsamlet:"}
        amountDonated={"452.231,50 kr"}
      />
    </section>
  );
};
