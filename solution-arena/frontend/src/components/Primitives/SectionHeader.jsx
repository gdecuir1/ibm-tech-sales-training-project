function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h2 className="section-header">{title}</h2>
        {subtitle && <p className="text-sm text-ibm-gray-70">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export default SectionHeader;

// Made with Bob
