import React from "react";

const App = () => {

  const office = {
    name: "Prime Office Space",
    rent: 75000,
    address: "123 Business Park, Bangalore",
    image: "https://img.etimg.com/thumb/width-420,height-315,imgsize-654014,resizemode-75,msid-117912699/industry/services/property-/-cstruction/simpliwork-offices-leases-150000-sq-ft-at-embassy-manyata-expands-flexible-workspace-footprint-in-bangalore/incuspaze-leases-100k-sq-ft-office-space-in-gurugram.jpg",
  };

  const officeList = [
    { name: "Tech Hub", rent: 45000, address: "MG Road, Bangalore" },
    { name: "Startup Space", rent: 65000, address: "HSR Layout, Bangalore" },
    { name: "Corporate Plaza", rent: 85000, address: "Whitefield, Bangalore" },
    { name: "Budget Office", rent: 30000, address: "BTM Layout, Bangalore" },
  ];


  const rentStyle = (rent) => ({
    color: rent < 60000 ? "red" : "green",
    fontWeight: "bold",
  });

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
   
      <h1>🏢 Office Space Rental App</h1>


      <h2>{office.name}</h2>
      <img src={office.image} alt={office.name} style={{ borderRadius: "10px" }} />
      <p>
        <strong>Address:</strong> {office.address}
      </p>
      <p>
        <strong>Rent:</strong> <span style={rentStyle(office.rent)}>₹{office.rent}</span>
      </p>

      <hr />


      <h2>Available Office Spaces</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {officeList.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "15px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "300px",
              margin: "auto",
            }}
          >
            <h3>{item.name}</h3>
            <p>
              <strong>Address:</strong> {item.address}
            </p>
            <p>
              <strong>Rent:</strong>{" "}
              <span style={rentStyle(item.rent)}>₹{item.rent}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
