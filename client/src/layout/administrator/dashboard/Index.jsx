import Cards from "../../../components/cards/Cards";
import Charts from "../../../features/administrator/Chart";
import BatteryDetector from "../../../features/administrator/BatteryDetector";
import Weather from "../../../features/administrator/Weather";
import Calendar from "../../../features/administrator/Calendar";
import TopContent from "./TopContent";

export default function Dashboard(){
    return (
        <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
                    <Cards />
                </div>
                <Charts>
                    <Charts.ChartOne></Charts.ChartOne>
                    <Charts.ChartTwo></Charts.ChartTwo>
                    <Charts.ChartThree></Charts.ChartThree>
                    <BatteryDetector />
                    <Weather />
                </Charts>
                <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
                    <TopContent/>
                    <Calendar />
                </div>
            </div>
        </main>
    )
}