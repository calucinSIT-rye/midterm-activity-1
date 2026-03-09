import React from 'react';
import { Link } from 'react-router-dom';

const Students = () => {
  const students = [
    { id: 1, name: 'Calucin, Reign Alexander S.', major: 'Computer Science', year: '1st Year', avatar: 'C' },
    { id: 2, name: 'Padilla, John Mark U.', major: 'Information Technology', year: '1st Year', avatar: 'P' },
    { id: 3, name: 'Jallores, Khen Lister G.', major: 'Computer Science', year: '2nd Year', avatar: 'J' },
    { id: 4, name: 'Libiran, Cyrill Aljaylen', major: 'Information Technology', year: '1st Year', avatar: 'L' },
    { id: 5, name: 'Ngo, Jules Riane S.', major: 'Computer Science', year: '2nd Year', avatar: 'N' },
    { id: 6, name: 'Santos, Maria Elena R.', major: 'Computer Science', year: '1st Year', avatar: 'S' },
    { id: 7, name: 'Garcia, Antonio Miguel L.', major: 'Information Technology', year: '2nd Year', avatar: 'G' },
    { id: 8, name: 'Reyes, Sofia Isabella C.', major: 'Computer Science', year: '1st Year', avatar: 'R' },
    { id: 9, name: 'Torres, Carlos Eduardo M.', major: 'Information Technology', year: '2nd Year', avatar: 'T' },
  ];

  return (
    <div className="container">
      <div className="card">
        <h1>Student Directory</h1>
        <p>Meet our Computer Science and Information Technology students from different year levels.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {students.map(student => (
            <div key={student.id} className="student-card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'var(--light-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                  marginRight: '1rem'
                }}>
                  {student.avatar}
                </div>
                <div>
                  <h3 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>{student.name}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-light)' }}>{student.major}</p>
                </div>
              </div>
              <p style={{ marginBottom: '1rem' }}><strong>Year:</strong> {student.year}</p>
              <Link to={`/students/${student.id}`} className="btn" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', width: '100%', textAlign: 'center' }}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;