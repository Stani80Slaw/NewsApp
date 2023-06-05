import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function SearchForm({ closeSideBar }) {
const[articlesSortDisabled, setArticlesSortDisabled]=useState(false);
const resultType =[
  "articles", 
  "uriWgtList", 
  "langAggr", 
  "timeAggr", 
  "sourceAggr", 
  "sourceExAggr", 
  "authorAggr", 
  "keywordAggr", 
  "locAggr", 
  "conceptAggr", 
  "conceptGraph", 
  "categoryAggr", 
  "dateMentionAggr", 
  "sentimentAggr", 
  "recentActivityArticles",
];
const articlesSortBy = [
  "date", 
  'rel', 
  'sourceImportance', 
  'sourceAlexaGlobalRank', 
  'sourceAlexaCountryRank', 
  'socialScore', 
  'facebookShares',
];
const dataType =[
  'news',
  'pr',
  'block',
];
const HandleSubmit = (event) =>{
  event.preventDefault();

  const data={
    keyword: event.target.keyword.value,
    resultType: event.target.resultType.value,
    articlesSortBy: event.target.articlesSortBy.value,
    dataType: [...event.target.dataType].filter(e => e.checked).map(d=>d.value),
  };
  console.log('data',data);
  closeSideBar();
};
const handleResultTypeChange=(event)=>{
  if(event.target.value !=='articles'){
    setArticlesSortDisabled(true);
  }
  else{
    setArticlesSortDisabled(false);
  }
}
const languages=[
  'Eesti',
  'English',
  'Русский',
  'Suomalainen',
  'Svenska',
  'Latviešu',
  'Lietuviškas',
  'Беларуский',
  'Polski',
  'Deutsch',
]

  return (
  
    <Form onSubmit={HandleSubmit}>
      
      <Form.Group className="mb-3">
        <Form.Label>Languages</Form.Label>
        <Form.Select name='languages'>
        {languages.map(type =>(
          <option value={type} key={type}> {type}</option>
        ))}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Keywords</Form.Label>
        <Form.Control type="text" name='keyword' />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>result Type</Form.Label>
      
      <Form.Select name='resultType' onChange={handleResultTypeChange} >
        {resultType.map(type =>(
          <option value={type} key={type}> {type}</option>
        ))}
    </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>ArticlesSortBy</Form.Label>
      
      <Form.Select name='articlesSortBy' disabled={articlesSortDisabled}>
        {articlesSortBy.map(type =>(
          <option value={type} key={type}> {type}</option>
        ))}
    </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
          <Form.Label >Data Type</Form.Label>
          {dataType.map((type)=>(
            <Form.Check 
            type="checkbox" 
            label={type} 
            key={type} 
            name='dataType'
            value={type}/>
          ))}
      </Form.Group>

      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" name='date of' />
        <Form.Control type="date" name='date to' />
      </Form.Group>
      <Form.Group className="mb-3"></Form.Group>
    
      <Button variant="outline-dark" type='sybmit' >Close side bar</Button>
    </Form>
  );
} 

export default SearchForm;