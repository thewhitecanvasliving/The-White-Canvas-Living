export default function StatsBar() {
  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '13+', label: 'Happy Clients' },
    { number: '2+', label: 'Years of Excellence' },
  ];
  return (
    <div className="stats-bar">
      <div className="container">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`stat-item reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}
          >
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
