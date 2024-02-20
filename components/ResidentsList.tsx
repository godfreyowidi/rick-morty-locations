import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGetResidentsByLocation } from '../locations/useGetResidentByLocation';
import Loading from './Loading';
import ResidentItem from './ResidentItem';
import NotesForm from './ModalNotesForm';

const ResidentsList: React.FC = () => {
  const router = useRouter();
  const id = typeof router.query.id === 'string' ? router.query.id : '';
  const { data: residents, loading } = useGetResidentsByLocation({ id });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResidentId, setSelectedResidentId] = useState<string | null>(null);

  const handleResidentClick = (residentId: string) => {
    console.log("Before opening modal, isModalOpen:", isModalOpen);
    setSelectedResidentId(residentId);
    setIsModalOpen(true);
    console.log("After opening modal, isModalOpen:", isModalOpen);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    console.log("Modal open state is now:", isModalOpen);
  }, [isModalOpen]);
  

  return (
    <>
      {((!loading && !residents) || residents?.length === 0) && (
        <div className="text-white text-lg text-center">
          This location doesn&apos;t have residents
        </div>
      )}
      <div className="text-white text-2xl pb-1 z-20 relative text-center">
        {residents && residents[0]?.location?.name}
      </div>
      {loading && (
        <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
          <Loading />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 relative z-20 pt-2 px-5 pb-7">
        {residents?.map((character) => (
        <ResidentItem
          key={'resident_' + character.id}
          character={character}
          onClick={() => handleResidentClick(character.id)}
        />
        ))}
      </div>
      {isModalOpen && selectedResidentId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg z-50 max-w-md w-full">
            <NotesForm characterId={selectedResidentId} onSave={(note) => console.log(note)} onClose={handleClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default ResidentsList;