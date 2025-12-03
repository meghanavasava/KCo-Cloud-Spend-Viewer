function CloudCard({ name, spend }) {
  return (
    <div className="cloud-card">
      <h3>{name}</h3>
      <p>${spend}</p>
    </div>
  );
}

export default CloudCard;
