import { useRef, useEffect } from 'react';

function Filters(props) {
  const {
    categories,
    category,
    published,
    title,
    handleFilterChange
  } = props;
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <div>
      <input
        name="title"
        type="text"
        value={title}
        onChange={handleFilterChange}
        ref={inputRef}
      />
      <select
        name="category"
        value={category}
        onChange={handleFilterChange}
      >
        <option value=""></option>
        {categories.map(cat => <option
          value={cat.id}
          key={cat.id}
        >{cat.title}</option>)}
      </select>
      <label>
        All: 
        <input
          type="radio"
          name="published"
          value=""
          checked={published === ''}
          onChange={handleFilterChange}
        />
      </label>
      <label>
        Published: 
        <input
          type="radio"
          name="published"
          value="published"
          checked={published === 'published'}
          onChange={handleFilterChange}
        />
      </label>
      <label>
        Draft: 
        <input
          type="radio"
          name="published"
          value="draft"
          checked={published === 'draft'}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
}

export default Filters;
