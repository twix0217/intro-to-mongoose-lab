const prompt = require('prompt-sync')();
const Customer = require('./models/customer');

const createCustomer = async () => {
  const name = prompt('Enter the customer name: ');
  const age = parseInt(prompt('Enter the customer age: '), 10);

  const customer = new Customer({ name, age });
  await customer.save();
  console.log('Customer created successfully!');
};

const findCustomers = async () => {
  const customers = await Customer.find({});
  console.log("All customers:", customers);
};

const updateCustomer = async () => {
  await findCustomers();
  const id = prompt('Copy and paste the id of the customer you would like to update here: ');
  const name = prompt('What is the customer\'s new name? ');
  const age = parseInt(prompt('What is the customer\'s new age? '), 10);

  await Customer.findByIdAndUpdate(id, { name, age });
  console.log('Customer updated successfully!');
};

const deleteCustomer = async () => {
  await findCustomers();
  const id = prompt('Copy and paste the id of the customer you would like to delete here: ');

  await Customer.findByIdAndDelete(id);
  console.log('Customer deleted successfully!');
};

const main = async () => {
  console.log("Welcome to the CRM");
  console.log("\nWhat would you like to do?\n");
  console.log("1. Create a customer");
  console.log("2. View all customers");
  console.log("3. Update a customer");
  console.log("4. Delete a customer");
  console.log("5. Quit");

  const choice = prompt('Number of action to run: ');

  if (choice === '1') {
    await createCustomer();
  } 
  else if (choice === '2') {
    await findCustomers();
  } 
  else if (choice === '3') {
    await updateCustomer();
  } 
  else if (choice === '4') {
    await deleteCustomer();
  } 
  else if (choice === '5') {
    console.log('Exiting the application');
    mongoose.connection.close();
    return;
  }
   else {
    console.log('Invalid choice. Please try again.');
  }

  main(); 
};

main();


