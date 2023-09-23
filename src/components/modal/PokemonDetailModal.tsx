import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../app/reducers/ModalSlice";
import { useEffect, useState } from "react";
import StatBar from "../StatBar";
import ModalSkeleton from "./ModalSkeleton";
import { Ability, Type, PokemonStat } from "../../interfaces";
import { ModalSliceState } from "../../interfaces/Tredux";

const PokemonDetailModal = () => {
  const [imgSide, setImgSide] = useState<string>("front_default");
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { pokemonDetail, loading, isOpen } = useSelector(
    (state: ModalSliceState) => state.modal
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setDisplayModal(true);
      }, 100);
      console.log(pokemonDetail);
    } else {
      setDisplayModal(false);
    }
  }, [isOpen]);

  const handleCloseModal = () => {
    setDisplayModal(false);
    setTimeout(() => {
      dispatch(closeModal());
    }, 100);
  };

  const turnImageSide = () => {
    setImgSide(imgSide === "front_default" ? "back_default" : "front_default");
  };

  return (
    <div
      id='pokemon-modal'
      className={`z-20 fixed inset-0 bg-black bg-opacity-30 h-screen w-full justify-center items-start md:items-center pt-10 md:pt-0 ${
        isOpen ? "flex" : "hidden"
      }`}>
      <div
        id='modal'
        className={`${
          displayModal ? "-translate-y-1/2 top-1/2" : "-top-full"
        } absolute h-fit w-[800px] max-lg:w-[700px] max-md:w-[500px] max-sm:w-[90%] bg-white rounded shadow-lg transition-all duration-300 px-3 py-6`}>
        {/* button close */}
        <button
          id='close-pokemon-modal-button'
          onClick={handleCloseModal}
          className='absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white'>
          ✗
        </button>
        {loading ? (
          <ModalSkeleton />
        ) : (
          <div className='w-full h-full flex max-sm:flex-col-reverse items-center gap-x-5 justify-around'>
            <div className='w-1/3 max-sm:w-[50%] flex flex-col gap-y-3 items-center my-auto'>
              <img
                src={
                  imgSide === "front_default"
                    ? pokemonDetail?.sprites.front_default
                    : pokemonDetail?.sprites.back_default
                }
                alt={pokemonDetail?.name}
                className='w-full object-contain'
              />
              <button
                onClick={() => turnImageSide()}
                className='p-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-150 ease-linear'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3'
                  />
                </svg>
              </button>
            </div>
            <div className='w-2/3 max-sm:w-[90%] flex flex-col'>
              <div className='space-y-2 mb-5'>
                <h2
                  id='modal-pokemon-name'
                  className='text-3xl font-bold text-gray-700'>
                  {pokemonDetail?.name[0].toUpperCase() +
                    pokemonDetail?.name.slice(1)}
                </h2>
                <div className='flex gap-x-2'>
                  {pokemonDetail?.types.map((type: Type) => (
                    <div
                      key={type.type.name}
                      className='w-fit text-xs bg-gray-200 px-3 py-1 rounded-full'>
                      {type.type.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-y-2'>
                  <h3 className='text-lg font-semibold text-gray-700'>
                    Abilities
                  </h3>
                  <div className='flex gap-x-3'>
                    {pokemonDetail?.abilities.map((ability: Ability) => (
                      <div
                        key={ability.ability.name}
                        className='flex gap-x-2 items-center'>
                        <div className='w-fit text-xs bg-gray-200 px-3 py-1 rounded-full'>
                          {ability.ability.name}
                        </div>
                        <div className='text-xs text-gray-500'>
                          {ability.is_hidden ? "(hidden)" : ""}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                  <h3 className='text-lg font-semibold text-gray-700'>Stats</h3>
                  {pokemonDetail?.stats.map((statDetail: PokemonStat) => (
                    <StatBar key={statDetail.stat.name} statInfo={statDetail} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetailModal;
