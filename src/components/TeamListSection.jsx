export function TeamItem(prop) {
  const team = prop.item;
  return (
    <div className="text-[#181818] text-[20px] leading-[18px] mx-[70px] ">
      <p className="w-[381px] h-[69px] mb-[32px] bg-[#FFFFFF] p-[24px] rounded-[10px] shadow-[0_4px_40px_0_rgba(145,124,124,0.25)]">
        {team.name} Team ({team.id})
      </p>
      {team.children.map((childrenItem, childrenKey) => (
        <p
          className="w-[381px] h-[69px] mb-[32px] bg-[#FFFFFF] p-[24px] rounded-[10px] relative left-[62px] shadow-[0_4px_40px_0_rgba(145,124,124,0.25)]"
          key={childrenKey}
        >
          {childrenItem.name} Team ({childrenItem.id})
        </p>
      ))}
    </div>
  );
}
