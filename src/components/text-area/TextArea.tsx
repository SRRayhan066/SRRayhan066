export default function TextArea() {
  return (
    <div className="w-full">
      <textarea
        placeholder="Message"
        className="bg-neutral-800 w-full h-28 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 resize-none
    scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-neutral-600 hover:scrollbar-thumb-neutral-500"
      />
    </div>
  );
}
