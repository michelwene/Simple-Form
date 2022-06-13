export function Button({ type, children }) {
  return (
    <button
      type={type}
      className="p-2 w-full rounded-sm bg-slate-700 shadow-lg text-zinc-100 mt-2"
    >
      {children}
    </button>
  );
}
