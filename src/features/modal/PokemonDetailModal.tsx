import { useSelector } from "react-redux";

const PokemonDetailModal = () => {
  // const dispatch = useDispatch();
  const modalData = useSelector((state: any) => state.modal);

  return (
    <div
      className={`fixed w-screen h-screen bg-gray-500/30 ${
        modalData.isOpen ? "block" : "hidden"
      } transition-all duration-200 ease-linear `}>
      <div className='w-1/2 h-1/2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg '>
        {/* display the data */}
        <div className='flex justify-between items-center px-4 py-2 bg-gray-100 rounded-t-lg'>
          <h1 className='text-xl font-bold text-gray-700'>{modalData.pokemonDetail.name}</h1>
          <h1 className='text-xl font-bold text-gray-700'>{modalData.pokemonDetail.id}</h1>
        </div>
      </div>

    </div>
  );
};

export default PokemonDetailModal;
