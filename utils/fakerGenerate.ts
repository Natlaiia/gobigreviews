import { faker } from '@faker-js/faker';
 
export function generateRandomUser() {
  const name = faker.person.firstName();                    
  const email = faker.internet.email({ provider: 'example.com' }); 
  const password = faker.internet.password({
    length: 12,
    memorable: true,
    pattern: /[A-Z]/,
    prefix: 'Qw+',
  });
 
  return {
    name,
    email,
    password,
  };
}