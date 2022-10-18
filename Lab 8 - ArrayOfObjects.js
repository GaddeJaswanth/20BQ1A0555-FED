import React from "react";

class ArrayOfObjects extends React.Component {
  students = [
    {
      roll: "555",
      name: "Jaswanth"
    },
    {
      roll: "543",
      name: "Sathish"
    },
    {
      roll: "526",
      name: "Mani Deep"
    }
  ];

  render() {
    return (
      <div>
        <table border="1" style={{ borderCollapse: "collapse" }}>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
          </tr>
          {this.students.map((student) => {
            return (
              <tr>
                <td>{student.name}</td>
                <td>{student.roll}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default ArrayOfObjects;
