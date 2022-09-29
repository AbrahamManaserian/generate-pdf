import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image1 from '../images/d3React.png'


export default function D3ToReact () {
    const [data,setData] = useState()
    

    // useEffect(()=>{
   
    //     const url = 'https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/global/time-series/globe/land_ocean/1/10/1880-2020/data.json'
    //     async function getJSONData (url) {
    //         const response = await fetch(url)
    //         const dataJson = await response.json()
    //         setData(dataJson)

    //     }
    //     getJSONData(url)
    // },[])
// console.log(data)
    return (
        <div>
            <Grid item container xs={12} paddingTop={5} >
                <Grid item container xs={12} alignItems='center' direction='column' >
                    <Typography paddingBottom={2}>
                         "Build out a d3.js line chart utilizing react as show in the following images:" 
                    </Typography>
                    <Typography>
                         Please come back 'Wed Sep 28 2022 22:00:00 GMT+0400 (Armenia Standard Time)'
                    </Typography>
                    <img style={{width:'50%',heigth:'auto'}} alt='image' src={Image1}/>
                </Grid>
            </Grid>
        </div>
    )
}


const montshs = ['January','February','March','April','May','June','July','August','September','October','November','December']
const years = [
    1880,
    1881,
    1882,
    1883,
    1884,
    1885,
    1886,
    1887,
    1888,
    1889,
    1890,
    1891,
    1892,
    1893,
    1894,
    1895,
    1896,
    1897,
    1898,
    1899,
    1900,
    1901,
    1902,
    1903,
    1904,
    1905,
    1906,
    1907,
    1908,
    1909,
    1910,
    1911,
    1912,
    1913,
    1914,
    1915,
    1916,
    1917,
    1918,
    1919,
    1920,
    1921,
    1922,
    1923,
    1924,
    1925,
    1926,
    1927,
    1928,
    1929,
    1930,
    1931,
    1932,
    1933,
    1934,
    1935,
    1936,
    1937,
    1938,
    1939,
    1940,
    1941,
    1942,
    1943,
    1944,
    1945,
    1946,
    1947,
    1948,
    1949,
    1950,
    1951,
    1952,
    1953,
    1954,
    1955,
    1956,
    1957,
    1958,
    1959,
    1960,
    1961,
    1962,
    1963,
    1964,
    1965,
    1966,
    1967,
    1968,
    1969,
    1970,
    1971,
    1972,
    1973,
    1974,
    1975,
    1976,
    1977,
    1978,
    1979,
    1980,
    1981,
    1982,
    1983,
    1984,
    1985,
    1986,
    1987,
    1988,
    1989,
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
]