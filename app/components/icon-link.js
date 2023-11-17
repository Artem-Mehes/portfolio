export default function IconLink({ href, icon: Icon }) {
  return (
    <a
      className="text-secondary hover:scale-125 hover:text-slate-200"
      href={href}
      target="_blank"
    >
      <Icon size={24} fill="currentColor" />
    </a>
  );
}
