import s from "./About.module.scss";

export const About = () => {
  return (
    <section className={s.about}>
      <hgroup>
        <h2>Den Grønne Avis</h2>
        <h3>
          Vi går forest i kampen om klimaet ved at give 2 kr. til klima-venlige
          formål, hver gang du handler brugt på Den Grønne Avis
        </h3>
      </hgroup>
    </section>
  );
};
