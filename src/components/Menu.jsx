import menu from "../data/menu";

export default function Menu() {
  return (
    <section className="section">
      <h2>Our Menu</h2>
      

      <div className="menu-grid">
        {menu.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p className="menu-desc">{item.description}</p>

            <div className="menu-price">{item.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
