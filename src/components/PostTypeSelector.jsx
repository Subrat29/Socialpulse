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
    <div className="inline-flex p-1.5 rounded-lg bg-secondary/10 border border-secondary/20">
      {postTypes.map(({ type, label, icon }) => {
        const isSelected = selectedType === type;
        const isDisabled = loading && !isSelected;

        return (
          <Button
            key={type}
            variant={isSelected ? "default" : "ghost"}
            disabled={isDisabled}
            className={`
              relative flex items-center gap-2 px-4 py-2 rounded-md
              transition-all duration-200 ease-in-out
              ${isSelected 
                ? 'text-primary-foreground shadow-sm hover:bg-primary/90'
                : 'hover:bg-secondary/20'
              }
              ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
              first:rounded-l-md last:rounded-r-md
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
            <span className="text-sm font-medium">{label}</span>
          </Button>
        );
      })}
    </div>
  );
}