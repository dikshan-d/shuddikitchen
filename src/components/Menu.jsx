import menu from "../data/menu";

export default function Menu() {
  // Group items by category
  const groupedMenu = menu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <section className="section">
      <h2>Our Menu</h2>

      {Object.entries(groupedMenu).map(([category, items]) => (
        <div className="menu-section" key={category}>
          <h3 className="menu-title">{category}</h3>

          <div className="menu-grid">
            {items.map((item, index) => (
              <div className="menu-card" key={index}>
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p className="menu-desc">{item.description}</p>
                <div className="menu-price">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
