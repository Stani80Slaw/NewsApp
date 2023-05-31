import Button from 'react-bootstrap/Button';
function SearchForm({setClose}) {

  return (
    <>
      <Button variant="outline-dark" onClick={()=>setClose(false)}>Close</Button>
    </>
  );
} 

export default SearchForm;