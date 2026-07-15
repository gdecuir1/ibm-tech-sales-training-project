function MetricBand({ metrics }) {
  return (
    <div className="bg-white border-b border-ibm-gray-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-ibm-gray-20">
          {metrics.map((metric, index) => (
            <div key={index} className="py-6 px-6 first:pl-0 last:pr-0">
              <div className="metric-label mb-2">{metric.label}</div>
              <div className="flex items-baseline gap-2">
                <div className="metric-value">{metric.value}</div>
                {metric.trend && (
                  <span
                    className={`text-xs font-medium ${
                      metric.trend > 0 ? 'text-ibm-green' : 'text-ibm-red'
                    }`}
                  >
                    {metric.trend > 0 ? '+' : ''}
                    {metric.trend}%
                  </span>
                )}
              </div>
              {metric.subtitle && (
                <div className="text-xs text-ibm-gray-50 mt-1">{metric.subtitle}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MetricBand;

// Made with Bob
