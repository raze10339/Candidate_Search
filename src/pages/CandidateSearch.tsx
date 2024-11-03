
import { useEffect, useState } from "react";

interface Candidate {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  location: string;
  email: string;
  html_url: string;
  company: string;
  bio: string;
}

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Mocked function to simulate fetching a candidate
  const fetchCandidate = async () => {
    setLoading(true);
    try {
      // Mocked candidate data for example purposes
      const mockCandidate: Candidate = {
        id: 1,
        login: 'octocat',
        name: 'Octocat',
        avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
        location: 'UK, London',
        email: 'octocat@github.com',
        html_url: 'https://github.com/octocat',
        company: 'Github',
        bio: "I'm the mascot for everyone's favorite version control system!",
      };
      setCandidate(mockCandidate);
      console.log("Avatar URL:", mockCandidate.avatar_url);
    } catch (error) {
      setError('Failed to load candidate');
    } finally {
      setLoading(false);
    }
  };

  // Fetch candidate on initial render
  useEffect(() => {
    fetchCandidate();
  }, []);

  const handleSave = () => {
    alert('Candidate saved!');
    fetchCandidate(); // Fetch the next candidate after saving
  };

  const handleReject = () => {
    fetchCandidate(); // Fetch the next candidate without saving
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#0A0F3B', color: '#FFFFFF', height: '100vh', padding: '20px' }}>
      <h1>Candidate Search</h1>
      {candidate ? (
        <div style={{ display: 'inline-block', backgroundColor: '#000', padding: '20px', borderRadius: '10px', maxWidth: '400px', textAlign: 'center' }}>
          <img src={candidate?.avatar_url} alt={candidate?.login} width={150} style={{ borderRadius: '50%' }} />
          <h2>{candidate.name} (<i>{candidate.login}</i>)</h2>
          <p>Location: {candidate.location}</p>
          <p>Email: <a href={`mailto:${candidate.email}`} style={{ color: '#00A0FF' }}>{candidate.email}</a></p>
          <p>Company: {candidate.company}</p>
          <p>Bio: {candidate.bio}</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button onClick={handleReject} style={{ backgroundColor: 'red', color: '#FFF', border: 'none', borderRadius: '50%', width: '60px', height: '60px', fontSize: '24px', marginRight: '20px', cursor: 'pointer',  display: 'flex', alignItems: 'center', justifyContent: 'center', }}>-</button>
            <button onClick={handleSave} style={{ backgroundColor: 'green', color: '#FFF', border: 'none', borderRadius: '50%', width: '60px', height: '60px', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>+</button>
          </div>
        </div>
      ) : (
        <p>No candidate selected</p>
      )}
    </div>
  );
};


export default CandidateSearch;
