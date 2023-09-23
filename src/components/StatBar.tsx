const barColors = {
  hp: "bg-green-600",
  attack: "bg-yellow-600",
  defense: "bg-red-600",
  "special-attack": "bg-blue-600",
  "special-defense": "bg-indigo-600",
  speed: "bg-purple-600",
};

const StatBar = ({ stat }: any) => {
  return (
    <div className='w-full flex items-center'>
      <div className='w-1/4'>
        <div className='text-xs text-gray-500'>{stat.stat.name}</div>
      </div>
      <div className='w-3/4 h-fit bg-gray-200 rounded-full'>
        <div
          className={`${
            barColors[stat.stat.name as keyof typeof barColors]
          } text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
          style={{ width: `${(stat.base_stat / 255) * 100}%` }}>
          {" "}
          {stat.base_stat}
        </div>
      </div>
    </div>
  );
};

export default StatBar;
