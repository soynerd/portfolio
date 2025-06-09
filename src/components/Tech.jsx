import React, { useState, useEffect } from 'react';
import {
  SiHtml5,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
} from 'react-icons/si';

const clsx = (...classes) => classes.filter(Boolean).join(' ');

export default function TechGrid() {
  const [techItems, setTechItems] = useState([
    { name: 'Node JS', icon: SiNodedotjs, selected: false, position: 0, isAnimating: false },
    { name: 'HTML 5', icon: SiHtml5, selected: false, position: 0, isAnimating: false },
    { name: 'Postgresql', icon: SiPostgresql, selected: false, position: 0, isAnimating: false },
    { name: 'TypeScript', icon: SiTypescript, selected: false, position: 0, isAnimating: false },
    { name: 'Next JS', icon: SiNextdotjs, selected: false, position: 0, isAnimating: false },
    { name: 'Tailwind CSS', icon: SiTailwindcss, selected: false, position: 0, isAnimating: false },
    { name: 'Postman', icon: SiPostman, selected: false, position: 0, isAnimating: false },
    { name: 'React.js', icon: SiReact, selected: false, position: 0, isAnimating: false },
  ]);
  const [order, setOrder] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const allSelected = techItems.every(item => item.selected);
    if (allSelected) {
      runAnimationSequence();
    }
  }, [techItems]);

  const runAnimationSequence = async () => {
    setIsAnimating(true);
    const sortedTechs = [...techItems].sort((a, b) => a.position - b.position);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    for (const tech of sortedTechs) {
      setTechItems(prevItems =>
        prevItems.map(item =>
          item.name === tech.name ? { ...item, isAnimating: true } : item
        )
      );
      await delay(400);

      setTechItems(prevItems =>
        prevItems.map(item =>
          item.name === tech.name ? { ...item, isAnimating: false, selected: false, position: 0 } : item
        )
      );
      await delay(200);
    }

    setOrder(1);
    setIsAnimating(false);
  };

  const handleClick = (name) => {
    if (isAnimating) return;

    let newOrder = order;
    const clickedItem = techItems.find(item => item.name === name);

    if (!clickedItem) return;

    if (!clickedItem.selected) {
      setTechItems(prevItems =>
        prevItems.map(item =>
          item.name === name ? { ...item, selected: true, position: newOrder } : item
        )
      );
      setOrder(prevOrder => prevOrder + 1);
    } else if (clickedItem.selected && clickedItem.position === order - 1) {
      setTechItems(prevItems =>
        prevItems.map(item =>
          item.name === name ? { ...item, selected: false, position: 0 } : item
        )
      );
      setOrder(prevOrder => prevOrder - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-amber-50 dark:bg-gray-900 p-4 transition-colors duration-300 rounded-2xl my-10">
        {/* <div className="w-full max-w-2xl text-center mb-8">
            <h1 className="text-3xl font-bold text-black dark:text-white">Select Your Tech Stack</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Click the technologies in the order of your preference. Once all are selected, an animation will play.</p>
        </div> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
        {techItems.map((tech) => {
            const Icon = tech.icon;

            return (
            <button
                key={tech.name}
                onClick={() => handleClick(tech.name)}
                disabled={isAnimating}
                className={clsx(
                'flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 group relative',
                'bg-zinc-100 border-zinc-200 text-black',
                'dark:bg-zinc-900 dark:border-zinc-700 dark:text-white',
                tech.selected ? 'border-black dark:border-white' : 'hover:border-gray-700 dark:hover:border-gray-400',
                tech.isAnimating && 'transform scale-125 z-10 shadow-2xl bg-indigo-500 text-white dark:bg-indigo-500',
                isAnimating && !tech.isAnimating && 'opacity-50'
                )}
            >
                <Icon
                className={clsx(
                    'text-2xl transition-all duration-300',
                    tech.selected
                    ? 'scale-110'
                    : 'text-zinc-400 group-hover:text-black dark:text-zinc-500 dark:group-hover:text-white',
                    tech.isAnimating && 'text-indigo-600 dark:text-indigo-400',
                )}
                />
                <span className="mt-2 text-sm font-semibold">{tech.name}</span>

                {tech.selected && !tech.isAnimating && (
                <span className="absolute top-1.5 right-1.5 text-xs bg-indigo-500 text-white w-5 h-5 flex items-center justify-center rounded-full font-bold">
                    {tech.position}
                </span>
                )}
            </button>
            );
        })}
        </div>
    </div>
  );
}

