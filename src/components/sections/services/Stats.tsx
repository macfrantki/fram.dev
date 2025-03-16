interface StatsProps {
  className?: string;
}

const statsData = [
  { value: '5+', label: 'Years combined experience' },
  { value: '25+', label: 'Completed projects and counting' },
  { value: '98%', label: 'Client satisfaction rate' },
];

export default function Stats({ className = '' }: StatsProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="flex flex-col space-y-8 sm:space-x-12 md:space-x-16 lg:flex-row lg:space-x-24 lg:space-y-0">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
            <p className="text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
