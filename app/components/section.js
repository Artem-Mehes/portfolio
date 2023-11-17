export default function Section({ index, title, children, ...props }) {
  return (
    <section {...props} className="flex flex-col gap-6 lg:pt-24">
      <div className="flex items-end gap-5">
        <span className="leading-6">{index}</span>
        <h3 className="font-robotoMono text-2xl font-extrabold leading-7 text-accent">
          {title}
        </h3>
      </div>

      <div className="flex flex-col gap-3 border-l border-l-gray-700 pl-7">
        {children}
      </div>
    </section>
  );
}
