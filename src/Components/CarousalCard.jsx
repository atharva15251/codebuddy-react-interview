
const CarousalCard = ({newsData}) => {
    return (
      <div className="m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-200 hover:bg-gray-300 ">
        <b>News : {newsData?.title}</b>        
      </div>
    );
  };

  export default CarousalCard;