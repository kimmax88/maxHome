function getUdemy(){
  const url = 'https://www.udemy.com/api-2.0/courses/';
  const myHeads = 
  {
    "Accept": "application/json, text/plain, */*",
    "Authorization": "Basic NTM0bktkSDhSWlh3THFNV3JVOThUUzh4NGI2enpuZ050ZGk4S1N1Vzp2aTdYdFA4Y0V3aU5HNWNjZnZFSXlUZjV2eWY2d0pNMVY1UE1nT0dOekx6Mzg4SjJmOVRjT2ZSM3ZEUDFTZmt2WU1iSmhmTnF1SlpteXNwN3FJNU5ZVFhOR3kySE9iVWt3eExkTzhGMUJNbzFLME5IYk1BVkduZWhFd3NJd0VGdQ==",
    "Content-Type": "application/json"
  };

  fetch(url,{
    method: "GET",
    headers: myHeads,
  })
  .then( res => {
    console.log(res);
    
  })

}
console.log('js');

getUdemy()

//curl --user ilrXKwSTQnYfdIsodsfeRFiDv8gr0yoSHPG8RmpV:D1Kqu7XDohg1sYuxnh0jXmhjpCOFWT6OgFz3w7kat1fVtRE0zIc1WjBWTDEHGgtO97plMN1c3wonSp1alj9pX3AzTY14M7YbAfa92aw9JSlMqxvZlM9USC6TrdsePcgG https://www.udemy.com/api-2.0/courses/


// curl -H "Authorization: Basic aWxyWEt3U1RRbllmZElzb2RzZmVSRmlEdjhncjB5b1NIUEc4Um1wVjpEMUtxdTdYRG9oZzFzWXV4bmgwalhtaGpwQ09GV1Q2T2dGejN3N2thdDFmVnRSRTB6SWMxV2pCV1RERUhHZ3RPOTdwbE1OMWMzd29uU3AxYWxqOXBYM0F6VFkxNE03WWJBZmE5MmF3OUpTbE1xeHZabE05VVNDNlRyZHNlUGNnRw==" https://www.udemy.com/api-2.0/courses/