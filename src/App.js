import React, {useEffect, useState}  from 'react';
import OurTeam from './OurTeam';

function App() {
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
    const url = 'https://dummyapi.io/data/api/user';


    const apiCall = async () => {
        try {
            const response = await fetch(url, {headers: {'app-id' : '60478cc549546035dd15897f'} });
            const users = await response.json();
            setData( users.data);
            setView(data);
        } catch (error) {
            console.log(error);
        }
    }


useEffect(() => {
    apiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (

    <div className="App">
      {view && <OurTeam data={data} />}
    </div>
  );
}

export default App;
