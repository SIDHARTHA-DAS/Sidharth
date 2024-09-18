

const Qualification = ({ title, details }) => (
  <div className="bg-gray-900  shadow-md rounded-lg p-6">
    <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>
    {details.map((detail, index) => (
      <div key={index} className="mb-4">
        <h4 className="text-lg text-white font-semibold">{detail.degree || detail.role}</h4>
        <p className="text-gray-600">{detail.institution || detail.company}</p>
        <p className="text-gray-400">{detail.year || detail.duration}</p>
        <p className="text-gray-600">{detail.description}</p>
      </div>
    ))}
  </div>
);

export default Qualification
