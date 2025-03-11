import s from "./DonationCard.module.scss";

export const DonationCard = ({ image, title, body, amountDonated }) => {
  return (
    <figure className={s.donationCard} style={{ backgroundImage: { image } }}>
      <figcaption>
        <h3>{title}</h3>
        <h4>{body}</h4>
        <h2>{amountDonated}</h2>
        <p>Tak fordi du handler brugt, med omtanke for klimaet</p>
      </figcaption>
    </figure>
  );
};
