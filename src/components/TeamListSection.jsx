export function TeamItem(prop) {
  const team = prop.item;
  return (
    <div className="text-[#181818] text-[20px] leading-[18px]">
      <p className="w-[381px] h-[69px] mb-[32px] bg-[#FFFFFF] p-[24px] rounded-[10px] ">
        {team.name} Team ({team.id})
      </p>
      {team.children.map((childrenItem, childrenKey) => (
        <p
          className="w-[381px] h-[69px] mb-[32px] bg-[#FFFFFF] p-[24px] rounded-[10px] relative left-[62px]"
          key={childrenKey}
        >
          {childrenItem.name} Team ({childrenItem.id})
        </p>
      ))}
    </div>
  );
}
