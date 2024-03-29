import Card from "../card/gameModCard";
import Header from "../components/Header";
import whichcountrymod from "../assets/images/pageImage/gamemodeimages/countryselectionmode.png";
import distancemod from "../assets/images/pageImage/gamemodeimages/distancemode.png";
import timemod from "../assets/images/pageImage/gamemodeimages/fortimemod.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { zerotototalscore } from "../Redux/MapGameSlices/gameSlice";
function GameModeSelectionPage() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(zerotototalscore())
    }, [])
    return (
        <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 min-h-screen flex  justify-center items-center">
            <Header></Header>
            <div className="flex space-y-6 flex-col sm:space-x-0 sm:space-y-8 sm:pt-8 sm:pb-8 mt-32 mb-24 ">
                <div className="flex  space-x-6 flex-row sm:flex-col sm:space-x-0 sm:space-y-8">
                    <Card
                        title="Country Selection Mod"
                        imageUrl={whichcountrymod}
                        imageAlt="whichcountrymodimage"
                        description="Continue with Country Selection Mod"
                        gameMod="whichcountrymod"
                    />
                    <Card
                        title="Distance Mod"
                        imageUrl={distancemod}
                        imageAlt="distancemodimage"
                        description="Continue with Distance Mod"
                        gameMod="distancemod"
                    />
                    <Card
                        title="Against the time Mod"
                        imageUrl={timemod}
                        imageAlt="distancemodimage"
                        description="Continue with Against the time Mod"
                        gameMod="against"
                    />
                </div>
            </div>
        </div>
    );
}

export default GameModeSelectionPage;