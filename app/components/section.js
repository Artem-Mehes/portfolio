export default function Section({ index, title, children, ...props }) {
  return (
    <section {...props} className="flex pt-24 flex-col gap-6">
      <div className="flex gap-5 items-end">
        <span className="leading-6">{index}</span>
        <h3 className="text-2xl leading-7 font-robotoMono font-extrabold text-accent">
          {title}
        </h3>
      </div>

      <div className="border-l-gray-700 border-l pl-7 flex flex-col gap-3">
        {children}
      </div>
    </section>
  );
}
