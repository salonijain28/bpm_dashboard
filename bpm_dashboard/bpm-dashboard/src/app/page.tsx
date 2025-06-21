export default function Home() {

  return (

    <div className="min-h-screen bg-gray-50">

 

      <header className="bg-white border-b border-gray-200 px-4 py-3">

        <div className="flex items-center justify-between max-w-7xl mx-auto">

 

          <div className="flex items-left gap-3">

           

            <div>

              <h1 className="text-xl font-semibold text-gray-900" style={{marginLeft : "-14em"}}>BPM Dashboard</h1>

            </div>

          </div>

          <nav className="hidden md:flex items-center gap-8">

            <a href="#" className="text-gray-900 font-medium hover:text-blue-600 transition-colors">

              Dashboard

            </a>

            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">

              Processes

            </a>

            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">

              Analytics

            </a>

            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">

              Settings

            </a>

          </nav>

        </div>

      </header>

 

 

      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20 px-4">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">

            Welcome to Our <span className="text-blue-400">BPM Dashboard</span>

          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">

            Streamline our business processes, enhance operational efficiency, and gain valuable insights with our

            comprehensive Business Process Management solution.

          </p>

        </div>

      </section>

 

      <section className="py-16 px-4 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

 

            <div className="text-center">

              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">250+</div>

              <div className="text-gray-600 font-medium">Processes Managed</div>

            </div>

 

            <div className="text-center">

              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">35%</div>

              <div className="text-gray-600 font-medium">Efficiency Gain</div>

            </div>

 

            <div className="text-center">

              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">1,200+</div>

              <div className="text-gray-600 font-medium">Active Users</div>

            </div>

            <div className="text-center">

              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">99.9%</div>

              <div className="text-gray-600 font-medium">System Uptime</div>

            </div>

          </div>

        </div>

      </section>

    </div>

  )

}