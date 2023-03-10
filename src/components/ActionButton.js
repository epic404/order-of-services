export default function ActionButton({ link, text }) {
  return (
    <div className="text-center py-2">
      <a href={link} target="_blank" rel="noreferrer">
        <button
          className="bg-transparent text-sky-600 font-semibold py-2 px-4 border-2 border-sky-600 rounded">
          {text}
        </button>
      </a>
    </div>
  );
}