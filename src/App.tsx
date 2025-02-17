// import Carousel from "./Projects/Carousel/components/Carousel";
import Sidebar from "./Projects/Sidebar/components/Sidebar"
// import DraggableCard from "./Projects/Draggable Card/components/DraggableCard";
// import Loader from "./Projects/Loader/components/Loader";
// import ScrollIndicator from "./Projects/Scroll Indicator/components/ScrollIndicator";



const App = () => {
  return (
    <>
      {/* <div>
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          }}
        >
          Card 1
        </DraggableCard>
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
          }}
        >
          Card 2
        </DraggableCard>
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%)",
          }}
        >
          Card 3
        </DraggableCard>
      </div> */}
      {/* 
      <div className="flex justify-center items-center h-screen">
        <Carousel />
      </div> */}

      <div className="flex justify-center items-center h-screen w-full bg-gray-950">
        <Sidebar />
      </div>
    </>
  )
}

export default App
