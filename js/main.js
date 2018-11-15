const ShopItem = ({ item }) => {
  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">{item.descriptionFull}</div>
      <div className="highlight-window  mobile">
        <div className="highlight-overlay" />
      </div>
      <div className="divider" />
      <div className="purchase-info">
        <div className="price">{item.currency + item.price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399,
  currency: '£'
};

ReactDOM.render(<ShopItem item={item} />, document.getElementById('root'));

('use strict');

function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const el = document.createElement(node.name);

  if (typeof node.props === 'object' && node.props !== null) {
    Object.keys(node.props).forEach(i => el.setAttribute(i, node.props[i]));
  }

  if (node.childs instanceof Array) {
    node.childs.forEach(child => {
      const childEl = createElement(child);
      el.appendChild(childEl);
    });
  }

  return el;
}
