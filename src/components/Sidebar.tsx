import WeatherApp from "./WeatherApp/WeatherApp"


function Sidebar() {
  return (
    <div className="w-1/5 bg-slate-800 h-screen fixed top-0 left-0">
      <h2 className="text-emerald-500 font-semibold flex justify-center"> i'm a sidebar</h2>
      <WeatherApp></WeatherApp>
    </div>
  )
}

export default Sidebar
