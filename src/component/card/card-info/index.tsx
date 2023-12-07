type CarİnfoProps = {
  icon: string;
  title: string;
};

const Carİnfo = ({ icon, title }: CarİnfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img src={icon} alt="" />
      <p className="tex-[14px]">{title}</p>
    </div>
  );
};

export default Carİnfo;
