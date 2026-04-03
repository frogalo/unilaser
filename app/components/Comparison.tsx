import content from "../../data/content.json";

export default function Comparison() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-screen-xl mx-auto px-12">
        {/* <h2 className="text-4xl font-headline font-bold text-primary mb-12 text-center">
          {content.comparison.title}
        </h2> */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-primary text-on-primary">
                {content.comparison.headers.map((header, index) => (
                  <th 
                    key={index} 
                    className={`p-6 font-headline font-bold ${index === 0 ? "rounded-tl-lg" : ""} ${index === content.comparison.headers.length - 1 ? "rounded-tr-lg bg-secondary" : ""}`}
                  >
                    {header === "UNILASER CNC" ? (
                      <div className="flex items-center gap-3">
                        <img src="/images/logo.png" alt="UNILASER" className="h-6 w-auto brightness-0 invert" />
                        <span className="text-white">CNC</span>
                      </div>
                    ) : header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-surface-container-lowest text-on-surface">
              {content.comparison.rows.map((row, index) => (
                <tr key={index} className={`border-outline-variant ${index !== content.comparison.rows.length - 1 ? "border-b" : ""}`}>
                  <td className="p-6 font-bold">{row.param}</td>
                  <td className="p-6">{row.col1}</td>
                  <td className="p-6">{row.col2}</td>
                  <td className="p-6 font-bold text-secondary">{row.col3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
