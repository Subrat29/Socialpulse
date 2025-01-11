import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Image, Film, Images } from 'lucide-react';

export default function PostTypeSelector({ loading = false, onSelectPostType = () => {} }) {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelect = (type) => {
    if (loading) return;
    setSelectedType(type);
    onSelectPostType(type);
  };

  const postTypes = [
    {
      type: 'carousel',
      label: 'Carousel',
      icon: <Images className="w-4 h-4" />
    },
    {
      type: 'reel',
      label: 'Reel',
      icon: <Film className="w-4 h-4" />
    },
    {
      type: 'static image',
      label: 'Static Image',
      icon: <Image className="w-4 h-4" />
    }
  ];

  return (
    <div className="flex flex-col sm:flex-row p-1.5 rounded-lg bg-secondary/10 border border-secondary/20 w-full sm:w-auto gap-1 sm:gap-0">
      {postTypes.map(({ type, label, icon }, index) => {
        const isSelected = selectedType === type;
        const isDisabled = loading && !isSelected;

        return (
          <Button
            key={type}
            variant={isSelected ? "default" : "ghost"}
            disabled={isDisabled}
            className={`
              relative flex items-center justify-center sm:justify-start gap-2 
              px-4 py-2 min-w-[120px]
              transition-all duration-200 ease-in-out
              ${isSelected 
                ? 'text-primary-foreground shadow-sm hover:bg-primary/90'
                : 'hover:bg-secondary/20'
              }
              ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
              ${index === 0 ? 'rounded-md sm:rounded-l-md sm:rounded-r-none' : ''}
              ${index === postTypes.length - 1 ? 'rounded-md sm:rounded-r-md sm:rounded-l-none' : ''}
              ${index !== 0 && index !== postTypes.length - 1 ? 'rounded-md sm:rounded-none' : ''}
              disabled:pointer-events-none
            `}
            onClick={() => handleSelect(type)}
          >
            <span className={`
              transition-colors duration-200
              ${isSelected ? 'text-primary-foreground' : 'text-secondary-foreground'}
            `}>
              {icon}
            </span>
            <span className="text-sm font-medium whitespace-nowrap">{label}</span>
          </Button>
        );
      })}
    </div>
  );
}