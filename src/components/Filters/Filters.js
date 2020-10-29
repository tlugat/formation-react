function Filters(props) {
  const { title, handleChange } = props;
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filters;
