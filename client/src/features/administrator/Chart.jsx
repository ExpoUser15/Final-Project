import ReactApexChart from 'react-apexcharts';
import {useEffect, useState, useContext} from "react";
import { SetContext } from '../../context/ModeContext';

const Charts = (props) => {
    const { children } = props;
    return (
        <div className="mt-4 grid grid-cols-12 place-content-center gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
            {children}
        </div>
    )
}

const ChartOne = () => {
    const { calendarThemeBool } = useContext(SetContext);
    const [series, setSeries] = useState({
      series: [
        {
          name: 'Dosen',
          data: [30, 50, 25, 45, 30, 60, 65],
        },
        {
          name: 'Mahasiswa',
          data: [23, 35, 45, 78, 50, 80, 47]
        },
        {
          name: 'Lainnya',
          data: [65, 39, 35, 70, 47, 45, 85]
        },
      ]
    });

    const [options, setOptions] = useState({
      options: {
        chart: {
          type: 'line',
          toolbar: {
              show: false
          },
        },
        tooltip: {
          enabled: true,
          theme: "light"
        },
        legend: {
          horizontalAlign: 'right',
          labels: {
            // Mengubah warna font pada legend
            colors: "#64748b", // Ganti warna sesuai keinginan Anda
          },
          onItemHover: {
            highlightDataSeries: true
          },
          onItemClick: {
            toggleDataSeries: true
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        markers: {
          size: 4,
          strokeWidth: 0,
          hover: {
            size: 9
          }
        },
        grid: {
          show: true,
          borderColor: '#cbd5e1',
          padding: {
            bottom: 0
          },
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          row: {
            colors: undefined,
            opacity: 0.5
          },  
          column: {
            colors: undefined,
            opacity: 0.5
          },  
        },
        xaxis: {
          show: true,
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          axisBorder: {
            show: false, // Menghilangkan garis X-axis
          },
          labels: {
            style: {
              colors: "#475569"
            },
          }
        },
        yaxis: {
          show: true,
          lines: {
            show: true
          },
          labels: {
            style: {
              colors: "#475569"
            },
          },
          max: 100,
          min: 0,
        },
      }
    });

    useEffect(() => {
      const opt = options.options
      
      if(localStorage.theme == "dark"){
        setOptions({
          options:{
          ...opt,
           tooltip:{
            ...opt.tooltip, 
            theme: "dark"
          }, 
          grid: {
            ...opt.grid, 
            borderColor: "#64748b" 
          }, 
          xaxis: {
            ...opt.xaxis, 
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            labels: {
              style:{
                colors:"#94a3b8"
              }
            }
          }, 
          yaxis: {
            ...opt.yaxis, 
            labels: {
              style:{
                colors:"#94a3b8"
              }
            }
          }
        }});
      }else{
        setOptions({
          options:{
          ...opt, 
          tooltip:{
            ...opt.tooltip, theme: "light"
          }, 
          grid: {
            ...opt.grid, borderColor: "#cbd5e1" 
          }, 
          xaxis: {
            ...opt.xaxis, 
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            labels: {
              style:{
                colors:"#475569"
              }
            }
          }, 
          yaxis: {
            ...opt.yaxis, 
            labels: {
              style:{
                colors:"#475569"
              }
            }
          }
        }});
      }
    }, [calendarThemeBool]);

    return (
        <div className="col-span-12 rounded-sm border border-gray-200 bg-white px-6 pt-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:px-7 lg:col-span-8 dark:text-slate-200">
            <div>
                <div className='-ml-5'>
                    <h1 className='font-semibold text-lg ml-4'>Analisis Pengguna</h1>
                    <div className='min-h-[315px]' >
                        <ReactApexChart
                            options={options.options}
                            series={series.series}
                            type="line"
                            height={350}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const ChartTwo = () => {
    const [options, setOptions] = useState({
      options: {
        labels: ['Desktop', 'Mobile', 'Tablet', 'Lainnya'],
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false, // Menghilangkan keterangan label di luar diagram
        },
        plotOptions: {
          pie: {
            expandOnClick: true,
            donut: {
              labels: {
                show: false
              }
            }
          }
        },
        stroke: {
          width: 0, // Mengatur lebar border (stroke) menjadi 0 untuk menghilangkannya
        },
        colors: ['#464646', '#3d6e9b', '#68cdff', '#210795']    
      }
    });
        
    const [series, setSeries] = useState({
      series: [30, 40, 25, 15]
    });

    return (
        <div className="col-span-12 rounded-sm border border-gray-200 bg-white px-6 pt-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900 xl:px-7 lg:px-2 lg:col-span-4 dark:text-slate-200">
            <div>
                <div className='' >
                    <h1 className='font-semibold text-lg'>Analisis Perangkat</h1>
                    <div className='min-h-[250px] flex justify-center mt-2' >
                        <ReactApexChart
                            options={options.options}
                            series={series.series}
                            type="donut"
                            height={250}
                        />
                    </div>
                    <div className='grid grid-cols-2 text-sm gap-3 pb-2 lg:pb-0 mt-5'>
                        <div className='flex items-center gap-1 pe-10 lg:p-0'>
                            <div className='w-3 h-3 rounded-full bg-[#464646]'></div>
                            <div className='flex justify-between lg:w-[100px] w-full'>
                                <p>Desktop</p>
                                <p>25%</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 ms-2 lg:ms-0'>
                            <div className='w-3 h-3 rounded-full bg-[#3d6e9b]'></div>
                            <div className='flex justify-between lg:w-[100px] w-full'>
                                <p>Mobile</p>
                                <p>25%</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 pe-10 lg:p-0'>
                            <div className='w-3 h-3 rounded-full bg-[#68cdff]'></div>
                            <div className='flex justify-between lg:w-[100px] w-full' >
                                <p>Tablet</p>
                                <p>20%</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-1 ms-2 lg:ms-0'>
                            <div className='w-3 h-3 rounded-full bg-[#210795]'></div>
                            <div className='flex justify-between lg:w-[100px] w-full' >
                                <p>lainnya</p>
                                <p>40%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ChartThree = () => {
  const { calendarThemeBool } = useContext(SetContext);
  const [options, setOptions] = useState({
    options: {
      chart: {
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '8px',
          colors: ["#64748b"]
        }
      },
      legend: {
        labels: {
          colors: "#64748b", 
        }
      }, 
      tooltip: {
        enabled: true,
        theme: "light"
      },  
      grid: {
        borderColor: "#cbd5e1"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: "#64748b"
          },
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: true,
        },
        labels: {
          show: true,
          style: {
            colors: "#64748b"
          },
          formatter: function (val) {
            return val + "%";
          }
        }   
      },
    }
  })

  const [series, setSeries] = useState({
    series: [{
        name: 'Sangat Buruk',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
      },
      {
        name: "Buruk",
        data: [2.1, 4.5, 6.3, 7.8, 6.5, 4.5, 8.0, 1.2, 4.8, 1.1, 3.1, 0.2]
      },
      {
        name: "Cukup",
        data: [5.1, 2.5, 6.8, 5.8, 8.5, 3.1, 4.6, 9.2, 4.9, 7.7, 4.8, 3.9]
      },
      {
        name: "Baik",
        data: [8.1, 7.7, 7.9, 6.8, 8.4, 5.5, 4.6, 6.7, 4.3, 2.4, 7.4, 8.2]
      },
      {
        name: "Sangat Baik",
        data: [5.5, 6.8, 6.9, 8.8, 4.8, 7.4, 6.7, 5.9, 7.9, 7.5, 9.1, 7.2]
      },
    ]
  });

  useEffect(() => {
    const opt = options.options
    if(localStorage.theme == "dark"){
      setOptions({
        options: {
          ...opt, 
          tooltip: {
            enabled: true,
            theme: "dark"
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          },
          grid: {
            ...opt.yaxis,
            borderColor: "#64748b",
          }

        }
      })
    }else{
      setOptions({
        options: {
          ...opt, 
          tooltip: {
            enabled: true,
            theme: "light"
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          },
          grid: {
            ...opt.yaxis,
            borderColor: "#cbd5e1",
          }

        }
      })
    }
  }, [calendarThemeBool]);
  return(
    <div className="col-span-12 rounded-sm border border-gray-200 bg-white px-6 pt-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900 sm:px-7 dark:text-slate-200">
        <div>
            <div className='-ml-5'>
                <h1 className='font-semibold text-lg ml-4'>Evaluasi Pengguna</h1>
                <p className='font-semibold text-sm ml-4 text-slate-500 italic'>Evaluasi kepuasan mahasiswa terhadap video pembelajaran.</p>
                <div>
                  <select id="">
                    options
                  </select>
                </div>
                <div className='min-h-[315px]' >
                    <ReactApexChart
                        options={options.options}
                        series={series.series}
                        type="bar"
                        height={350}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

Charts.ChartOne = ChartOne;
Charts.ChartTwo = ChartTwo;
Charts.ChartThree = ChartThree;

export default Charts;