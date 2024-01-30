export const Filter = () => {
  
  return (
    <section className="w-1/5 space-y-3 bg-white divide-y h-full overflow-scroll">
      <p className="flex justify-between ">
        <h4 className="font-bold">Filters</h4>{" "}
        <button className="text-sm text-blue-500">
          <i className="fa-solid fa-arrow-rotate-left"></i> Reset All
        </button>
      </p>

      <div className="flex flex-col space-y-2">
        <h4 className="text-sm">RENTAL TYPE</h4>
        <div className="flex flex-wrap space-x-4">
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Any
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Per Day
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Per Hour
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <h4 className="text-sm">TRANSMISSION</h4>
        <div className="flex flex-wrap space-x-4">
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Any
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Manual
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Automatic
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <h4 className="text-sm">FUEL TYPE</h4>
        <div className="flex flex-wrap space-x-4">
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Any
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Petrol
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Diesel
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Gas
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Hybrid
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Electric
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <h4 className="text-sm">SEAT</h4>
        <div className="flex flex-wrap space-x-4">
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Any
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            2 Seater
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            4 Seater
          </button>
          
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <h4 className="text-sm">VEHICLE CONDITION</h4>
        <div className="flex flex-wrap space-x-4">
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Any
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Brand New
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Used
          </button>
          
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <h4 className="text-sm">AVAILABILITY</h4>
        <div className="flex flex-wrap space-x-4">
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            ALL
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Available
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Arriving Soon
          </button>
          
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <h4 className="text-sm">MILAGE</h4>
        <div className="flex flex-wrap space-x-4">
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            ALL
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Available
          </button>
          <button className="rounded-2xl px-3 py-1 text-sm border border-slate-500">
            Arriving Soon
          </button>
          
        </div>
      </div>
    </section>
  );
};
