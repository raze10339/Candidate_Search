import { useState, useEffect } from 'react';

interface Candidate {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  location: string;
  email: string;
  company: string;
  bio: string;
}

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Fetch saved candidates from local storage or an API
    const fetchCandidates = async () => {
      // Replace this with an actual API call or local storage fetch
      const savedCandidates: Candidate[] = [
        {
          id: 1,
          login: 'ee1110',
          name: 'Ee1110',
          avatar_url: 'https://randomuser.me/api/portraits/women/2.jpg',
          location: 'Tokyo, Japan',
          email: 'ee110@gmail.com',
          company: 'Microsoft',
          bio: 'JavaScript obsessed. Typical coffee lover. Hardcore travel buff.',
        },
        {
          id: 2,
          login: 'storkme',
          name: 'Alex Storkey',
          avatar_url: 'https://randomuser.me/api/portraits/men/1.jpg',
          location: 'England',
          email: 'stork@not.gd',
          company: '40AU',
          bio: 'Eat Sleep Code',
        },
        {
          id: 3,
          login: 'queSaraSara',
          name: 'sarahCodes',
          avatar_url: 'https://randomuser.me/api/portraits/women/1.jpg',
          location: 'Austin, TX',
          email: 'sarah.dev@gmail.com',
          company: 'sarahCodes',
          bio: 'DevOps Guru. i <3 film',
        },
        {
          id: 4,
          login: 'marcus-santos-dev',
          name: 'mr.coder',
          avatar_url: 'https://randomuser.me/api/portraits/men/2.jpg',
          location: 'Salvador, Bahia',
          email: 'marcus.santosnet@gmail.com',
          company: 'mr.coder',
          bio: 'Python all the way.',
        },
      ];
      setCandidates(savedCandidates);
      
    };

    fetchCandidates();
  }, []);

  const handleReject = (id: number) => {
    // Remove candidate from the list
    setCandidates((prevCandidates) => prevCandidates.filter(candidate => candidate.id !== id));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#0A0F3B', color: '#FFFFFF', height: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#FFFFFF' }}>Potential Candidates</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#000', color: '#FFFFFF' }}>
            <th style={tableHeaderStyle}>Image</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Location</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Company</th>
            <th style={tableHeaderStyle}>Bio</th>
            <th style={tableHeaderStyle}>Reject</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id} style={{ backgroundColor: '#333', color: '#FFFFFF', textAlign: 'center' }}>
              <td style={tableCellStyle}>
                <img src={candidate?.avatar_url} alt={candidate?.login} width={50} style={{ borderRadius: '50%' }} />
              </td>
              <td style={tableCellStyle}>
                {candidate.name} (<i>{candidate.login}</i>)
              </td>
              <td style={tableCellStyle}>{candidate.location}</td>
              <td style={tableCellStyle}>
                <a href={`mailto:${candidate.email}`} style={{ color: '#00A0FF' }}>{candidate.email}</a>
              </td>
              <td style={tableCellStyle}>{candidate.company}</td>
              <td style={tableCellStyle}>{candidate.bio}</td>
              <td style={tableCellStyle}>
                <button
                  onClick={() => handleReject(candidate.id)}
                  style={{
                    backgroundColor: 'red',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    fontSize: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1'
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styling for table headers and cells
const tableHeaderStyle = {
  padding: '10px',
  fontWeight: 'bold' as 'bold',
  border: '1px solid #333',
  textAlign: 'center' as 'center',
};

const tableCellStyle = {
  padding: '10px',
  border: '1px solid #333',
};

export default SavedCandidates;


