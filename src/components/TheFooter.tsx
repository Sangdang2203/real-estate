"use client";

export default function TheFooterComponent() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 px-4 h-auto w-full bg-slate-400 py-4">
        <div>
          <h2>Column 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h2>Column 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h2>Column 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </>
  );
}
