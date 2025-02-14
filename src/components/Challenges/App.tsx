// import Box from './Transformations/components/Box';
// import BouncingCircle from "./Transformations/components/BouncingCircle";
// import SpinningIcon from "./Transformations/components/SpinningIcon";
// import SkewRectangle from "./Transformations/components/SkewReactangle";
// import ComplexAnimation from "./Transformations/components/ComplexAnimation";
// import SequentialBoxes from "./Transformations/components/SequentialBoxes";
// import FadeComponent from "./TransitionsAnimations/components/FadeComponent";
// import Modal from "./TransitionsAnimations/components/Modal";
// import Sidebar from "./TransitionsAnimations/components/Sidebar";
// import Accordion from "./TransitionsAnimations/components/Accordion";
// import Modal from "./TransitionsAnimations/components/Modal";
// import ResponsiveButton from "./TransitionsAnimations/components/ResponsiveButton";
// import ToastNotification from "./TransitionsAnimations/components/ToastNotification";
// import BouncingBall from "./Keyframes/components/BouncingBall";
// import PulsatingButton from "./Keyframes/components/PulsatingButton";
// import ColorChangeSquare from "./Keyframes/components/ColorChangeSquare"
// import SlidingText from "./Keyframes/components/SlidingText":
// import WaveEffect from "./Keyframes/components/WaveEffect";
// import SlidingMenu from "./Variants/components/SlidingMenu";
// import Tooltip from "./Variants/components/Tooltip";
import { ThemeProvider } from "../../shared/useTheme";
// import StaggeredList from "./Stagger Animation/components/StaggeredList";
import StaggeredTextReveal from "./Stagger Animation/components/StaggeredTextReveal";
// import GestureBasedImageGallery from "./Gestures/components/GestureBasedImageGallery";
// import LongPressToChangeSize from "./Gestures/components/LongPressToChangeSize";
// import TapToChangeColor from "./Gestures/components/TapToChangeColor";
// import RotateOnDrag from "./Gestures/components/RotateOnDrag";
// import DynamicList from "./Variants/components/DynamicList";
// import ToggleSwitch from "./Variants/components/ToggleSwitch";
// import SwipeableCard from "./Gestures/components/SwipeableCard";
// import DraggableBox from "./Gestures/components/DraggableBox";





const App = () => {
    return (
        <ThemeProvider>
            <section className="h-screen flex justify-center items-center bg-[#0d1017]">
                <StaggeredTextReveal />
            </section>
        </ThemeProvider>
    )
}

export default App;
