export default function IconLink({ href, icon: Icon }) {
  return (
    <a
      className="text-secondary hover:text-slate-200 hover:scale-125"
      href={href}
      target="_blank"
    >
      <Icon size={24} fill="currentColor" />
    </a>
  );
}