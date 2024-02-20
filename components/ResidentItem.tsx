import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { Character } from '../locations/useGetResidentByLocation';

type ResidentItemProps = {
  character: Character;
  onClick: () => void;
};

const ResidentItem: React.FC<ResidentItemProps> = ({ character, onClick }) => {
  const itemClass = classNames(
    'rounded-md overflow-hidden bg-slate-600/80 relative text-sm sm:text-md',
    'cursor-pointer'
  );

  const statusClass = classNames(
    'w-2 h-2 rounded-full inline-block mr-2',
    {
      'bg-green-500': character.status === 'Alive',
      'bg-red-500': character.status === 'Dead',
      'bg-yellow-500': character.status !== 'Alive' && character.status !== 'Dead',
    }
  );

  return (
    <div className={itemClass} onClick={onClick}>
      <Image
        src={character.image}
        alt={character.name}
        className="object-cover max-w-full"
        width={160}
        height={130}
        layout="fixed"
      />
      <div className="text-white p-3">
        <div className="text-md sm:text-lg font-bold">{character.name}</div>
        <div>
          <span className={statusClass}></span>
          <span>
            {character.status} - {character.species}, {character.gender}
          </span>
        </div>
        {character.type && (
          <div className="text-zinc-300 pt-1">Type: {character.type}</div>
        )}
        {character.origin?.name && (
          <div className="text-zinc-300 pt-1">Origin: {character.origin.name}</div>
        )}
      </div>
    </div>
  );
};

export default ResidentItem;