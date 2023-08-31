export default function Caroption({ data, carIndex }) {
  return (
    <div>
      {data[carIndex].map((item) => (
        <div key={item.id}>
          <div className="lg:absolute lg:left-1/3 lg:w-1/3 mt-10">
            <img
              src={item.mainImage}
              key={item.id}
              className="mx-auto w-11/12 mb-10 lg:mb-0 lg:mx-0"
            />
          </div>
          <div>
            <table
              className="border-2 text-center text-2xl w-96 mx-auto lg:mx-0 mb-32"
              key={item.id}
            >
              <thead>
                <tr>
                  <th className="p-5 bg-orange-500 text-white" colSpan={2}>
                    {item.price}/ rent per day
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-5">Model</td>
                  <td className="p-5">{item.model}</td>
                </tr>
                <tr>
                  <td className="p-5">Mark</td>
                  <td className="p-5">{item.mark}</td>
                </tr>
                <tr>
                  <td className="p-5">Year</td>
                  <td className="p-5">{item.year}</td>
                </tr>
                <tr>
                  <td className="p-5">Doors</td>
                  <td className="p-5">{item.doors}</td>
                </tr>
                <tr>
                  <td className="p-5">AC</td>
                  <td className="p-5">{item.ac}</td>
                </tr>
                <tr>
                  <td className="p-5">Transmission</td>
                  <td className="p-5">{item.transmission}</td>
                </tr>
                <tr>
                  <td className="p-5">Fuel</td>
                  <td className="p-5">{item.fuel}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
