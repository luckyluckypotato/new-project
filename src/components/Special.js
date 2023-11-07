
const Special = ({name, description, price}) => {

  return (
    <article>
      <h3>{name}</h3>
      <p>description</p>
      <span>{price}</span>
      <button>Order a delivery</button>
    </article>
  )
}

export default Special;