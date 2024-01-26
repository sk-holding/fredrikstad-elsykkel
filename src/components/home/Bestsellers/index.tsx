import Products from "./_components/Products";

const Bestsellers = () => {
  return (
    <section className="section max-width">
      <div>
        <h3>Bestselgere</h3>
        <h4>Se noen av våre populære elsykler her</h4>
      </div>
      <Products />
    </section>
  );
};

export default Bestsellers;
