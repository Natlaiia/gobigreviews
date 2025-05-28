export function generateRandomUser() {
  
    const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  const name = `TestUser_${randomString}`;
  const email = `test_${timestamp}@gmail.com`;
  const password = `Passw0rd+${randomString}`;
 
  return {
    name,
    email,
    password,
  };
}

export function generateRandomInvalidData() {
  
  const timestamp = Date.now();
  const name = ``;
  const email = `test_${timestamp}com`;
  const password = `1`;
 
  return {
    name,
    email,
    password,
  };
}