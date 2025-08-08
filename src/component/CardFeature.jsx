

export default function CardFeature({ icon, title, desc, badgeColor = "bg-indigo-50" }) {
  return (
    <div className="bg-white border rounded-2xl p-9 shadow-sm hover:shadow-lg transition">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${badgeColor} inline-flex items-center justify-center`}>{icon}</div>
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}
