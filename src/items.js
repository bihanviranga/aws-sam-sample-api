const getItems = async(event, context) => {
  console.log('[items::getItems] Started');

  const items = [
    {
      id: 1,
      title: 'Buy eggs',
      completed: false,
    },
    {
      id: 2,
      title: 'Set up file server',
      completed: false,
    },
  ]

  const responseBody = {
    items,
  };

  const responseObject = {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  };

  return responseObject;
}

module.exports = {
  getItems,
}