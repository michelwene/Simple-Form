export function Input({ name, type, label, error, value, onChange, ...rest }) {
  return (
    <>
      <label className="text-zinc-100 mb-1">
        {label}
        <input
          className="w-full p-3 rounded-sm outline-none bg-transparent border-2 border-zinc-100"
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </label>
      {error && <span className="text-red-600 text-sm">{error}</span>}
    </>
  );
}
