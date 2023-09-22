import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./ModalSlice";
import { useEffect, useState } from "react";

const PokemonDetailModal = () => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const modalData = useSelector((state: any) => state.modal);

  useEffect(() => {
    if (modalData.isOpen) {
      setTimeout(() => {
        setDisplayModal(true);
      }, 100);
    } else {
      setDisplayModal(false);
    }
  }, [modalData.isOpen]);

  const handleCloseModal = () => {
    setDisplayModal(false);
    setTimeout(() => {
      dispatch(closeModal());
    }, 100);
  };

  return (
    <div
      id='modal_overlay'
      className={`z-20 fixed inset-0 bg-black bg-opacity-30 h-screen w-full justify-center items-start md:items-center pt-10 md:pt-0 ${
        modalData.isOpen ? "flex" : "hidden"
      }`}>
      {/* modal */}
      <div
        id='modal'
        className={`${
          displayModal ? "-translate-y-1/2 top-1/2" : "-top-full"
        } absolute h-1/2 w-1/2 bg-white rounded shadow-lg transition-all duration-300`}>
        {/* button close */}
        <button
          onClick={handleCloseModal}
          className='absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white'>
          ✗
        </button>
        {/* header */}
        <div className='px-4 py-3 border-b border-gray-200'>
          <h2 className='text-xl font-semibold text-gray-600'>{modalData.pokemonDetail?.id}</h2>
        </div>
        {/* body */}
        <div className='w-full p-3'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          quis tempora! Similique, explicabo quaerat maxime corrupti tenetur
          blanditiis voluptas molestias totam? Quaerat laboriosam suscipit
          repellat aliquam blanditiis eum quos nihil.
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailModal;
