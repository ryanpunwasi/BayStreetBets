import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'


let quote = [{
  "symbol": "AAPL",
  "sector": "electronictechnology",
  "securityType": "cs",
  "bidPrice": 0,
  "bidSize": 0,
  "askPrice": 0,
  "askSize": 0,
  "lastUpdated": 1659732403127,
  "lastSalePrice": 165.28,
  "lastSaleSize": 400,
  "lastSaleTime": 1659729599447,
  "volume": 973609
}];

let oneMonth = [{ "close": 38.21, "high": 38.45, "low": 37.7374, "open": 38.21, "priceDate": "2022-07-06", "symbol": "TWTR", "volume": 4870258, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-06", "updated": 1657653642000, "changeOverTime": 0, "marketChangeOverTime": 0, "uOpen": 38.21, "uClose": 38.21, "uHigh": 38.45, "uLow": 37.7374, "uVolume": 4870258, "fOpen": 38.21, "fClose": 38.21, "fHigh": 38.45, "fLow": 37.7374, "fVolume": 4870258, "label": "Jul 6, 22", "change": 0, "changePercent": 0 },
{ "close": 38.79, "high": 39.51, "low": 38.32, "open": 38.32, "priceDate": "2022-07-07", "symbol": "TWTR", "volume": 13214877, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-07", "updated": 1657653642000, "changeOverTime": 0.015179272441769125, "marketChangeOverTime": 0.015179272441769125, "uOpen": 38.32, "uClose": 38.79, "uHigh": 39.51, "uLow": 38.32, "uVolume": 13214877, "fOpen": 38.32, "fClose": 38.79, "fHigh": 39.51, "fLow": 38.32, "fVolume": 13214877, "label": "Jul 7, 22", "change": 0.5799999999999983, "changePercent": 0.0152 },
{ "close": 36.81, "high": 37.55, "low": 36.8, "open": 37.51, "priceDate": "2022-07-08", "symbol": "TWTR", "volume": 29822940, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-08", "updated": 1657653642000, "changeOverTime": -0.036639623135304854, "marketChangeOverTime": -0.036639623135304854, "uOpen": 37.51, "uClose": 36.81, "uHigh": 37.55, "uLow": 36.8, "uVolume": 29822940, "fOpen": 37.51, "fClose": 36.81, "fHigh": 37.55, "fLow": 36.8, "fVolume": 29822940, "label": "Jul 8, 22", "change": -1.9799999999999969, "changePercent": -0.051 },
{ "close": 32.65, "high": 34.9, "low": 32.55, "open": 34.6, "priceDate": "2022-07-11", "symbol": "TWTR", "volume": 67259339, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-11", "updated": 1657653642000, "changeOverTime": -0.1455116461659252, "marketChangeOverTime": -0.1455116461659252, "uOpen": 34.6, "uClose": 32.65, "uHigh": 34.9, "uLow": 32.55, "uVolume": 67259339, "fOpen": 34.6, "fClose": 32.65, "fHigh": 34.9, "fLow": 32.55, "fVolume": 67259339, "label": "Jul 11, 22", "change": -4.160000000000004, "changePercent": -0.113 },
{ "close": 34.06, "high": 34.39, "low": 32.52, "open": 32.76, "priceDate": "2022-07-12", "symbol": "TWTR", "volume": 29539372, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-12", "updated": 1657674039000, "changeOverTime": -0.10861031143679661, "marketChangeOverTime": -0.10861031143679661, "uOpen": 32.76, "uClose": 34.06, "uHigh": 34.39, "uLow": 32.52, "uVolume": 29539372, "fOpen": 32.76, "fClose": 34.06, "fHigh": 34.39, "fLow": 32.52, "fVolume": 29539372, "label": "Jul 12, 22", "change": 1.4100000000000037, "changePercent": 0.0432 },
{ "close": 36.75, "high": 37.16, "low": 34.8, "open": 34.95, "priceDate": "2022-07-13", "symbol": "TWTR", "volume": 50267711, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-13", "updated": 1657760445000, "changeOverTime": -0.03820989269824655, "marketChangeOverTime": -0.03820989269824655, "uOpen": 34.95, "uClose": 36.75, "uHigh": 37.16, "uLow": 34.8, "uVolume": 50267711, "fOpen": 34.95, "fClose": 36.75, "fHigh": 37.16, "fLow": 34.8, "fVolume": 50267711, "label": "Jul 13, 22", "change": 2.6899999999999977, "changePercent": 0.079 },
{ "close": 36.29, "high": 37.1, "low": 36.19, "open": 36.59, "priceDate": "2022-07-14", "symbol": "TWTR", "volume": 18951620, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-14", "updated": 1657846835000, "changeOverTime": -0.05024862601413247, "marketChangeOverTime": -0.05024862601413247, "uOpen": 36.59, "uClose": 36.29, "uHigh": 37.1, "uLow": 36.19, "uVolume": 18951620, "fOpen": 36.59, "fClose": 36.29, "fHigh": 37.1, "fLow": 36.19, "fVolume": 18951620, "label": "Jul 14, 22", "change": -0.46000000000000085, "changePercent": -0.0125 },
{ "close": 37.74, "high": 37.772, "low": 36.27, "open": 36.62, "priceDate": "2022-07-15", "symbol": "TWTR", "volume": 14809322, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-15", "updated": 1657935121000, "changeOverTime": -0.01230044490970947, "marketChangeOverTime": -0.01230044490970947, "uOpen": 36.62, "uClose": 37.74, "uHigh": 37.772, "uLow": 36.27, "uVolume": 14809322, "fOpen": 36.62, "fClose": 37.74, "fHigh": 37.772, "fLow": 36.27, "fVolume": 14809322, "label": "Jul 15, 22", "change": 1.4500000000000028, "changePercent": 0.04 },
{ "close": 38.41, "high": 38.755, "low": 37.34, "open": 37.58, "priceDate": "2022-07-18", "symbol": "TWTR", "volume": 15147525, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-18", "updated": 1658192434000, "changeOverTime": 0.005234231876472016, "marketChangeOverTime": 0.005234231876472016, "uOpen": 37.58, "uClose": 38.41, "uHigh": 38.755, "uLow": 37.34, "uVolume": 15147525, "fOpen": 37.58, "fClose": 38.41, "fHigh": 38.755, "fLow": 37.34, "fVolume": 15147525, "label": "Jul 18, 22", "change": 0.6699999999999946, "changePercent": 0.0178 },
{ "close": 39.49, "high": 40.5, "low": 38.5, "open": 38.51, "priceDate": "2022-07-19", "symbol": "TWTR", "volume": 37491773, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-19", "updated": 1658280625000, "changeOverTime": 0.03349908400942165, "marketChangeOverTime": 0.03349908400942165, "uOpen": 38.51, "uClose": 39.49, "uHigh": 40.5, "uLow": 38.5, "uVolume": 37491773, "fOpen": 38.51, "fClose": 39.49, "fHigh": 40.5, "fLow": 38.5, "fVolume": 37491773, "label": "Jul 19, 22", "change": 1.0800000000000054, "changePercent": 0.0281 },
{ "close": 39.6, "high": 40.005, "low": 38.82, "open": 39.56, "priceDate": "2022-07-20", "symbol": "TWTR", "volume": 13946408, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-20", "updated": 1658365223000, "changeOverTime": 0.0363779115414813, "marketChangeOverTime": 0.0363779115414813, "uOpen": 39.56, "uClose": 39.6, "uHigh": 40.005, "uLow": 38.82, "uVolume": 13946408, "fOpen": 39.56, "fClose": 39.6, "fHigh": 40.005, "fLow": 38.82, "fVolume": 13946408, "label": "Jul 20, 22", "change": 0.10999999999999943, "changePercent": 0.0028 },
{ "close": 39.52, "high": 40.1, "low": 39.12, "open": 39.5, "priceDate": "2022-07-21", "symbol": "TWTR", "volume": 11409767, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-21", "updated": 1658451624000, "changeOverTime": 0.034284218790892496, "marketChangeOverTime": 0.034284218790892496, "uOpen": 39.5, "uClose": 39.52, "uHigh": 40.1, "uLow": 39.12, "uVolume": 11409767, "fOpen": 39.5, "fClose": 39.52, "fHigh": 40.1, "fLow": 39.12, "fVolume": 11409767, "label": "Jul 21, 22", "change": -0.0799999999999983, "changePercent": -0.002 },
{ "close": 39.84, "high": 40.18, "low": 38.71, "open": 38.9, "priceDate": "2022-07-22", "symbol": "TWTR", "volume": 25188675, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-22", "updated": 1658544265000, "changeOverTime": 0.042658989793247906, "marketChangeOverTime": 0.042658989793247906, "uOpen": 38.9, "uClose": 39.84, "uHigh": 40.18, "uLow": 38.71, "uVolume": 25188675, "fOpen": 38.9, "fClose": 39.84, "fHigh": 40.18, "fLow": 38.71, "fVolume": 25188675, "label": "Jul 22, 22", "change": 0.3200000000000003, "changePercent": 0.0081 },
{ "close": 39.24, "high": 39.6, "low": 38.7355, "open": 39.23, "priceDate": "2022-07-25", "symbol": "TWTR", "volume": 10395602, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-25", "updated": 1658797231000, "changeOverTime": 0.026956294163831485, "marketChangeOverTime": 0.026956294163831485, "uOpen": 39.23, "uClose": 39.24, "uHigh": 39.6, "uLow": 38.7355, "uVolume": 10395602, "fOpen": 39.23, "fClose": 39.24, "fHigh": 39.6, "fLow": 38.7355, "fVolume": 10395602, "label": "Jul 25, 22", "change": -0.6000000000000014, "changePercent": -0.0151 },
{ "close": 39.34, "high": 39.53, "low": 38.89, "open": 39.08, "priceDate": "2022-07-26", "symbol": "TWTR", "volume": 12637219, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-26", "updated": 1658883631000, "changeOverTime": 0.02957341010206759, "marketChangeOverTime": 0.02957341010206759, "uOpen": 39.08, "uClose": 39.34, "uHigh": 39.53, "uLow": 38.89, "uVolume": 12637219, "fOpen": 39.08, "fClose": 39.34, "fHigh": 39.53, "fLow": 38.89, "fVolume": 12637219, "label": "Jul 26, 22", "change": 0.10000000000000142, "changePercent": 0.0025 },
{ "close": 39.85, "high": 40.11, "low": 39.1312, "open": 39.58, "priceDate": "2022-07-27", "symbol": "TWTR", "volume": 11598069, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-27", "updated": 1658970024000, "changeOverTime": 0.042920701387071464, "marketChangeOverTime": 0.042920701387071464, "uOpen": 39.58, "uClose": 39.85, "uHigh": 40.11, "uLow": 39.1312, "uVolume": 11598069, "fOpen": 39.58, "fClose": 39.85, "fHigh": 40.11, "fLow": 39.1312, "fVolume": 11598069, "label": "Jul 27, 22", "change": 0.509999999999998, "changePercent": 0.013 },
{ "close": 40.89, "high": 40.9, "low": 39.5806, "open": 39.76, "priceDate": "2022-07-28", "symbol": "TWTR", "volume": 10153642, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-28", "updated": 1659056423000, "changeOverTime": 0.0701387071447265, "marketChangeOverTime": 0.0701387071447265, "uOpen": 39.76, "uClose": 40.89, "uHigh": 40.9, "uLow": 39.5806, "uVolume": 10153642, "fOpen": 39.76, "fClose": 40.89, "fHigh": 40.9, "fLow": 39.5806, "fVolume": 10153642, "label": "Jul 28, 22", "change": 1.0399999999999991, "changePercent": 0.0261 },
{ "close": 41.61, "high": 41.78, "low": 40.75, "open": 40.8, "priceDate": "2022-07-29", "symbol": "TWTR", "volume": 11787736, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-07-29", "updated": 1659144624000, "changeOverTime": 0.08898194190002613, "marketChangeOverTime": 0.08898194190002613, "uOpen": 40.8, "uClose": 41.61, "uHigh": 41.78, "uLow": 40.75, "uVolume": 11787736, "fOpen": 40.8, "fClose": 41.61, "fHigh": 41.78, "fLow": 40.75, "fVolume": 11787736, "label": "Jul 29, 22", "change": 0.7199999999999989, "changePercent": 0.0176 },
{ "close": 40.89, "high": 41.35, "low": 40.46, "open": 41.12, "priceDate": "2022-08-01", "symbol": "TWTR", "volume": 14094775, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-08-01", "updated": 1659402033000, "changeOverTime": 0.0701387071447265, "marketChangeOverTime": 0.0701387071447265, "uOpen": 41.12, "uClose": 40.89, "uHigh": 41.35, "uLow": 40.46, "uVolume": 14094775, "fOpen": 41.12, "fClose": 40.89, "fHigh": 41.35, "fLow": 40.46, "fVolume": 14094775, "label": "Aug 1, 22", "change": -0.7199999999999989, "changePercent": -0.0173 },
{ "close": 40.98, "high": 41.27, "low": 40.65, "open": 40.75, "priceDate": "2022-08-02", "symbol": "TWTR", "volume": 5244403, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-08-02", "updated": 1659501050000, "changeOverTime": 0.07249411148913887, "marketChangeOverTime": 0.07249411148913887, "uOpen": 40.75, "uClose": 40.98, "uHigh": 41.27, "uLow": 40.65, "uVolume": 5244403, "fOpen": 40.75, "fClose": 40.98, "fHigh": 41.27, "fLow": 40.65, "fVolume": 5244403, "label": "Aug 2, 22", "change": 0.0899999999999963, "changePercent": 0.0022 },
{ "close": 41, "high": 41.39, "low": 40.89, "open": 41, "priceDate": "2022-08-03", "symbol": "TWTR", "volume": 9348811, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-08-03", "updated": 1659574835000, "changeOverTime": 0.07301753467678616, "marketChangeOverTime": 0.07301753467678616, "uOpen": 41, "uClose": 41, "uHigh": 41.39, "uLow": 40.89, "uVolume": 9348811, "fOpen": 41, "fClose": 41, "fHigh": 41.39, "fLow": 40.89, "fVolume": 9348811, "label": "Aug 3, 22", "change": 0.020000000000003126, "changePercent": 0.0005 },
{ "close": 41.06, "high": 41.23, "low": 40.55, "open": 41, "priceDate": "2022-08-04", "symbol": "TWTR", "volume": 6169363, "id": "HISTORICAL_PRICES", "key": "TWTR", "subkey": "", "date": "2022-08-04", "updated": 1659661240000, "changeOverTime": 0.07458780423972786, "marketChangeOverTime": 0.07458780423972786, "uOpen": 41, "uClose": 41.06, "uHigh": 41.23, "uLow": 40.55, "uVolume": 6169363, "fOpen": 41, "fClose": 41.06, "fHigh": 41.23, "fLow": 40.55, "fVolume": 6169363, "label": "Aug 4, 22", "change": 0.060000000000002274, "changePercent": 0.0015 }]

//animation block of code
const totalDuration = 5000;
const delayBetweenPoints = totalDuration / oneMonth.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    }
  }
};




export default function StockChart() {

  const [userData, setUserData] = useState({
    labels: oneMonth.map((month) => month.label),
    datasets: [{
      label: "Twitter (TWTR) $USD",
      data: oneMonth.map((month) => month.close)
    }]
  })

  let delayed;

  return (

    <Line data={userData} options={{
      maintainAspectRatio: false,
      backgroundColor: 'rgb(0, 0, 255)',
      borderColor: 'rgb(0, 0, 0)',
      color: 'rgb(0, 0, 0)',
      borderWidth: 1,
      pointStyle: 'rectRot',
      pointRadius: 5,
      tension: 0.3,

      

      
    }} />

  )

}