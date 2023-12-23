import { useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function BatteryDetector(){
    const [charging, setCharging] = useState(false);
    const optionsRef = useRef({options : {
            chart: {
                height: 350,
                type: 'radialBar',
                offsetY: -10,
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120
                        },
                        value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: "#fff",
                            formatter: function (val) {
                                return val + "%";
                            }
                        },
                        style: {
                            colors: ""
                          },
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
            },
            stroke: {
                dashArray: 4
            },
            labels: ['Presentase Baterai'],
        }}
    );

    const [series, setSeries] = useState({series: [0]});

    useEffect(() => {
        if(charging == true){
            document.getElementById("chargingMsg").innerHTML = `
                    <div class='bg-blue-400 w-40 rounded-md flex justify-between items-center px-2 py-1 opacity-60'>
                        <div class='flex justify-between w-full'>
                            <h1 class='font-semibold ps-1 text-white'>Mengisi Daya</h1>
                            <svg class='fill-sky-950 animate-bounce' xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'>
                                <path d='M460-200h40v-74l140-140v-186H320v186l140 140v74Zm-80 80v-120L240-380v-220q0-33 23.5-56.5T320-680h40l-40 40v-200h80v160h160v-160h80v200l-40-40h40q33 0 56.5 23.5T720-600v220L580-240v120H380Zm100-280Z'/>
                            </svg>
                        </div>
                    </div>`
        }else{
            document.getElementById("chargingMsg").innerHTML = "";
        }
        if("getBattery" in navigator){
            navigator.getBattery().then(function(battery){
                setSeries({series: [Math.ceil(battery.level * 100)]})
                if(battery.charging){
                    setCharging(true);
                }
                battery.onchargingchange = () => {
                    if(battery.charging){
                        setCharging(true);
                    }else{
                        setCharging(false);
                    }
                }
            });
        }else{
            console.log("Browser tidak mendukung pengaksesan informasi baterai.")
        }
    }, [])

    return(
        <div className="col-span-12 rounded-md border border-gray-200 bg-white px-6 pt-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:px-2 lg:col-span-6 dark:text-slate-200 bg-[url('/batterybg/bg.jpg')] bg-cover bg-center">
            <div>
                <div>
                    <div className='min-h-[315px] flex flex-col items-center justify-center' >
                        <div id='chargingMsg'></div>
                        <ReactApexChart
                            options={optionsRef.current.options}
                            series={series.series}
                            type="radialBar"
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}