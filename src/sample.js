const getRequest = async (event, context) => {
  console.log('[GET] Received GET request');
  console.log('[GET] Query params = ', event.queryStringParameters);
  return { statusCode: 200, body: JSON.stringify({ message:'Successful' })};
};

const postRequest = async (event, context) => {
  console.log('[POST] Received POST request');
  console.log('[POST] Request body:', JSON.stringify(event.body));
  return { statusCode: 201, body: JSON.stringify({ message:'Successful' })};
};

const putRequest = async (event, context) => {
  console.log('[PUT] Received PUT request');
  console.log('[PUT] Request body:', JSON.stringify(event.body));
  return { statusCode: 200, body: JSON.stringify({ message:'Successful' })};
};

const deleteRequest = async (event, context) => {
  console.log('[DELETE] Received DELETE request');
  console.log('[DELETE] Request boy:', JSON.stringify(event.body));
  return { statusCode: 200, body: JSON.stringify({ message:'Successful' })};
};

module.exports = {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
};
