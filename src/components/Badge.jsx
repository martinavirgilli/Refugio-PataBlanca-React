export default function Badge({ text }) {
  return (
    <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mt-2">
      {text}
    </span>
  );
}
