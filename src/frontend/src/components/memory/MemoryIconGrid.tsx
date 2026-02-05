interface MemoryIconGridProps {
  items: Array<{
    id: string;
    label: string;
    icon: string;
  }>;
  onItemClick: (id: string) => void;
}

export default function MemoryIconGrid({ items, onItemClick }: MemoryIconGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemClick(item.id)}
          className="memory-icon-card group"
        >
          <div className="aspect-square rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src={item.icon}
              alt={item.label}
              className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-sm md:text-base font-medium text-romantic-dark text-center">
              {item.label}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
